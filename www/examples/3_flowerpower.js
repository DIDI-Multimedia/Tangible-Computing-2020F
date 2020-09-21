console.log('3_flowerpower.js')
/*


*/

var plants = []
var numX = 12
var numY = 6


function setup(){

  let canvas = createCanvas(windowWidth/2,400);
  canvas.parent('myContainer');
  noStroke()
  background(255)

  const spacingX = width / numX

  const spacingY = height / numY 

  for (var x = spacingX; x < width; x+=spacingX){

    for (var y = spacingY; y < height; y+=spacingY){

      plants.push(generatePlant(x,y,spacingX,spacingY))

    }

  }

}
function draw(){

  background(255)

  for (var i = plants.length - 1; i >= 0; i--) {
    
    drawPlant(plants[i])
  
  }

}

function drawPlant(plant){

  push()
  
  translate(plant.posX,plant.posY)
  rotate(plant.rotation)
  scale(0.5*sin(plant.rotation))
  fill(plant.color2)
  ellipse(0,0,25,25)
  fill(plant.color)

  for(var i = 0; i < TWO_PI; i+= PI/plant.numLeaves ){

    push()

    rotate(i)
    ellipse(0,0+plant.sX*0.5,25,50)

    pop()

  }

  pop()
  plant.rotation += plant.speed

}

function generatePlant(x,y,sX,sY) {

  let plant = {}
  plant.numLeaves = Math.floor(random(4,12))
  plant.posX = x 
  plant.posY = y 
  plant.sX = sX
  plant.sY = sY
  plant.rotation = random(TWO_PI)
  plant.color = [random(255),random(255),random(255)]
  plant.color2 = [random(255),random(255),random(255)]
  plant.speed = random(0.025,0.1)
  plant.stroke = random(1,5)

  return plant

}


