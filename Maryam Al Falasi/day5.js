  // TenThousandX Assignment: // Add to this code to create a drawing // Note: do not delete anything 


function setup() {

    // do not change anything in setup 
    let canvas = createCanvas(800, 800)
    // canvas.parent('p5container');

    TenThousandX()

}


function TenThousandX() {
    // add code here 
background(random(255),random(255),random(255))
      stroke(random(255),random(255),random(255))
	strokeWeight(4)

    for (var x = random(1-10); x < 10; x+=5) {

      let y1 = random(10,width)
      let y2 = random(height,width)


      line(0,y1,width,y2)

    }
	      stroke(random(255),random(255),random(255))
	strokeWeight(0.02)

	for (var j = random(1-10); j < 1000; j+=4) {

      let z1 = random(45,104)
      let z2 = random(32,width)


      line(0,z1,width,z2)

    }
	
	
}

