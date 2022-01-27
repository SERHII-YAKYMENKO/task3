const text = [
  ["Hello", "world"],
  ["Brad", "came", "to", "dinner", "with", "us"],
  ["He", "loves", "tacos"]
];

const rulesForText = ["LEFT", "RIGHT", "LEFT"];

function fillArray(item, rule) {
  if (item.length < 16) {
    const diff = 16 - item.length;
    if (diff) {
      if (rule === "RIGHT") {
        for (let i = 0; i < diff; i++) {
          item = ` ${item}`;
        }
      } else {
        for (let i = 0; i < diff; i++) {
          item = item.concat(` `);
        }
      }
    }
  }
  return item;
}

function transform(data, rules) {
  const convertedToString = data.map((item) => item.join(" "));
  const starLine = "*".repeat(18);

  const result = [];
  result[0] = starLine;

  for (let j = 0; j < convertedToString.length; j++) {
    let item = convertedToString[j];
    const currentRule = rules[j];
    item = fillArray(item, currentRule);
    let leftItem;
    if (item.length > 16) {
      const diff = item.length - 16;
      leftItem = item.slice(diff + 2);
      item = item.slice(0, diff + 1);
      item = fillArray(item, currentRule);
    }

    result.push(`*${item}*`);

    if (leftItem) {
      leftItem = fillArray(leftItem, currentRule);
      result.push(`*${leftItem}*`);
    }
  }

  result.push(starLine);
  
  return result;
}

console.log(transform(text, rulesForText));