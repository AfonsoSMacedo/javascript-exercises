function convertToCelsius(value) {
  celsius = (value - 32) / 1.8;
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
}
function convertToFahrenheit(value) {
  let fahrenheit = value * (9 / 5) + 32;
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  return fahrenheit;
}

function main() {
  console.log(convertToCelsius(32) + " expect 0");
  console.log(convertToCelsius(100) + " expect 37.8");
  console.log(convertToCelsius(-100) + " expect -73.3");
  console.log(convertToFahrenheit(0) + " expect 32");
  console.log(convertToFahrenheit(73.2) + " expect 163.8");
  console.log(convertToFahrenheit(-10) + " expect 14");
}

main();
