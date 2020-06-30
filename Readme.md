# Description

With the **Weather Forecast API**. you can get the forecast of any location easily. You don't have to provide coordinates just pass the location name in the function and get the forecast.

> The forecast units will be returned based on the location

# Getting Started

> Install the module with: `npm i weather-monitor`

# Example

      const getForecast = require("weather-monitor");

       let data = getForecast("srinagar");
       console.log(data);

# Response

     {
            temperature: 12.77,
            rainProbability: 0,
            humidity: 0.73,
            windSpeed: 1.96,
            cloudCover: 0.2,
            visibility:5,
            forLocation: 'Srinagar Kashmir'

       }
