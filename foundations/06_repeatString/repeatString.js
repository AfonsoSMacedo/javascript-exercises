const repeatString = function(text, times) {
    if (times < 0)
        return "ERROR";

    let finalString = ""
    
    for (let index = 0; index < times; index++) {
        finalString = finalString + text 
    }
    
    return finalString
    
 };


// Do not edit below this line
module.exports = repeatString;
