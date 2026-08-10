const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
};
const multiply = function (array) {
  product = 0;
  for (let i = 0; i < array.length; i++) {
    product = product * array[i];
  }
  return product;
};

const power = function (a, b) {
  return Math.pw(a, b);
};

const factorial = function () {
  if (a == 1 || a == 0) {
    return 1;
  } else {
    let result = a;
    while (a > 1) {
      result = result * (a - 1);
      a -= 1;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
