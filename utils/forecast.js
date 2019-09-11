const request = require("request");
const keys = require("../config");

// const forecast = (lat, long, callback) => {
//   var url = `https://api.darksky.net/forecast/${
//     keys.darkSkyApiKey
//   }/${lat},${long}?units=auto`;

//   request({ url: url, json: true }, function(error, response) {
//     if (error) {
//       callback("unable to fetch", undefined);
//     } else if (response.body.error) {
//       callback("unable to fetch", undefined);
//     } else {
//       let data = {
//         temp: response.body.currently.temperature,
//         rain: response.body.currently.precipProbability
//       };
//       callback(undefined, data);
//     }
//   });
// };

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
          rain: response.body.currently.precipProbability
        };
        resolve(data);
      }
    });
  });
};

// const foo = async () => {
//   let data = await forecast(34.001727, 74.762438);
//   console.log(data);
// };

// foo();

module.exports = forecast;
