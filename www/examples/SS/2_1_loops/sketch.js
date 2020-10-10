/*

Gradient Array

*/


function setup(){

  createCanvas(800,800);
  stroke(255)

}
function draw(){

  let numCol = 10
  let numRow = 10
  let stepX = width / numCol // height of box 
  let stepY = height / numRow // width of box 
   
  background(255)

  for (var col = 0; col < numRow; col++){
    for (var row = 0; row < numCol; row++){
      fill(col/numCol*255,row/numRow*255,mouseX/width*255)
      rect(row*stepX,col*stepY,stepX,stepY) 
    }
  }

}