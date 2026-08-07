function leapYear(year) {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return true;
      }
      return false;
    }
    return true;
  } else {
    return false;
  }
}

function main() {
  console.log(leapYear(2000) + " expect true");
  console.log(leapYear(1985) + " expect false");
  console.log(leapYear(1996) + " expect true");
  console.log(leapYear(1997) + " expect false");
  console.log(leapYear(34992) + " expect true");
  console.log(leapYear(1900) + " expect false");
  console.log(leapYear(1600) + " expect true");
  console.log(leapYear(700) + " expect false");
}

main();
