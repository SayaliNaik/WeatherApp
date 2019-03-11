var request = require('request');
const argv = require('yargs').argv;

var apiKey = '*********************************';
var city = argv.c ||'portland';
var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    var weather = JSON.parse(body)
    var message =`Its ${weather.main.temp} degrees in ${weather.name}`;
    console.log(message);
}
}
)
