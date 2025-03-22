function add(numStr) {
  if (numStr == "") return 0;
  let delimiter = /[\n,]/;

  if (numStr.substring(0, 2) === "//") {
    const splitedStr = numStr.split("\n");
    delimiter = splitedStr[0].substring(2);
    numStr = splitedStr[1];
  }

  let numbers = numStr.split(delimiter).map(Number);
  let negNumbers = numbers.filter((number) => number < 0);
  if (negNumbers.length > 0) {
    throw new Error(`negative numbers not allowed ${negNumbers.join(",")}`);
  }

  numbers = numbers.filter((number) => number <= 1000);

  return numbers.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
