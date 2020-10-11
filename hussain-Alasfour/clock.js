function setup() {
    

    let canvas = createCanvas(1000, 1000, WEBGL)
    canvas.parent('p5container');

}

function draw() {
   

    background(0)

    let h = hour()
    let m = minute()
    let s = second()
		
	 normalMaterial()
		
    push()

    rotateX(TWO_PI / 600 * frameCount)
	

		rotateY(TWO_PI / 360 * frameCount)
    for (var q = 0; q < h; q++) {

      // H
				
				push()
				rotateX(TWO_PI / 24 * q)
        fill(random(255),random(255),random(255))
				stroke("red")
				translate(0,250,0)
				box(50, 50, 50)
        pop()

    }


   
	rotateZ(TWO_PI / 600 * frameCount)
	
    for (var w = 0; w < m; w++) {

        // M

				push()
				rotateY(TWO_PI / 60 * w)
				// noFill()
				stroke(random(255),random(255),random(255))
				translate(0, 0, 300)
				box(25, 25, 25)
        pop()

    }

		rotateX(TWO_PI / 300 * frameCount)
	
    for (var e = 0; e < s; e++) {

        // S
			
				push()
				rotateZ(TWO_PI / 60 * e)
        noFill()
				stroke(random(255),random(255),random(255))
				translate(400,0,0)
				box(25, 25, 25)
        pop()

    }



    push()
		rotateZ(TWO_PI / 1000 * millis())
		fill(random(255),random(255),random(255))
    translate(50, 0, 0)	
		box(25, 25, 25)
    pop()



}