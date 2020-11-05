
let mic, fft;
Let canvas= createCanvas(...,)

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
	let w = map(mouseX, 0, width, 0, 175);
 
  beginShape();
  for (q = 0; q < spectrum.length; q++) {
				
			stroke(100 , w ,q+100)
		
push()
    box( map(spectrum[q], -150, 2, height, 0),q/2,q/2);
				
pop()
  }
  endShape();
	translate(10,10,0)
	
}