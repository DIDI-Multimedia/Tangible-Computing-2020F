// TenThousandX Assignment: // Add to this code to create a drawing // Note: do not delete anything 

  let capture;


function setup(){
  let canvas = createCanvas(480, 480,WEBGL);   
  canvas.parent('p5container');
  capture = createCapture(VIDEO);

  capture.hide()
  noStroke()

}

function draw(){
  
  // background(capture)
  background(255)
  let step = 10
  stroke(0)
  
  for (var x = 0; x < width; x += step){
    
    for (var y = 0; y < height; y += step){


      if (random() <0.1){
      let col = capture.get(x,y)
      fill(col)


      }

      push()

      translate(x-width/2,y-height/2)
      rotateY(TWO_PI/5000*x*y*millis())
      box(step*0.75,20,1)
      pop()
      
    }
  }
  
  
}

