

// function = acomplish task 
// running 
// 
// () = run
/*
  declaring 
  function setup(){
   
  }
*/ 
function setup() {
  
  createCanvas(windowWidth, windowHeight) // size in pixels, resolution 
  

  



}

function draw() {
  
    background(255) // built-in color
  // fill(random(100,255),0,34)
  // // ellipse(mouseX, mouseY, 20, 20)
  // square(mouseX, mouseY, random(55), 20);
  let step = 1 
  for (let x = 0; x < width; x+=step ){
    
    let val = x/width*255 // maping a value to a new domain
    stroke(val)
    line(x,0,x,height)
    step *=1.15
  
  
    for (let t = 0; t < step; t+=1){ 
      let val2 = t/step*255 
      stroke(val, 255-val, 34, val2)
      line(0,x+t,width,x+t)
    }
    
  } 

}