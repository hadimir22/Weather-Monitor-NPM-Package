const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const chalk = require("chalk");

getForecast = (location = "srinagar", callback) => {
  if (!location) {
    console.log(chalk.red.bold("No location provided"));
  } else {
    geocode(location, (err, data) => {
      if (err) {
        return console.log(chalk.red.bold(err));
      }
      forecast(data.lat, data.long, (err, forecastdata) => {
        if (err) {
          return console.log(chalk.red.bold(err));
        }
        const forecast = {
          temperature: forecastdata.temp,
          rainProbability: forecastdata.rain,
          forLocation: data.location
        };
        callback(forecast);
      });
    });
  }
};

module.exports = getForecast;
