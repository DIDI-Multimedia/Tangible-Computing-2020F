console.log('app.js')

var age = 29 


function celebrateBirthday(age,callback){

	age--
	callback(age)

}

celebrateBirthday( age, function(age){

	console.log('Happy ' + age + 'st birthday')
	
	})

// birthdayGreeting()