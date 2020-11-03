// collision detection 
// will run better on your desktop computer instead of open processing

let capture

function setup() {

	// body...
	let canvas = createCanvas(600, 600)
	canvas.parent('p5container')
	capture = createCapture()
	capture.hide()

}

function draw() {

	// background('green')
	// background(capture.get())
	// image(capture,0,0)

	let step = 50

	textAlign(CENTER, CENTER)

	for (var i = 0; i < capture.width; i += step) {

		for (var j = 0; j < capture.height; j += step) {

			let col = capture.get(i, j)
			let val = brightness(col)

			if (val < 50) {

				fill(val)
				// textSize(step)
				// rect(i, j, step, step)

				text(val, i, j)

			} else {

				fill(255)
				rect(i, j, step, step)
			}


		}


	}

	stroke(0)
	strokeWeight(20)

	noStroke()

	let c = get(mouseX, mouseY)

	textSize(24)
	text(c, 50, 50)

	fill(0, 255, 0)

	let black = color(0, 0, 0, 255)
	// console.log(c)
	// console.log(black)

	if (c[0] === 0 && c[1] === 0 && c[2] === 0) {

		fill(255, 0, 0)
		console.log('true')

	}

	circle(mouseX, mouseY, 10, 10)



}
