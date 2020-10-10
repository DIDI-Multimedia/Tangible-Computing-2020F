/// for future reference:- 
/// push() starts drawing settings
/// pop() ends it
function setup() {
	createCanvas(1000, 1000, WEBGL);
  //canvas.parent('p5container')
}

function draw() {
	let h = hour()
	h = h + 4
	let m = minute()
	let s = second()
	//start new drawing setting
	background('black')
	
	// seconds
	push()
	  normalMaterial()
	  rotateZ(TWO_PI / 720 * frameCount)
	  rotateX(TWO_PI / 720 * frameCount)
	 for (var i = 0; i < s; i++) {
		 //s
        push()
        rotateZ(TWO_PI / 60 * i)
        translate(300, 0, 0)
        sphere(8)
        pop()

    }
	pop()
	
	//minutes
	push()
	  normalMaterial()
	  rotateX(TWO_PI / 720 * frameCount)
	 rotateZ(TWO_PI / 720 * frameCount)
	for (i = 0; i < m; i++){
		//m
		push()
		rotateZ(TWO_PI / 60 * i)
		translate(200,0,0)
		sphere(9)
		pop()
	}
	pop() 
	
	
	//seconds
	push()
	  normalMaterial()
	  rotateY(TWO_PI / 720 * frameCount)
    rotateZ(TWO_PI / 720 * frameCount)
	for(i = 0; i < h; i++){
		push()
		rotateZ(TWO_PI / 24 * i)
		translate(100,0,0)
		sphere(14)
		pop()
	}
pop()
	
}