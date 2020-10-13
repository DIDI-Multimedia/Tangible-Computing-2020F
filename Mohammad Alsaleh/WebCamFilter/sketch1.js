// glow effect


let arr = []

function setup(){


  let canvas = createCanvas(800, 800,WEBGL);   
  canvas.parent('p5container')
    capture = createCapture()
        capture.hide()


  	for (var i = 1; i < 21; i++){

		let x = random(-100,100)
		let y = random(-100,100)
		let r = random(2,10)

		arr.push([x,y,r])


	}


}


function draw(){

	//background(0)
	imageMode(CENTER)
	image(capture,0,0)

	for (var i = 0; i < arr.length; i++){

		let pixel = arr[i]
		let r = pixel[2] - 0.1 

		if (r < 0){
			r = random(1,20)
		}


		drawPixel(pixel[0],pixel[1],r)

		arr[i][2] = r 

	}



}

function drawPixel(x,y,r){

	 push()
	translate(x,y)


	noStroke()

	fill(153,102,255)

	sphere(r)

	fill(34,155,215,10)

	for (var i = 0; i < 50; i+=10){

		sphere(r+i)


	}

	pop()



}