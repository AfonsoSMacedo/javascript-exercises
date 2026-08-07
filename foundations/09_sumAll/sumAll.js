const sumAll = function(a, b) {
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

};

// Do not edit below this line
module.exports = sumAll;
