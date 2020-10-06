function setup() {

// Step 1
    let canvas = createCanvas(600, 600)
    canvas.parent('p5container');

    let cx = width/2
    let cy = height/2
    let d  = width/2

    circle(cx,cy,d)

    let h = hour()
    let m = minute()
    let s = second()

    //rotation

    let rotS = radians(h/60*360)
    let rotS = radians(m/60*360)
    let rotS = radians(s/60*360)

    //draw arms
	
	push()

	translate(cx,cy)
	circle(0,0,d)

	rotate(rotH)
	line(0,0,0,-d/8)

	rotate(rotM)
	line(0,0,0,-d/4)

	rotate(rotS)
	line(0,0,0,-d/2)

	pop()


}

function draw(){




}