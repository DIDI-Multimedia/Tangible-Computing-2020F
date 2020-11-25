console.log('server.js')

var express = require('express')

var app = express()
var server = app.listen(3000)

app.use(express.static('public'))

// var io = require('socket.io')(server);

// io.sockets.on('connection',

//   // We are given a websocket object in our function
//   function (socket) {
        
//         console.log("We have a new client: " + socket.id);
//         socket.on('response',
          
//           function(data){

//             console.log(data)

//           })
         
//          socket.on('disconnect', function() {

//           console.log("Client has disconnected");

//          })

//      })


console.log('my server is running')