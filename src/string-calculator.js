function add(numStr) {
  if (numStr == "") return 0;
  let delimiter = /[\n,]/;

  if (numStr.substring(0, 2) === "//") {
    const splitedStr = numStr.split("\n");
    delimiter = splitedStr[0].substring(2);
    numStr = splitedStr[1];
  }
  const numbers = numStr.split(delimiter).map(Number);
  let number = numbers.find((number) => number < 0);
  if (number) {
    throw new Error(`negative numbers not allowed ${number}`);
  }
  return numbers.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
