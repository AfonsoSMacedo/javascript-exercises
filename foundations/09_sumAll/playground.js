function sumAll(a,b) {

if (Number.isInteger(a) && Number.isInteger(b) && a > 0 && b > 0) {
    if (b < a) {
        c = b
        b = a
        a = c
    }
    let total = 0
    while (a <= b ) {
        total = total + a
        a += 1
    }
    
    return total
    }
        
else
    return "ERROR!";
}

function main() {
    console.log(sumAll(1, 4) + " - expected 10")
    console.log(sumAll(2, 4) + " - expected 9")
    console.log(sumAll(1, 4000) + " - expected 8002000")
    console.log(sumAll(123, 1) + " - expected 7626")
    console.log(sumAll(-10, 4) + " - expected ERROR")
    console.log(sumAll(2.5, 4) + " - expected ERROR")
    console.log(sumAll(10, "90") + " - expected ERROR")
    console.log(sumAll(10, [90, 1]) + " - expected ERROR")
    }

main()
    