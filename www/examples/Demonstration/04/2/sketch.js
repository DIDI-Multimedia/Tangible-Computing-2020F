// TenThousandX Assignment: // Add to this code to create a drawing // Note: do not delete anything 


function setup() {

    // do not change anything in setup 
    let canvas = createCanvas(800, 800, )
    canvas.parent('p5container');



}


function draw(){

  background(34,155,215)

  for (var x = 0; x < width; x+=200){

  for (var y = 0; y < width; y+=200){

    drawFlower(x,y,(x*y)/2)

    
  }


  }



}

function drawFlower(posX,posY,r){

  // petal 
  fill('yellow')
  let numPetals = 24
  let angle = TWO_PI/numPetals
  let innerRadius = 100 

  push()

  translate(posX, posY)
  rotate(frameCount/25)

  let scl = sin(millis()/2000+(posX+posY+r)/4)*2

  scale(scl)

  circle(0,0,innerRadius)

  for (var r = 0; r < TWO_PI; r+=angle){

    push()
    fill(r*25,r*50,255-r*75)
    rotate(r)
    ellipse(0,innerRadius,25,100)
    pop()



  }
  



  pop()



}


