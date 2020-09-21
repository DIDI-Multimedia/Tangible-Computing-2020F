
// Reference tutorials:
// https://sabe.io/tutorials/creating-twitter-bot-node-js
// https://botwiki.org/resource/tutorial/random-image-tweet/

var Twit = require('twit')
var request = require('request');
// var config = require('./config.js')

var config = {

        consumer_key: 'igirFZdvoZ4BYFAvVeJlYVKPi',
        consumer_secret: 'yHTKZ7T1cXA1a7lUBcPjID632f0SEoka2ShjffXjL0oSR0z9xS',
        access_token: '1188501676573020160-xbOxNnwJuhBhksJIe4kNdigGe43t7i',
        access_token_secret: 'h9Qx7QGTIcR9UKnOKjcbY8fSxEnJlP9snYx5fXYvsxhOr'

}


let apiKey = '4efbc6b7681a84b8edb85f7a9b618d70';
let city = 'Shanghai';
let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey

var T = new Twit(config)


function tweetIt(txt) { //Function to send tweets

  var tweet = { // Message of tweet to send out

    status: txt,
    display_coordinates: true

  }

  T.post('statuses/update', tweet, tweeted); // Send the tweet, then run tweeted function

  function tweeted(err, data, response) { // Function to run after sending a tweet

    if (err) { // If error results
      console.log(err); // Print error to the console
    }

  }

}


request(url, function (err, response, body) {

  if(err){

    console.log('error:', error);
  
  } else {

  	console.log('Sending Tweet')
    // console.log('body:', JSON.parse(body));
    // let weather = body["wind"]
    // console.log(weather)
    let report = JSON.parse(body)

    // var stream = T.stream('user'); // Set up user stream
    var status = report.weather[0].description
    // console.log(status)
    tweetIt('Enjoying the ' + status + ' in ' + city + ' this morning!'); // Tweet "Hello world!"

  }
  
});

