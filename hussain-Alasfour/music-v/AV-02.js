
let mic, fft;

let canvas= createCanvas()
function setup() {
createCanvas(windowWidth, windowHeight, WEBGL);
canvas.parent('p5container');	
noFill();

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);

}

function draw() {
  background(0);

  let spectrum = fft.analyze();

  beginShape();
  for (q = 0; q < spectrum.length; q++) {
    box(100, map(spectrum[q], -100, 2, height, 10));
		stroke(100,q*50,q*100,50)

  }
  endShape();
	
}