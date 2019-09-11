const request = require("request");
const keys = require("../config");

const forecast = (lat, long) => {
  return new Promise((resolve, reject) => {
    let url = `https://api.darksky.net/forecast/${keys.darkSkyApiKey}/${lat},${long}?units=auto`;

    request({ url: url, json: true }, function(error, response) {
      if (error) {
        reject({ error: "unable to fetch" });
      } else if (response.body.error) {
        reject({ error: "unable to fetch" });
      } else {
        let data = {
          temp: response.body.currently.temperature,
          rain: response.body.currently.precipProbability,
          humidity: response.body.currently.humidity,
          windSpeed: response.body.currently.windSpeed
        };
        resolve(data);
      }
    });
  });
};

module.exports = forecast;
