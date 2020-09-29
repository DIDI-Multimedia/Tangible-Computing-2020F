 // TenThousandX Assignment: // Add to this code to create a drawing // Note: do not delete anything 


function setup() {

    // do not change anything in setup 
    let canvas = createCanvas(800, 800)
    // canvas.parent('p5container');

    TenThousandX()

}


function TenThousandX() {

      stroke(0,0,0,10)
	strokeWeight(1)
	strokeCap(ROUND);
	

    for (var x = 0; x < 1000; x++) {

      let y1 = random(1000,90)
      let y2 = random(10,1000)
      let y3 = random(1000,70)
      let y4 = random(30,height)

      square(0,y1,width,y2,0,y3,0,y4)
			fill(random(255),random(255),random(255),10)
smooth()
			
    }
	
}