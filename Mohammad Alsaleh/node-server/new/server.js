
let express = require('express');
let app = express();
let host = 3000
let server = app.listen(host)

var five = require("johnny-five");

const { Board, Led } = require("johnny-five");
const board = new Board(

	{
	port: "COM9"	
	}

	);

board.on("ready", () => {

var servo1  = new five.Servo.Continuous(10);
var servo2  = new five.Servo.Continuous(3);
const led 	= new Led(13);

 process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.setRawMode(true);




app.use(express.static('public'));

console.log("Socket server is running. localhost:" + host)

let socket = require('socket.io')
let io = socket(server);

io.sockets.on('connection', newConnection)

function newConnection(socket){
	console.log('connection:',	socket.id);
	socket.on('mouse', mouseMsg);
	
	function mouseMsg(data) {
		socket.broadcast.emit('mouse', data)
		console.log(data)
		// led.blink(50);

	if (data.x <= 600) {
		  console.log("Left")
			servo1.ccw();
			servo2.ccw();
			led.on()
		} else {
		 console.log("Right")
			servo1.cw();
			servo2.cw();
			led.off()

		}

	}
}

});