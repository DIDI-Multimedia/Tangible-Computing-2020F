const { Board, Led } = require("johnny-five");
const board = new Board(

{
	port: "COM9"	
}

	);

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on("ready", () => {
  console.log("Ready!");

  const led = new Led(13);
  led.blink(500);
});
