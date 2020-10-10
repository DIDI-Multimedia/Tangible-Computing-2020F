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
        translate(400, 0, 0)
        sphere(5*i)
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
		translate(200,0,0)
		sphere(9)
		pop(4*i)
	}
	pop() 
	
	
	//seconds
	push()
	  normalMaterial()
	  rotateY(TWO_PI / 720 * frameCount)
    rotateZ(TWO_PI / 720 * frameCount)
	for(i = 0; i < h; i++){
		push()
		translate(-200,0,0)
		sphere(2*i)
		pop()
	}
pop()
	
}