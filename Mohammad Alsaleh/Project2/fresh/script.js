
console.log('Iam Mo')

let express = require('express')
let app = express()
let server = app.listen(3000)

let socket = require('socket.io')
let io = socket(server);
//connect to port 3000

app.use(express.static('public'))

console.log('server is running')

var p1Score = 0;
var Health = 100;
let SpaceShips;
// let v = 1;
// let bgg;
let img;

let eN = 10
    // let x,y;
let video;
let poseNet;
let poses = [];
let keypoint;
let d;
let c = 0;
let pose = null
//
// var five = require("johnny-five");
// var board = new five.Board(


// {
//     port:"COM9"
// }

//     );

// // board.on("ready", function() {
// //   console.log("Use Up and Down arrows for CW and CCW respectively. Space to stop.");
// //   var servo = new five.Servo.Continuous(10);
 
// //   //    if (2+3 = 5) {
// //   //     servo.cw();
// //   // }
    
// // });


var spaceships = [];
var fires = [];

function preload() {
    fontRegular = loadFont('Cyberpunk.ttf');
    Helveticaa = loadFont('Helvetica 400.ttf');
    bgg = loadImage('bgg.jpg')
    img = loadImage('shipT.png')
}

function modelReady() {
    // select('#status').html('Model Loaded');
}


function setup() {
    createCanvas(900, 700);
    textFont(fontRegular);
    video = createCapture(VIDEO);
    video.size(width, height);

    poseNet = ml5.poseNet(video, modelReady);
    poseNet.on('pose', function(results) {
        poses = results;
    });
    video.hide();

    // fires = new Fire(width/2,height/2)

    for (var i = 0; i < eN; i++) {
        spaceships[i] = new spaceShips(i * 80 + 80, 100)
    }

}

function shots() {
    let sN = 3
        // console.log(second);
    if ((second() == 10) || (second() == 15) || (second() == 20) || (second() == 25) || (second() == 30) || (second() == 35) || (second() == 40) || (second() == 45)) {

        // console.log("iff");
        // var fire = new Fires(spaceships[sN].x+30, spaceships[sN].y+80)
        var fire1 = new Fires(spaceships[1].x + 30, spaceships[1].y + 80)
        var fire3 = new Fires(spaceships[8].x + 30, spaceships[8].y + 80)
            // fires.push(fire);    
        fires.push(fire1);
        fires.push(fire3);

    } else {
        if ((second() == 18) || (second() == 28) || (second() == 38) || (second() == 48) || (second() == 58)) {

            // console.log("else");
            var fire2 = new Fires(spaceships[3].x + 30, spaceships[3].y + 80)
            fires.push(fire2);
        }
    }
}

function draw() {
    // console.log(second());
    image(video, 0, 0, width, height);
    background(0)
    bg()
    scene()
    shots()

    updateEnemies()

    if (pose) {

        updateCollisions()

    }

    updateSpaceships()

    drawKeypoints()
    drawSkeleton()
    drawScoreBoard()

}

function updateSpaceships(){

  spaceships.forEach(ship=> ship.show())


}

function updateEnemies() {


    for (var i = 0; i < fires.length; i++) {

        fires[i].show()
        fires[i].move()

    }

}

function drawScoreBoard() {

    fill(0, 255, 0)
    rect(0, 0, 900, 50)
    fill(23, 155, 215)
    textSize(40)
    text('SCORE', 25, 30)
    fill('red')
    text('HEALTH', 390, 35)
    push()
    fill(255)
    textFont(Helveticaa);
    text(Health, 640, 35)
    fill(23, 155, 215)
    text(p1Score, 230, 35)
    pop()


}


function updateCollisions() {


    let leftHand = pose.keypoints[9].position
    let rightHand = pose.keypoints[10].position

    for (var i = 0; i < fires.length; i++) {


        let fire = fires[i]


        fire.collide(leftHand.x, leftHand.y)
        fire.collide(rightHand.x, rightHand.y)


        if (fire.display) {

            fire.show()
            fire.move()
        }


    }


}

function mousePressed() {
    p1Score = p1Score + 1
}

