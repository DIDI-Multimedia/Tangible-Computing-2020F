let capture;

function setup() {
  createCanvas(windowWidth, windowHeight)
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  //capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0, windowWidth, windowHeight);
  filter(INVERT);


  strokeWeight(0);
  fill(140,0,211);
  ellipse( windowWidth/2 , windowHeight/6 * 1 , 100, 100);
  fill(0,0,0);
  text('skateboard', windowWidth/2 -25 , windowHeight/6);
  fill(140,0,211);
  ellipse( windowWidth/2 , windowHeight/6 * 2 , 100, 100);
  fill(0,0,0);
  text('floating-led', windowWidth/2 -25 , windowHeight/6*2);
  fill(140,0,211);
  ellipse( windowWidth/2 , windowHeight/6 * 3 , 100, 100);
  fill(0,0,0);
  text('raindeer', windowWidth/2 - 25 , windowHeight/6*3);
  fill(140,0,211);
  ellipse( windowWidth/2 , windowHeight/6 * 4 , 100, 100);
  fill(0,0,0);
  text('neon-sign', windowWidth/2 - 25 , windowHeight/6*4);
  // fill(140,0,211);
  // ellipse( windowWidth/2 , windowHeight/6 * 5 , 100, 100);
  // fill(0,0,0);
  // text('raindeer', windowWidth/2 -25 , windowHeight/6*5);
  



}

function mousePressed(  ) {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, windowWidth/2, windowHeight/6 * 1);
  let e = dist(mouseX, mouseY, windowWidth/2, windowHeight/6 * 2);
  let f = dist(mouseX, mouseY, windowWidth/2, windowHeight/6 * 3);
  let g = dist(mouseX, mouseY, windowWidth/2, windowHeight/6 * 4);
  //let h = dist(mouseX, mouseY, windowWidth/2, windowHeight/6 * 5);
 
  if (d < 100) {
   window.location.href = "../ar-import.html"
  }

  if(e<100){
    window.location.href = "../ar-import-2.html"
  }
  
  if(f<100){
    window.location.href = "../ar-import-3.html"
  }

  if(g<100){
    window.location.href = "../ar-import-4.html"
  }
  // if(h<100){
  //   window.location.href = "../ar-import-6.html"
  // }
}
