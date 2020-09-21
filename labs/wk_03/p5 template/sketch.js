/*

Gradient Array

*/

  let numCol = 5
  let numRow = 5
  let step = 1
  let counter = 0


function setup(){

  createCanvas(800,800);
  stroke(255)

}
function draw(){


   
  background(255)

  counter ++ 

  if (counter > 5){
    
    numCol+= step
    numRow+= step  
    counter = 0

  }





  let stepX = width / numCol // height of box 
  let stepY = height / numRow // width of box 
  drawBoxes(numRow,numCol,stepX,stepY)

  if (numCol == 50 || numCol == 1){
    // reset
    step *= -1
  }


}


function drawBoxes(numRow,numCol,stepX,stepY){

    for (var col = 0; col < numRow; col++){
    for (var row = 0; row < numCol; row++){
      fill(col/numCol*255,row/numRow*255,mouseX/width*255)
      rect(row*stepX,col*stepY,stepX,stepY) 
    }
  }
}