let video

let pixelsGrid = []

let cx = 0
let cy = 0

let poseNet;
let pose;
// distance attractor filed 
// use nose eyes mouth as attractor points

function preload() {
    bg = loadImage("https://i.ytimg.com/vi/bAJ6eyjI_ZY/maxresdefault.jpg")
        //    doll = loadImage("https://i.pinimg.com/originals/1c/be/fa/1cbefadabbdd69ab07c7c87b74222821.png")
}

function setup() {


    let canvas = createCanvas(640, 480)
        // pixelsGrid = initGrid(10, 10)

    video = createCapture(VIDEO)
    video.hide()
        // console.log('pixels grid loaded')
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

// function mousePressed() {
//     fill (200,0,0)
//     circle(mouseX, mouseY, 0, 0)
// }

function gotPoses(poses) {
    if (poses.length > 0) {
        pose = poses[0].pose;
    }
}

function modelLoaded() {
    console.log('poseNet ready');
}


function draw() {

    // console.log('draw!')
    // translate(video.width, 0);
    // scale(-1, 1);
    // image(video, 0, 0);

    if (video && pose) {




        background(bg)
        tint(0, 153, 204);


        let spacing = 3
        noStroke()

        // image(capture.get(),0,0)

        console.log('video available')

        for (var x = 0; x < video.width; x += spacing) {

            for (var y = 0; y < video.height; y += spacing) {

                let col = video.get(x, y)

                let dx = x - mouseX
                let dy = y - mouseY

                // let offX = dx / 5
                // let offY = dy / 5
                let offX = 0
                let offY = 0

                let d = dist(pose.rightEye.x, pose.rightEye.y, x, y)

                let radius = width / 5

                if (d < radius) {

                    let alpha = (1 - d / radius) * 255

                    let circleRadius = (1 - d / radius) * 50

                    // stroke(255)
                    fill(brightness(col) * 2, alpha)

                    circle(x,y,spacing*2,spacing*2)



                }




            }


        }


        eyes()

    }

}

function eyes() {
    // background(VIDEO);

    // translate(video.width, 0);
    // scale(-1, 1);
    // image(video, 0, 0);

    if (pose) {
        let eyeR = pose.rightEye;
        let eyeL = pose.leftEye;
        let d = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);

        //Outer Eye
        fill(0);
        ellipse(eyeR.x, eyeR.y, d / 2, (d / 2));
        ellipse(eyeL.x, eyeR.y, d / 2, d / 2);

        // Inner Eye
        fill(255);
        ellipse(eyeR.x + 8, eyeR.y + 8, d / 15, d / 15);
        ellipse(eyeR.x - 8, eyeR.y - 8, d / 15, d / 15);
        ellipse(eyeR.x - 8, eyeR.y + 8, d / 15, d / 15);
        ellipse(eyeR.x + 8, eyeR.y - 8, d / 15, d / 15);

        ellipse(eyeL.x + 8, eyeR.y + 8, d / 15, d / 15);
        ellipse(eyeL.x - 8, eyeR.y - 8, d / 15, d / 15);
        ellipse(eyeL.x - 8, eyeR.y + 8, d / 15, d / 15);
        ellipse(eyeL.x + 8, eyeR.y - 8, d / 15, d / 15);


    }

}