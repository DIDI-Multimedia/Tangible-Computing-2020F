/*
  PERLIN NOISE CLOCK 
  ADAPTED FROM "Polar Perlin Noise Loop" by Daniel Schiffman
*/

let phase = 0;
let zoff = 0;
let noiseMax = 1


function setup() {

  createCanvas(800, 800);
  initialize()

}

function draw() {
  // initialize()
  translate(width / 2, height / 2);  
  stroke(255,0,0)
  noFill()
  beginShape()

  for (let a = 0; a < TWO_PI*((minute()*60+second())/3600); a += radians(5)) {

    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 25,100 );
    let x = (1+(hour()+1)/12)*r * cos(a);
    let y = (1+(hour()+1)/12)*r * sin(a);
    vertex(x, y);

  }
  
  endShape()

}

function initialize(){
  background(0);
  translate(width / 2, height / 2);
  stroke(255);
  strokeWeight(1);
  // noFill();

  for (let rad = hour(); rad > 0; rad--){
    beginShape()
  fill(random(255,50))

    for (let a = 0; a < TWO_PI; a += radians(5)) {

      let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
      let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
      let r = map(noise(xoff, yoff, zoff), 0, 1, 25,100 );
      let x = (1+rad/12)*r * cos(a);
      let y = (1+rad/12)*r * sin(a);
      vertex(x, y);
    }
    endShape()

  }

  // endShape(CLOSE);
  phase += 0.003;
  zoff += 0.01;

}