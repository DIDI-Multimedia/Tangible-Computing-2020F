// Pseudo code for analogue clock 

// 0. Create canvas
// 1. Define Center 
// 2. Draw Circls
// 3. Get time (hrs, min, s)
// 4. Blink circle based on time
// 5. 

function setup() {

	let canvas = createCanvas(600, 600)
	canvas.parent('p5container');
}


function draw() {

	background(0)

	// define center 
	let cx = width / 2
	let cy = height / 2
	let d = width / 2

	// get time 
	let h = hour()
	let m = minute()
	let s = second()
 	
 	glowArc(cx,cy,d,s,60)
 	glowArc(cx*20,cy,d,h,24)
 	glowArc(cx+40,cy,d,m,60)
	

}

 function glowArc(cx,cy,d,t,max){

 	push()
	translate(cx, cy)
	rotate(t/60*TWO_PI)
	stroke(34+t*5, 155-t, 215-t,10)

	if(frameCount%1 ==0){

		noFill(0)
		for(var i =0; i <= max; i++){
			if(i<t ){

			
			// circle(0, 0, i*width/60)
			for(var k=1; k<10; k++){

				strokeWeight(k*t/10)	
				arc(0,0, 400, 400, 0, TWO_PI*t/60)
			}
			

			}
			
			// strokeWeight(1)
	}
	

}
	pop()

 }
	// stroke(34, 155, 215)
	// push()
	// strokeWeight(1)
	// rotate(rotS)
	// line(0, 0, 0, -d / 2)
	// pop()

	// push()
	// strokeWeight(2)
	// rotate(rotM)
	// line(0, 0, 0, -d / 4)
	// pop()

	// push()
	// strokeWeight(3)
	// rotate(rotH)
	// line(0, 0, 0, -d / 8)
	// pop()

