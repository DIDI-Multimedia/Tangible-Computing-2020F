// Basic Promise example 


let us = 'banjo'
let pw = 'banjo123'

function login( user, password){

  return new Promise(function(resolve,reject){

    if (user == 'banjo' && password == 'banjo123') {

      resolve('logged in successfully!')

    } else { 

      reject('incorrect password or username')


    }
  
  })

}

login(us,pw).then( function( successMessage ) { 
       //success handler function is invoked 
        console.log(successMessage); 

    }, function(errorMessage) { 
        
        console.log( errorMessage ); 
    
    }) 