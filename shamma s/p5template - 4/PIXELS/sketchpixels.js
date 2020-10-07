// web cam filter 
let capture

function setup(){
  
  let canvas = createCanvas(640,480)
  canvas.parent('p5container') 
  capture = createCapture(VIDEO) 
  capture.hide()
  noStroke()
  

  
}

function draw(){
  
  // image(capture,0,0) 
  
  let spacing = 5
  
  // what is an image filter, manipulating pixels 
  
  for (var i = 0; i < width; i+= spacing){ 
    
    for (var j = 0; j < height; j+= spacing){
      
      let col = capture.get(i,j) 
      
      if (random() > 0.9){ 

      fill(col) 
      rect(i,j,spacing,spacing) 
        
      }
      

    }
  
  } 

}