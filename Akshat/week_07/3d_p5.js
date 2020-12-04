//draw a spinning teapot
let teapot;

function preload() {
  // Load model with normalise parameter set to true
  teapot = loadModel('3d_model/obj_1.obj', true);
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(200);
  scale(0.4); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial(); // For effect
  model(teapot);
}