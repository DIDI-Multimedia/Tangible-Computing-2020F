// var name = 'noorio'
// var name02 = 'Pusheen'
// console.log(name)
// console.log(name02 + name)

let express = require('express')
let app = express() // loads instance of express
let server = app.listen(3000)
app.use(express.static('public'))
console.log('express server running')


const request = require('request');

let apiKey = '4efbc6b7681a84b8edb85f7a9b618d70';
let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`


// `http://api.openweathermap.org/data/2.5/weather?q=Dubai&appid=4efbc6b7681a84b8edb85f7a9b618d70`

request(url, function (err, response, body) {

  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
  
});