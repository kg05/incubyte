function add(numStr) {
  if (numStr == "") return 0;
  const numbers = numStr.split(",").map(Number);
  if (numbers.length == 1) return numbers[0];
  return numbers[0] + numbers[1];
}

module.exports = add;
