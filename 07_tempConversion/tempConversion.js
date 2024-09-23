const convertToCelsius = function(degreesF) {
  let conversion = (degreesF - 32) * (5/9);
  if (conversion % 1 !== 0) return +conversion.toFixed(1);
  return conversion
};

const convertToFahrenheit = function(degreesC) {
  let conversion =  degreesC * (9/5) + 32;
  if (conversion % 1 !== 0) return +conversion.toFixed(1);
  return conversion;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
