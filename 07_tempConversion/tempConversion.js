const convertToCelsius = function(temp) {
    temp = (temp - 32) * .5556
    return Math.round(temp * 10) / 10
};

const convertToFahrenheit = function(temp) {
    temp = (temp * 1.8) + 32
    return Math.round(temp * 10) / 10
}
convertToFahrenheit(0)
convertToFahrenheit(73.2)
convertToFahrenheit(-10)


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
