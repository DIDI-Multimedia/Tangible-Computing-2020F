let counter = 0;

function preload() {
  createVRCanvas();
}

function setup() {
  setVRBackgroundColor(200, 0, 150);
}

// Anything that needs to be calculated once per
// frame should go in here
function calculate() {
  counter += 0.1;
}

function draw() {
  fill(0, 255, 0);
  translate(0, 0, 10);
  rotateX(10);
  rotateY(counter);
  strokeWeight(0.1);
  box(5);
}
