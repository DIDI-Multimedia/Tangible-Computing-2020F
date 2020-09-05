var Twit = require('twit')
var request = require('request');

var config = {

        consumer_key: 'igirFZdvoZ4BYFAvVeJlYVKPi',
        consumer_secret: 'yHTKZ7T1cXA1a7lUBcPjID632f0SEoka2ShjffXjL0oSR0z9xS',
        access_token: '1188501676573020160-xbOxNnwJuhBhksJIe4kNdigGe43t7i',
        access_token_secret: 'h9Qx7QGTIcR9UKnOKjcbY8fSxEnJlP9snYx5fXYvsxhOr'

}

var tweeter = Twit(config)


function tweeDIDI(txt){

	var tweet = {
		status: txt 
	}
	
	function tweeted(err,data,response){

		if (err){
			console.log('error', err)
		
		} else { 

			console.log('sending tweet...')

		}

	}

	tweeter.post('statuses/update', tweet, tweeted) // send tweet 

}


// for (var i = 0; i < 5; i++ ){
	tweeDIDI('I am not a troll...' + i)
// }
