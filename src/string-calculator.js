function add(numStr) {
  if (numStr == "") return 0;
  let delimiter = /[\n,]/;

  if (numStr.substring(0, 2) === "//") {
    const splitedStr = numStr.split("\n");
    delimiter = splitedStr[0].substring(2);
    numStr = splitedStr[1];
  }
  const numbers = numStr.split(delimiter).map(Number);
  return numbers.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
