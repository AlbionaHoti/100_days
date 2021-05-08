/*

*/

const request = require('request');

const API_URL =
  'http://api.weatherstack.com/current?access_key=618d1c6354c72a4f36a869a3d8d135ec&query=37.8267,-122.4233&units=f';

request({ url: API_URL, json: true }, (error, response) => {
  const weatherTemp = response.body.current.temperature;

  const precip = response.body.current.precip;

  const res =
    response.body.current.weather_descriptions[0] +
    ' ' +
    '- It is currently ' +
    weatherTemp +
    ' degrees out. There is a ' +
    precip +
    '% chance of rain.';

  console.log(res);
});

// Geocoding API to get the location from the lat and long. -- Converting it into the location

// it's going to require to HTTP Requests to build the Weather App.

// So the user gives the address, and we convert it to Lat/Long and then -> we take the weather
