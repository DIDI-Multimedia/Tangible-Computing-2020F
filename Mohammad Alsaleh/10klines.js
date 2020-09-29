function setup() {

    // do not change anything in setup 
	
    let canvas = createCanvas(800, 800)
    // canvas.parent('p5container');

    TenThousandX()
	TenThousandXx()

}


function TenThousandX() {
    // add code here 

      stroke(0,0,0)

    for (var y = 0; y < 1000; y++) {

      let y1 = random(random(0,600),height-y)
      let y2 = random(0,height+y)


      line(0,y1-55,width,y2)
			stroke(0,0,0)
			fill(110,0,0,50)
			// circle(y1,y2,20)
			// triangle(y1, y2, 58, 0, 86, 75)

    }
}