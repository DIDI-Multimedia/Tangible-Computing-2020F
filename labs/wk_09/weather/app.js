// 21023d3ea61880e6fe514a6025bc98de

const request = require('request');

let apiKey = '4efbc6b7681a84b8edb85f7a9b618d70';
let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`


request(url, function (err, response, body) {

  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', JSON.stringify(body));
  }
  
});