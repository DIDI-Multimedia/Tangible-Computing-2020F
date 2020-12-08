let tex;
let angle = 0;
let pinkflower;
let butterfly

function preload() {
  tex = loadImage('equirectangular_hd.jpg');
  pinkflower = loadImage('pinkflower.jpg')
  butterfly = loadModel('mamooth.obj')
  createVRCanvas(200, 200);
  noStroke();
}


function setup() {
    setVRBackgroundColor(200, 0, 150);
}

function draw() {
    background(0);
    // surroundTexture(tex);
    // push()
    // directionalLight(255, 255, 255, 0, 0, 1);
    // rotateX(angle);
    // rotateY(angle * 1.3);
    // rotateZ(angle * 0.7);
    // scale(20);
    // model(butterfly);
    // pop()

    // // box(2);
    // angle += 0.03;

}

function setLights(){
    ambientLight(100);


}
