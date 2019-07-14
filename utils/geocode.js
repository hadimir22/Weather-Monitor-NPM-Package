const request = require("request");
const keys = require("../config");

const geocode = (address, callback) => {
  var mabBoxURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${keys.mapBoxApi}&limit=1`;
  request({ url: mabBoxURL, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect", undefined);
    } else if (response.body.features.length === 0) {
      callback("try some other location", undefined);
    } else {
      const data = {
        lat: response.body.features[0].center[1],
        long: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      };
      callback(undefined, data);
    }
  });
};

module.exports = geocode;
