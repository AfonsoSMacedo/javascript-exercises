function fibonacci(findex) {
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


function main(){
console.log(fibonacci(4) + " expect 3")
console.log(fibonacci(6) + " expect 8")
console.log(fibonacci(10) + " expect 55")
console.log(fibonacci(15) + " expect 610")
console.log(fibonacci(25) + " expect 75025")
console.log(fibonacci(0) + " expect 0")
console.log(fibonacci(-25) + " expect OOPS")
console.log(fibonacci(1) + " expect 1")
console.log(fibonacci(2) + " expect 1")
console.log(fibonacci(8) + " expect 21")
}

main()
