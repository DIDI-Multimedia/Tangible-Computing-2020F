const { Board, Led } = require("johnny-five");
const board = new Board(

	{
	port: "COM9"	
	}

	);

board.on("ready", () => {
  const led = new Led(13);

  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  board.repl.inject({
    led
  });

  led.blink(500);
});