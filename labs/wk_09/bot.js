// https://hackernoon.com/create-a-simple-twitter-bot-with-node-js-5b14eb006c08


var twit = require('twit')
var config = require('./config.js')


var retweet = function() {
  var params = {
    q: '#nodejs, #Nodejs',
    result_type: 'recent',
    lang: 'en'    
  } 
}


// grab & retweet as soon as program is running...
retweet();
// retweet in every 50 minutes
setInterval(retweet, 3000000);