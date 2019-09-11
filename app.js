const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

getForecast = async (location = "srinagar") => {
  try {
    let geoData = await geocode(location);
    let forecastData = await forecast(geoData.lat, geoData.long);
    const data = {
      temperature: forecastData.temp,
      rainProbability: forecastData.rain,
      forLocation: geoData.location
    };
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = getForecast;
