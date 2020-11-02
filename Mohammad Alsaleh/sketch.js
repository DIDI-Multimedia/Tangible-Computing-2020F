

// 1. Create canvas 
function setup() {
  createCanvas(800, 800);
	background(255,255,255)
	
	
	
}

function draw() {
//time
	let c = 10
	let s = second()
	let m = minute()
	let h = hour()


	fill(random(20),random(0),random(20),20)
		//rect(second()*10,160,10,10);
		text(s,220,60+s*15 )
		rect(random(200),50+s*15,c,c);
		
	stroke(3)
		textSize(25)

	noFill()
		text(m,475,130+m*20 )
		
	stroke(1)
		rect(random(225,475),80+m*20,c+15,c+15);
		text(h,475,50+h*30 )
		rect(random(500,750),50+h*30,c+25,c+25);
	


}
