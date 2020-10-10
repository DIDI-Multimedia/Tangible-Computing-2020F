// 1. Create canvas 
// 2. Define Center 
// 3. Draw Circle 
// 4. Get time (hrs, min, s)
// 5. Apply rotation based on time 
// 6. Draw arms 



// 1. Create canvas 
function setup() {
  createCanvas(800, 800);

	
}


function draw() {


background(0,33,0)

// 2. Define Center 
	let cx = width / 2
	let cy = height / 2
	let d = width / 2

	// get time 
	let h = hour()
	let m = minute()
	let s = second()

	// rotation? 

	let rotH = radians(h / 60 * 360) // radians 
	let rotM = radians(m / 60 * 360) // radians 
	let rotS = radians(s / 60 * 360) // radians 
	// let rotS = s/60*TWO_PI // radians 

	console.log(rotH)
	// draw arms 

fill(255,0,0)

	push()
	translate(cx, cy)
	
	stroke(random(1), 155, 215)
// ____________________CIRCLE______
	noFill()
	for(var i =0; i < d; i += 10){
		strokeWeight(s)
		//circle(0, 0, rotS*60)
		strokeWeight(3)
			//text(s, 0, s)
			//textSize(96)
	
	}
// ____________________SECONDS GREEN______
	stroke(0,255,0)
	push()
	strokeWeight(3+s)
	rotate(rotS)
	//line(0, 0, 0, -d / 2)
	strokeWeight(2)
		//text(s, 0, s)
	circle(0,-d / 2,60)
	circle(0,-d / 2+50,40)
	circle(0,-d / 2+90,35)
	circle(0,-d / 2+120,30)
	circle(0,-d / 2+150,25)
	circle(0,-d / 2+170,20)
	circle(0,-d / 2+185,15)
	circle(0,-d / 2+200,15)
	
	
	//square(0, -d/3, 25);
			
	
	
	pop()
	loadImage('man pulllling.png', img => {
	
			translate(cx, cy)
		 rotate(rotS)
	//	imageMode(CORNER);
    //image(img, -d/2,0,50,50);
		image(img, s, -d/2 - 5,50,50)
  });
// ____________________MINS GREEN______
	
		push()
	// stroke(0)
	// strokeWeight(4)
	// rotate(rotM)
	 
	
	//
  rotate(rotM);
	strokeWeight (2);
  stroke (80, 120, 249);
	fill(110,0,0)
  //square(0, -d/3, 25);
	circle(0,-d / 3,60)
	circle(0,-d / 3+50,40)
	circle(0,-d / 3+90,35)
	circle(0,-d / 3+120,30)

	//line(0, 0, 0, -d / 3)
	pop()
// ____________________HOURS GREEN______
	push()
	stroke(0)
	fill(2500)
	strokeWeight(6)
	rotate(rotH)
	//line(0, 0, 0, -d / 5)
	circle(0,-d / 5,60)
	circle(0,-d / 5+50,40)
	circle(0,-d / 5+90,35)
	pop()


	pop()
	
	rect(second()*20,160,50,50);

}
 