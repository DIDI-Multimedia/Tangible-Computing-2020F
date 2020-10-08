// glow effect


let arr = []

function setup(){


  let canvas = createCanvas(800, 800,WEBGL);   
  canvas.parent('p5container');

  	for (var i = 0; i < 200; i++){

		let x = random(-width/2,width/2)
		let y = random(-height/2,height/2)
		let r = random(2,10)

		arr.push([x,y,r])


	}


}


function draw(){

	background(0)

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

	fill(34,155,215)

	sphere(r)

	fill(34,155,215,10)

	for (var i = 0; i < 50; i+=10){

		sphere(r+i)


	}

	pop()



}