/*

Gradient Array

*/

let rot = 0

function setup(){

  let canvas = createCanvas(800,200);
  canvas.parent('myContainer');
  stroke(255)

}
function draw(){

  let numCol = 10
  let numRow = 5
  let stepX = width / numCol // height of box 
  let stepY = height / numRow // width of box 
   
  background(255)

  for (var col = 1; col < numRow-1; col++){
    for (var row = 1; row < numCol-1; row++){
      let posX = row*stepX
      let posY = col*stepY
      fill(col/numCol*255,row/numRow*155+mouseY/height*100,mouseX/width*255,225)
      let v = createVector(mouseX-posX, mouseY-posY);
  // println(v.heading());  // Prints "1.1071488"
      push()
      translate(posX,posY)
      scale(1,0.5)
      rotate(v.heading()+rot)
      rect(0,0,stepX,stepY) 
      pop()
    }
  }
  rot += 0.0001
}

function mousePressed() {
  console.log('mousePressed',rot)
  rot -= 0.05
}