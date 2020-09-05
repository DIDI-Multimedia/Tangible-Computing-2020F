


var promise = new Promise( function( resolve,reject ){
	
	var probabilityItsGood = 0.35 
	var diceRoll =Math.random() 

	console.log(diceRoll)
	if (diceRoll > probabilityItsGood){

		resolve('Suicide Squad 2 = 5 thumbs up')
	
	} else {

		reject('Suicide Squad 2 is a crappy idea')

	}


})


promise.then( function(successMessage){
	
	console.log(successMessage)

}, function(errorMessage){

	console.log(errorMessage)


})

   // var promise = new Promise(function(resolve, reject) { 
   //      resolve('Geeks For Geeks'); 
   //  }) 
      
   //  promise 
   //      .then(function(successMessage) { 
   //         //success handler function is invoked 
   //          console.log(successMessage); 
   //      }, function(errorMessage) { 
   //          console.log(errorMessage); 
   //      }) 