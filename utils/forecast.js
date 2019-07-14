const request = require("request");
const keys = require("../config");

const forecast = (lat, long, callback) => {
  var url = ` https://api.darksky.net/forecast/${
    keys.mapBoxApi
  }/${lat},${long}`;

  request({ url: url, json: true }, function(error, response) {
    if (error) {
      callback("unable to fetch", undefined);
    } else if (response.body.error) {
      callback("unable to fetch", undefined);
    } else {
      let data = {
        temp: response.body.currently.temperature,
        rain: response.body.currently.precipProbability
      };
      callback(undefined, data);
    }
  });
};

module.exports = forecast;
