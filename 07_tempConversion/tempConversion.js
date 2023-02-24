const convertToCelsius = function(temp) {
    temp = (temp-32) * .5556
    return Math.round(temp *10)/10
};

const convertToFahrenheit = function(temp) {
};

convertToCelsius(32)
convertToCelsius(100)
convertToCelsius(-100)



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
