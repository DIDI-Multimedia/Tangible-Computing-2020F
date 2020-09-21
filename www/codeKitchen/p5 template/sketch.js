/*

Gradient Array

*/


function setup(){

  createCanvas(800,800);
  background(255)
  let flower01 = createFlower() // creates a random flower
  let flower02 = createFlower() // creates a random flower
  drawFlower(flower01)
  drawFlower(flower02)

  // stroke(255)

}

function createFlower(){

  let flower = {}
  flower.posX = width/2
  flower.posY = height/2 
  flower.numPetals = 10 
  flower.innerRadius = width/16
  flower.outerRadius = width/8 
  flower.color1 = [255,0,0] // array [r,g,b]
  flower.color2 = [0,255,0]
  flower.rotation = PI/4 
  flower.speed = 1  
  flower.scale = 1 

  return flower


}


function drawFlower(flower){

  fill(flower.color1)

  for (var angle = 0; angle < TWO_PI; angle += TWO_PI/flower.numPetals){

    console.log(angle)

    push()
    translate(flower.posX,flower.posY)
    rotate(angle)
    ellipse(0,flower.innerRadius,(flower.outerRadius-flower.innerRadius)/2,flower.outerRadius-flower.innerRadius)
    pop()

  }
  
  fill(flower.color2)
  ellipse(flower.posX,flower.posY,flower.innerRadius,flower.innerRadius)


}