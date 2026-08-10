function palindromes(string) {
  string = string.replace(/ /g, "");
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
}

function main() {
  console.log(palindromes("isto e um teste"));
  console.log(
    "detects odd-length palindrome:",
    palindromes("racecar") === true,
  );

  console.log("detects even-length palindrome:", palindromes("abba") === true);

  console.log(
    "detects palindrome with numbers:",
    palindromes("rac3e3car") === true,
  );

  console.log(
    "detects palindrome with multiple words:",
    palindromes("A car, a man, a maraca.") === true,
  );

  console.log("ignores punctuation:", palindromes("racecar!") === true);

  console.log("is case insensitive:", palindromes("Racecar!") === true);

  console.log(
    "detects non-palindromes:",
    palindromes("ZZZZ car, a man, a maracaz.") === false,
  );

  console.log(
    "detects non-palindromes with numbers:",
    palindromes("r3ace3car") === false,
  );
}

main();
