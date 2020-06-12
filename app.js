const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const chalk = require("chalk");

getForecast = async (location = "srinagar") => {
  try {
    let geoData = await geocode(location);
    let forecastData = await forecast(geoData.lat, geoData.long);
    const data = {
      forLocation: geoData.location,
      temperature: forecastData.temp,
      rainProbability: forecastData.rain,
      humidity: forecastData.humidity,
      cloudCover: forecastData.cloudCover,
      visibility: forecastData.visibility,
      windSpeed: forecastData.windSpeed,
    };
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = getForecast;
