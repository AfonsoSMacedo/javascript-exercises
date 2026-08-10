function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function sum(array) {
  result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

function multiply(array) {
  product = 0;
  for (let i = 0; i < array.length; i++) {
    product = product * array[i];
  }
  return product;
}
function power(a, b) {
  return Math.pow(a, b);
}
function factorial(a) {
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
}
//6. `factorial()`: given a single number, find its [factorial](https://www.mathsisfun.com/numbers/factorial.html
function main() {
  console.log(add(0, 0) + " Expect 0");
  console.log(add(2, 2) + " Expect 4");
  console.log(add(2, 6) + " Expect 8");

  console.log(subtract(10, 4) + " Expect 6");
  console.log(subtract(-10, -4) + " Expect -6");
  console.log(subtract(-8, 7) + " Expect -15");

  console.log(sum([]) + " Expect 0");
  console.log(sum([7]) + " Expect 7");
  console.log(sum([7, 11]) + " Expect 18");
  console.log(sum([1, 3, 5, 7, 9]) + " Expect 25");

  console.log(multiply([2, 4]) + " Expect 8");
  console.log(multiply([2, 4, 6, 8, 10, 12, 14]) + " Expect 645120");

  console.log(power(4, 3) + " Expect 64");
  console.log(power(3, 10) + " Expect 59049");

  console.log(factorial(0) + " Expect 1");
  console.log(factorial(1) + " Expect 1");
  console.log(factorial(2) + " Expect 2");
  console.log(factorial(5) + " Expect 120");
  console.log(factorial(10) + " Expect 3628800");
}

main();
