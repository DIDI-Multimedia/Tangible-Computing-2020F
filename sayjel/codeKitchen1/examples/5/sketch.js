let mic
let fft 
let voxells = [] 


function setup() {

  createCanvas(windowWidth, windowHeight, WEBGL);
  background(100);
  // canvas.parent('p5container');
  
  mic = new p5.AudioIn()
  mic.start() 
  
  fft = new p5.FFT()
  fft.setInput(mic) 
  let step = PI/4
      
  for (var angle = 0; angle < TWO_PI; angle += step){
    
    myVoxell = getVoxel(0,0,0,10, angle)
    voxells.push(myVoxell)
    
    
  }

}

function draw() {
  
  background(0) 
  
  let vol = mic.getLevel() 
  let h = map(vol,0,1,25,100) 
  
  let spectrum = fft.analyze()
  
  push() 
  
  rotateX(frameCount*.008)
  rotateY(frameCount/500)
  

  for (var q = 0; q < voxells.length; q++){
    
    let amplitude = spectrum[q]
    let t = map(amplitude, 0,255,1,2)
    let offsets = map(amplitude, 0,255,1,10)

        
    let myVoxell = voxells[q] 
    myVoxell.radius = h*t
    myVoxell.display(offsets)
    
  } 
  
  pop() 
  
  
}

function getVoxel(x,y,z,radius, angle){
  
  let obj = {} 
  obj.x = x 
  obj.y = y 
  obj.z = z
  obj.angle = angle 
  
  obj.radius = radius 
  
  obj.display = function(numOffsets){
    

    noStroke()
    noFill()
    push() 
    rotateZ(this.angle) 
    translate(50,200,100) 
    for (var q = 0; q < numOffsets; q++){ 
      strokeWeight(1)
      stroke(100,q*50,q*100,50)
      
      box(q*10, q*50, q*7) 


    
    }
    
              pop()

  }
  
  return obj 
  
}