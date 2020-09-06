/*

Gradient Array

*/

let rot = 0

function setup(){

  let canvas = createCanvas(windowWidth*0.5,25);
  canvas.parent('myContainer');
  stroke(255)

}
function draw(){


   
  // background(255)
  fill(255,15)
  rect(0,0,width,height)
  textSize(width*0.025)

  let string = 'Tangible Computing'

  let numCol = string.length;
  let numRow = string.length;
  let stepX = width / numCol // height of box 
  let stepY = height / numRow // width of box 

  // for (var col = 0; col < numCol; col++){

  //   for (var row = 0; row < numRow; row++){

  //     let posX = width*0.05 +row*stepX*0.9
  //     let posY = height*0.05+ col*stepY*0.9
  //     fill(col/numCol*255,row/numRow*155+mouseY/height*100,mouseX/width*255,225)
    
  //     let v = createVector(mouseX-posX, mouseY-posY);
  // // println(v.heading());  // Prints "1.1071488"
  //     push()
  //     translate(posX,posY)
  //     scale(1,0.5)
  //     rotate(v.heading()+rot+millis()*0.001)

  //     text(string[row],0,0)
  //     // rect(0,0,stepX,stepY) 
  //     pop()
  //   }
  // }
  stroke(0,255,0,100)
  strokeWeight(1)
    line(cos(millis()/10000)*width,0,cos(millis()/10000)*width,height)
  line(sin(millis()/1000)*width,0,sin(millis()/1000)*width,height)
  noStroke()


  noStroke()
  rot += 0.0001

}

function mousePressed() {
  console.log('mousePressed',rot)
  rot -= 0.05
}

function windowResized() {
  resizeCanvas(windowWidth*0.5,25);
}