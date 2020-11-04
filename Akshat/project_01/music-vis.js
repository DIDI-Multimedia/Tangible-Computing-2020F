var terrainValues = []
var mult = 50
let mic 
function setup() {
	createCanvas(800,800,WEBGL);
	
	mic = new p5.AudioIn()
	mic.start()
	
	
}

function draw() {
	background(0)
	
	 let vol = mic.getLevel()
	 let h = map(vol,0,1,0,1)
	 // elevation on z axis
	 for( var y =0; y<120;y++){
		   terrainValues.push([])
		  for(var x=0; x<120; x++){
			terrainValues [y] [x] = h * 50 , h-1 *50
		
		      }

	     }
	
    	//color of the grid
	 stroke(25,25,112)
     fill(0,0,10)
	
    	// the triangle strip
     rotateX( TWO_PI / 6)
	  translate( -600 , -400 , 0)
        for(var y = 0; y < 120;y++)
        {
		
	           	beginShape(TRIANGLE_STRIP)
		
                 for(var x = 0; x < 120; x++)
                {
		     	  vertex( x * 10 , y *10 , 
		          	vertex( x * 10, (y + 1) * 10, 
                 
                
                } 
                  endShape()
        }
	
}


