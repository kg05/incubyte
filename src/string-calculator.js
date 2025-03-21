function add(numStr) {
  if (numStr == "") return 0;
  const numbers = numStr.split(/[\n,]/).map(Number);
  return numbers.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
