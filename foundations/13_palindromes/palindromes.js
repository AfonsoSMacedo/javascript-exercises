const palindromes = function (string) {
    string = string.replace(/ /g, "");
  string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  string = string.toLowerCase();
  let result = "";
  for (let i = 0; i < string.length; i++) {
    result = string[i] + result;
    i;
  }
  if (result == string) {
    return true;
  } else {
    return false;
  }

};

// Do not edit below this line
module.exports = palindromes;
