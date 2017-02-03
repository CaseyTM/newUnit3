var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.get('/', (req, res, next)=>{
	var student1 = "Sean";
	var fruits = ['apple','banana','orange','pear'];
  res.render('index', { student: student1, fruitArray: fruits });
});
router.get('/canvas', (req, res, next)=>{
	res.render('canvasGame', {});
});
router.get('/weather', (req, res, next)=>{
	var apikey = 'e312dbeb8840e51f92334498a261ca1d';
    var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID="+apikey;
    request.get(weatherUrl, (error, response, weatherData)=>{
   	// res.send("done");
   	weatherData = JSON.parse(weatherData);
   	res.render('weather.ejs', {weatherObject: weatherData})
    });
});
module.exports = router;
