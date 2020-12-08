let counter = 0;
let mic
let fft 
let voxells = [] 
let a = 0
let s = 0

function preload() {
  createVRCanvas();
}

function setup() {
  setVRBackgroundColor(200, 0, 150);
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

// Anything that needs to be calculated once per
// frame should go in here
function calculate() {
  counter += 0.1;
  rotateX(1000+frameCount/100)
  
}

function draw() {
  // fill(0, 255, 0);
  // translate(0, 0, 10);
  // rotateX(10);
  // rotateY(counter);
  // strokeWeight(0.1);
  // box(5);
  // background(0) 
	
	let vol = mic.getLevel() 
	let h = map(vol,0,1,25,100) 
	
	let spectrum = fft.analyze()
    
	a = a + 0.003;
	s = cos(a) * 2;
  
	push() 
	
	

    

	for (var q = 0; q < voxells.length; q++){
		
		let amplitude = spectrum[q]
		let t = map(amplitude, 0,255,1,2)
		let offsets = map(amplitude, 0,100,1,10)

				
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
	// translate(0,0,50) 
		noStroke()
		noFill()
			scale(s);
		push() 		
		rotateZ(this.angle) 
		for (var q = 0; q < numOffsets; q++){ 
			stroke(100,q*50,q*100,50)
			box(q*10, q*10, q*15) 

		
		}
		pop()
		
		
	}
	
	return obj 
	
} 


