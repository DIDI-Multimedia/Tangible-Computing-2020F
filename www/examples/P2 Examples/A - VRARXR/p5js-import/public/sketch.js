
let canvas, capture, animals // declare global variables  

function preload() {

  animal = loadModel('data/mammoth.obj');

}

function setup(){

	canvas = createCanvas(800,800,WEBGL)
	capture = createCapture()
	capture.hide()

}

function draw(){

	background(0,255,255)
	// image(capture.get(),-width/2,-height/2,width,height)
	push()
		scale(25)
		normalMaterial();
	rotateX(millis()/1000)
	model(animal)	
	rotateY(millis()/500)

	model(animal)
	push()
	translate(0,10,0)
	model(animal)
	pop()
	push()
	rotateZ(millis()/200)
	translate(10,10,0)
	model(animal)
	pop()

	model(animal)
	pop()
}