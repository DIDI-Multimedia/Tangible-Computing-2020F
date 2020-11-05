
var p1Score = 0;
var Health = 100;
let SpaceShips;
// let v = 1;
// let bgg;
let img;

let eN = 4;
// let x,y;
let video;
let poseNet;
let poses = [];
let keypoint;
let d;
let c = 0;



var spaceships = [];
var fires = [];

function preload() {
fontRegular = loadFont('Cyberpunk.ttf');
Helveticaa = loadFont('Helvetica 400.ttf');
bgg = loadImage('bgg.jpg')
img = loadImage('ship.png')
}

function modelReady() {
select('#status').html('Model Loaded');
}


function setup() {
		createCanvas(900,700);
		textFont(fontRegular);
		video = createCapture(VIDEO);
		video.size(width, height);
			
		poseNet = ml5.poseNet(video, modelReady);
		poseNet.on('pose', function(results) {
		poses = results;
		});
		video.hide();

	// fires = new Fire(width/2,height/2)
	
	for ( var i = 0; i < eN ; i++){
		spaceships[i] = new spaceShips(i * 80 + 80,100)
	}
	
}


    
function keyPressed(){
if (key === ' '){
let	sN = 3
var fire = new Fires(spaceships[sN].x+30, spaceships[sN].y+80)
var fire1 = new Fires(spaceships[2].x+30, spaceships[2].y+80)
	
fires.push(fire);    
	fires.push(fire1);

}

}

function draw(){

		image(video, 0, 0, width, height);
		background(0)
		bg()
		scene()
	
	for ( var i = 0; i < spaceships.length;i++){
						spaceships[i].show()
						spaceships[i].move()

			}
		for ( var i = 0; i < fires.length;i++){
				fires[i].show()
				fires[i].move()
				
}


		drawKeypoints()
		drawSkeleton()
		fill(0,255,0)
		rect(0,0,900,50)
		//score
		fill(23,155,215)
		textSize(40)
		text('SCORE',25,30)
		fill('red')
		text('HEALTH',390,35)
		push()
		fill(255)
		textFont(Helveticaa);
	text(Health,640,35)
	fill(23,155,215)
	text(p1Score,230,35)
		pop()
}

function mousePressed(){
p1Score = p1Score + 1
}

function scene(){

	// 	for (var x = 0; x < width; x += width / 10) {
	// 	for (var y = 0; y < height; y += height / 5) {
	// 		stroke(255,0,0);
			// strokeWeight(3);
	// 		line(x, 0, x, height);
	// 		line(0, y, width, y);
	// 	}
	// }


}



function spaceShips(x, y){


	this.x = x
	this.y = y
	
	this.show = function(){
		//fill(255)
		// ellipse(this.x, this.y,60 ,60 )
		image(img, this.x, this.y, 60, 60);
	}
		this.move = function(){
		this.x = this.x + random(-5,5)
		//  
	}
}


function Fires(x, y){


	this.x = x
	this.y = y
	
	this.show = function(){
		push()
		//fill(255)
		// ellipse(this.x, this.y,60 ,60 )
		imageMode(CENTER)
		image(img, this.x, this.y, 30, 30);
		pop()
	}
	
	this.move = function(){
		this.y = this.y + 5  
		this.x = this.x + 3 * random(-2,2 )
		
	}
}

function bg(){
	
x = width/2;
y = height/2;

stroke(50);
fill(100);
//ellipse(x, y, 24, 24);
image(bgg,x-width/2,y-height/2,900,700)
// Jiggling randomly on the horizontal axis
x = x + random(-2, 2);
// Moving up at a constant speed
y = y + 1;

// Reset to the bottom
if (y > 0) {
y = height/2;
}
}


function drawKeypoints()  {

// Loop through all the poses detected
for (let i = 0; i < poses.length; i++) {
// For each pose detected, loop through all the keypoints
let pose = poses[i].pose;

let keypoint = pose.keypoints[0];
	let rHand = pose.keypoints[9]
	let lHand = pose.keypoints[10]
// Only draw an ellipse is the pose probability is bigger than 0.2


if (keypoint.score > 0.2) {
let d = get(keypoint.position.x,keypoint.position.y)

neonCircle(rHand.position.x, rHand.position.y, 50, "#ff0000");
neonCircle(lHand.position.x, lHand.position.y, 50, "#ff0023");
	
// push()
// textFont(Helveticaa)
// text(d,270,90)
// pop()
// noStroke()
stroke(255)
// fill(255,0,0);
noFill()


// print(d)
// noStroke();
strokeWeight(1)
neonCircle(keypoint.position.x, keypoint.position.y, 100, "#ff0023");
//ellipse(keypoint.position.x, keypoint.position.y, 150/2, 200/2);
stroke(10)
//ellipse(mouseX, mouseY, 100, 180);
// print(d)
		if (p1Score >= 100){
	console.log('You lost')
		}
		if (d[1] === 255 ) {
	// t = t - 1
	Health = Health - 10
	c = c + 10
	console.log('DAMAGE !!!')
		}
		if (d[0] === 255 & d[1] === 255 & d[2] === 255){
	//console.log('YOU WON ! ')
		}
}


for (let j = 0; j < pose.keypoints.length; j++) {
// A keypoint is an object describing a body part (like rightArm or leftShoulder)
//       let keypoint = pose.keypoints[j];
//       // Only draw an ellipse is the pose probability is bigger than 0.2

//       if (keypoint.score > 0.2) {
//         fill(115, 23, 215);
//         noStroke();
//         ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
//         stroke(10)
//         //ellipse(mouseX, mouseY, 100, 180);
//       }
}
}
}



function drawSkeleton() {
	
// Loop through all the skeletons detected
for (let i = 0; i < poses.length; i++) {
let skeleton = poses[i].skeleton;
// For every skeleton, loop through all body connections
for (let j = 0; j < skeleton.length; j++) {
let partA = skeleton[j][0];
let partB = skeleton[j][1];
// stroke(166,253,41);
// strokeWeight(10)
	push()
neonLine(partA.position.x+10, partA.position.y, partB.position.x+10, partB.position.y)
	pop()
	// line(partA.position.x+10, partA.position.y, partB.position.x+10, partB.position.y);
				}
		}
}

function neonCircle(x, y, d, c) {


let col = color(c);
let cc = 30;
noFill();
for (let i = 0; i < cc; i++) {
let sw = map(i, 0, cc - 1, 1, 100);
col.setAlpha(map(i, 0, cc - 1, 12, 1));
stroke(col);
strokeWeight(sw);
circle(x, y, d);
}
stroke(255);
strokeWeight(3);
// circle(width/2, height/2, 100);
}

function neonLine(x1,y1,x2,y2){

	push()
		// background(51);
	blendMode(ADD)
	
// 	drawingContext.shadowColor = color(255,0,0)
// 	drawingContext.shadowBlur =40

	drawingContext.shadowColor = color(0,255,150)
	drawingContext.shadowBlur =40
	strokeWeight(10);
  stroke(0, 200, 100);
	//rect(width/2,height/2,160,470,10)
	line(x1, y1,x2 , y2)
pop()
}










