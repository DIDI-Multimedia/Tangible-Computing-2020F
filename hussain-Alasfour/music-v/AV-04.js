
let mic, fft;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
  noFill();
canvas.parent('p5container');
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  background(0);

  let spectrum = fft.analyze();
	let w = map(mouseX, 0, width, 0, 175);

	translate(w,0,mouseY)
		scale(.5, .5);

  beginShape();
  for (q= 0; q < spectrum.length; q++) {
    box(q,300, map(spectrum[q], -150, 2, height, 0));
					stroke(100,q*50,q*100,50)

  }
  endShape();
	
	console.log(spectrum.length)
}