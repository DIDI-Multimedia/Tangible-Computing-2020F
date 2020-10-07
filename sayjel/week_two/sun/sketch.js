

function setup(){
  let canvas = createCanvas(480, 480,WEBGL);   
  canvas.parent('p5container');
  capture = createCapture(VIDEO);

  capture.hide()
  noStroke()

}