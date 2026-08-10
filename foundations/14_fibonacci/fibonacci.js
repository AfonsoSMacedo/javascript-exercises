const fibonacci = function(findex) {
  if (findex < 0) {
      return "OOPS"
    }
  else {
    let fib = [1, 1]

    while (fib.length < findex) {
      
    fib.push(fib.at(-1)+fib.at(-2))
    };
    return fib.at(-1)};
};

// Do not edit below this line
module.exports = fibonacci;
