// TenThousandX Assignment: // Add to this code to create a drawing // Note: do not delete anything 


function setup() {

    // do not change anything in setup 
    let canvas = createCanvas(800, 800)
    // canvas.parent('p5container');

    TenThousandX()

}


function TenThousandX() {

      stroke(255,255,255,30)
	fill(random(255),random(255),190,5)
	alpha('white')


    for (var x = 0; x < 1000; x++) {

      let y1 = random(100,530)
      let y2 = random(width,height)
			let y3 = random(500,height)

      square(0,y1,width,y2)
			smooth()
      triangle(0,y1,height,y2,width,y3)

		

    }

}

