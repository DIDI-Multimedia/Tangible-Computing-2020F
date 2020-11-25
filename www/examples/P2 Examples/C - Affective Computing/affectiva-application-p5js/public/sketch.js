console.log('sketch.js')

let capture 

function setup(){

	let canvas = createCanvas(800,600)
	canvas.parent('p5js')

	capture =  createCapture()




}

function updateData(data){

	console.log('update data')

	background(34,155,215)

	fill(255)
	let spacing = height/Object.keys(data).length
	textSize(spacing)
	
	let y = spacing

	for (item in data){
		str = item + ': ' + data[item]
		text(str, 10 ,y)

		y+= spacing*2
	
	}

	

	image(capture.get(),width-64,0,128,96)

	  var x = document.getElementById("app");
	  x.style.display = "none"

}