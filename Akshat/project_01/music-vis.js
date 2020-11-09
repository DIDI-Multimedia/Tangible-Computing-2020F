///nois is array
/// noise is algorithmic function
var terrainValues = []
var dhvani =[]
let spectrum = []
var mult = 50
let img
let mic 
var sum2 = 0;
let ftt
var base =[]
function setup() {
	createCanvas(1000,1000,WEBGL);
	
	mic = new p5.AudioIn()
	mic.start()

	img = loadImage('https://happycoding.io/examples/processing/for-loops/images/radial-gradient-2.png')
	/*	for( var y =0; y<120;y++){
		dhvani.push([])
		for(var x=0; x<120; x++){
			dhvani [y] [x] = map(noise(x,y) , 0 , 1 , -mult , mult)
		 // console.log(dhvani[x] + "    " + dhvani[y])
		}

	}
	*/
	fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
	background(0)
	
	let vol = mic.getLevel()
		//sphere
	
	let h2 = map(vol,0,1,10,600)

	//Sphere		
	var sum2 =0;
  let spectrum = fft.analyze();
		
		//bass seperation 
	// sum of bass is sum2
	 for( var i = 400; i< 800; i++)
	{
	//base[i - 358] = spectrum[i]
		sum2 = sum2 + spectrum[i]
	}
	
		
	background('black')
	//ambientLight(255,110,199); 

	//sphere settings
	push()
	
	
	//color
	normalMaterial()
	// add texture to sphere use one from online
	//load file on side tab and add it
	//oscillation 
  //actual sphere
	rotateY(180)
	noStroke()
	translate(0,-300,0)
	texture(img)
	sphere(sum2 / 200)
	
	
	pop()
	
	

	
	// the damn terrain
	
	 
	 let h = map(vol,0,1,0,1)
	 
	// elevation on z axis
	for( var y =0; y<120;y++)
	{
		terrainValues.push([])
		for(var x=0; x<120; x++){
			//terrainValues [y] [x] = h * dhvani[y] , 1 - h * dhvani[x]
			terrainValues [y] [x] = h * random(10) , 1 - h * random(10)
		
		}

	}
	
	//color of the grid
	stroke(25,25,112)
  fill(1,1,10)
	
	// the triangle strip
  rotateX( TWO_PI / 6)
	translate( -600 , -400 , 0)
	for(var y = 0; y < 120;y++)
	{
		
		beginShape(TRIANGLE_STRIP)
		
		for(var x = 0; x < 120; x++){
			vertex( x * 10 , y *10 , 50 * terrainValues[y][y])
			vertex( x * 10, (y + 1) * 10, 50 * terrainValues[y][x])
		}
		endShape()
	}

  
	
	


}

