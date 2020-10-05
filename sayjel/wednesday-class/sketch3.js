
// Pseudo code for analogue clock 

// 0. Create canvas 
// 1. Define Center 
// 2. Draw Circle 
// 3. Get time (hrs, min, s)
// 4. Apply rotation based on time 
// 5. Draw arms 

function setup(){

	let canvas = createCanvas(600,600)
	canvas.parent('p5container')





}


function draw(){ 

	background(255)


	// define center 
	let cx = width/2 
	let cy = height/2 
	let d = width/2 

	// get time 


    let h = nf(hour(),2)
    let m = nf(minute(),2)
    let s = nf(second(),2)

    // print, string 
    let time = h + ':'+ m + ':' + s

    if ( s%2 == 0 ){
    	//muduolo function 
    	time = h + ' '+ m + ' ' + s

    }

    textSize(24)
    noStroke()
    fill ('red')
    textAlign(LEFT, CENTER)
   

	// rotation? 

	let rotH = radians(h/60*360) // radians 
	let rotM = radians(m/60*360) // radians 
	let rotS = radians(s/60*360) // radians 
	// let rotS = s/60*TWO_PI // radians 

	console.log(rotH)
	// draw arms 

	stroke(34,155,215)

	 push()
	 translate(cx,cy)
	 noFill()
	 circle(0,0,d)

	 push()
	 strokeWeight(1)
	 rotate(rotS)
	 line(0,0,0,-d/2)
	 text(s, 0,0)
	 pop()

	 push()
	 strokeWeight(2)
	 rotate(rotM)
	 line(0,0,0,-d/4)
	  text(m, 0,0)
	 pop()

	 push()
	 strokeWeight(3)
     rotate(rotH)
	 line(0,0,0,-d/8)
	  text(s, -d/8,0)

	 pop()

	 pop()

}