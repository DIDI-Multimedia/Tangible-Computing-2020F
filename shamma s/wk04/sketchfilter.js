// web cam filter 
let capture

function setup(){
	
	let canvas = createCanvas(640,480) 
	capture = createCapture(VIDEO) 
	capture.hide()
	

	
}


function draw() {
	
	for(let i=0; i < 100; i++){

		let x = int(random(width));
		let y = int(random(height));
		colorMode(RGB);
		let iro = capture.get(x,y);
		let c = color(red(iro),green(iro),blue(iro));
		colorMode(HSB,360,100,100);
		noStroke();
		fill(hue(c),saturation(c),brightness(c),100);
		let diameter = map(saturation(iro),0,255,1,80);	
		circle(x,y,diameter);
	}	
	
}