function scene() {

    //  for (var x = 0; x < width; x += width / 10) {
    //  for (var y = 0; y < height; y += height / 5) {
    //    stroke(255,0,0);
    // strokeWeight(3);
    //    line(x, 0, x, height);
    //    line(0, y, width, y);
    //  }
    // }


}



// function spaceShips(x, y){


//  this.x = x
//  this.y = y

//  this.show = function(){
//    //fill(255)
//    // ellipse(this.x, this.y,60 ,60 )
//    image(img, this.x, this.y, 60, 60);
//  }
//    this.move = function(){
//    this.x = this.x + random(-5,5)
//    //  
//  }
// }
function spaceShips(x, y) {


    this.x = x
    this.y = y
    this.size = 60
    this.display = true

    this.show = function() {

        image(img, this.x, this.y, this.size, this.size);
    }

    this.move = function() {
        this.x = this.x + random(-5, 5)
    }

    this.collide = function(x, y) {

        // console.log('collide!')

        let d = dist(x, y, this.x, this.y)

        // console.log('d:', d, x, y, this.x, this.y, this.size)

        if (d < this.size) {
            console.log("CW");
                  servo.cw();
            console.log('collided!')
            this.display = false
            return true

        }
        return false
    }
}


function Fires(x,y) {


    this.x = x
    this.y = y
    this.display = true
    this.size = 50

    this.show = function() {

        if (this.display) {

            push()
            fill(255, 0, 0, 50)
            ellipse(this.x, this.y, 20, 40)
                // imageMode(CENTER)
                // image(img, this.x, this.y, 30, 30);
            pop()
        }

    }

    this.move = function() {
        this.y = this.y + 5
        this.x = this.x + 3 * random(-2, 2)

    }

    this.collide = function(x, y) {

        // console.log('collide!')

        let d = dist(x, y, this.x, this.y)

        // console.log('d:', d, x, y, this.x, this.y, this.size)

        if (d < this.size) {

            console.log('collided!')
            this.display = false
            return true

        }
        return false
    }
}


function bg() {

    x = width / 2;
    y = height / 2;

    stroke(50);
    fill(100);
    //ellipse(x, y, 24, 24);
    image(bgg, x - width / 2, y - height / 2, 900, 700)
        // Jiggling randomly on the horizontal axis
    x = x + random(-2, 2);
    // Moving up at a constant speed
    y = y + 1;

    // Reset to the bottom
    if (y > 0) {
        y = height / 2;
    }
}

function drawKeypoints() {

    // Loop through all the poses detected
    for (let i = 0; i < poses.length; i++) {
        // For each pose detected, loop through all the keypoints
        pose = poses[i].pose;

        let keypoint = pose.keypoints[0];
        let rHand = pose.keypoints[9]
        let lHand = pose.keypoints[10]
            // Only draw an ellipse is the pose probability is bigger than 0.2


        if (keypoint.score > 0.2) {
            let d = get(keypoint.position.x, keypoint.position.y)

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
            if (p1Score >= 100) {
                background(0)
                fill('blue')
                textSize(88)
                text('You WON ', 188, 300)
                textSize(60)
                text('Great Job', 188, 360)

                // console.log('You Won')
            }
            if (Health <= 0) {
                background(0)
                fill('red')
                textSize(88)
                text('You Lost ', 188, 300)
                textSize(60)
                text('Try Again', 188, 360)
            }
            if (d[0] === 50) {
                // t = t - 1
                Health = Health - 5
                c = c + 10
                    // console.log('DAMAGE !!!')
            }
            if (d[0] >= 200 & d[1] >= 200 & d[2] >= 200) {
                // console.log('W')
                p1Score = p1Score + 5
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
            neonLine(partA.position.x + 10, partA.position.y, partB.position.x + 10, partB.position.y)
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

function neonLine(x1, y1, x2, y2) {

    push()
        // background(51);
    blendMode(ADD)

    //  drawingContext.shadowColor = color(255,0,0)
    //  drawingContext.shadowBlur =40

    drawingContext.shadowColor = color(0, 255, 150)
    drawingContext.shadowBlur = 40
    strokeWeight(10);
    stroke(0, 200, 100);
    //rect(width/2,height/2,160,470,10)
    line(x1, y1, x2, y2)
    pop()
}


