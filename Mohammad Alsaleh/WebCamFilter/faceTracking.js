// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// i got this code from https://gist.github.com/mohdsanadzakirizvi/ce95bcb560eeae899ff6852fda8757a6
//then i started editing it 

let video;
let poseNet;
let poses = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
    // Hide the video
  video.hide();
}



function modelReady() {
  select('#status').html('Model Loaded');
}

function draw() {
    //translate(x,y)
  image(video, 0, 0, width, height);
//background(0)
  
  drawKeypoints();

  drawSkeleton();
}



// // what i need to do for next time,,, change the dots names, add glow effect for the
//  lines, delete the usless lines...... <<<<<<<<<<<<<//



// A function to draw ellipses 
function drawKeypoints()  {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        fill(115, 23, 215);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
        stroke(10)
        ellipse(mouseX, mouseY, 100, 180);
      }
    }
  }
}

// A function to draw the skeletons
function drawSkeleton() {
  // Loop through all the skeletons detected
  for (let i = 0; i < poses.length; i++) {
    let skeleton = poses[i].skeleton;
    // For every skeleton, loop through all body connections
    for (let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      stroke(166,253,41);
      strokeWeight(10)
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
    }
  }
}