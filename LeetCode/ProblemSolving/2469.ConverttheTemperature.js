/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (Celsius) {
  let Kelvin = Celsius + 273.15;
  let Fahrenheit = Celsius * 1.8 + 32.0;
  return [Kelvin, Fahrenheit];
};
