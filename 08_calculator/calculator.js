const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	return nums.reduce((total, curr) => total + curr, 0);
};

const multiply = function(nums) {
  return nums.reduce((total, curr) => total * curr, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  let result = 1;
	for (i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
