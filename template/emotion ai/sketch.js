console.log('sketch.js')

// Multiple Cameras P5.js, 2019
// Sayjel Vijay Patel
// DJCLDS


let video, detector
function setup() {

  canvas = createCanvas(640,480);
  canvas.parent('canvas');
  video = createCam({bot:bot_SP, id:0})
  detector = createAffdex({bot:bot_SP, id:0})


}

function draw(){
  
  drawVideo()
  drawBotEmotions()

}

function drawVideo(){

}

function drawEmotions(){

}







function checkCams(){

  let x = 0

  for (var i = 0; i < videos.length; i++){

    const vid = videos[i]
    vid.width = vid.video.width
    vid.height = vid.video.height

  }

}


let count = 0

function detectEmotions(){

  if (ready){
    count = 100
  }

  if (count > 30){

    for (var i = 0; i < botNets.length;i++){

      let bot = botNets[i]
      processImage(bot)

    }

    count = 0

  }

  count ++
  ready = false

}

function drawGimble(argument) {

  strokeWeight(1)
  let tilt = bot.tilt

  if (!tilt) return

  push()
  translate(550,75)
    push()
    rotate(radians(-bot.tilt))
    noFill()
    stroke(255,200)

    if (bot.tilt < constraints.minRotY) stroke(255,0,0)
    if (bot.tilt > constraints.maxRotY) stroke(255,0,0)

    ellipse(0,0,30,30)
    line(15,0,-15,0)
    noStroke()
    fill(255,100)
    ellipse(30,0,3,3)

    pop()

stroke(255,0,0,50)
push()
rotate(radians(-constraints.minRotY))
line(15,0,0,0)
pop()

push()
rotate(radians(-constraints.maxRotY))
line(15,0,0,0)
pop()

push()
rotate(radians(-constraints.minRotX))
line(0,25,0,0)
pop()

push()
rotate(radians(-constraints.maxRotX))
line(0,25,0,0)
pop()

stroke(255,0)
push()
    rotate(radians(-bot.pan))
    noFill()
    stroke(255,200)

    if (bot.pan < constraints.minRotX) stroke(255,0,0)
    if (bot.pan > constraints.maxRotX) stroke(255,0,0)

    ellipse(0,0,50,50)
    line(0,25,0,-25)
    noStroke()
    fill(255,200)
    ellipse(0,25,3,3)
    let la = map(tilt,0,180,25,-25)
    fill(255,0,255,200)
    ellipse(0,la,3,3)
    stroke(255,0,255,100)

    noFill()

    ellipse(0,la,10,10)
    pop()

    for(var i = 0; i < 360; i+=10){
      push()
      rotate(radians(i))
      // console.log(...this.aura)
      // if (this.aura){
      //         fill(this.aura)

      // }
    fill(255,255,255)
      if (bot.aura){


      fill(bot.aura[0],bot.aura[1],bot.aura[2])


      }
  
      ellipse(40,0,3,3)
      pop()
    }

  pop()



  // body...
}

function drawBotTarget(bot){

  // if (bot.target.x == null ) return

  if (bot.humanSpotted){

    stroke(255,50)
    strokeWeight(10)
    ellipse(bot.target.x,bot.target.y,bot.radius,bot.radius)
    noStroke()

  
  }


  

}


function drawPoses(){

  if (!tilt) return

  push()
  translate(550,75)
    push()
    rotate(radians(-bot.tilt))
    noFill()
    stroke(255,200)

    if (bot.tilt < constraints.minRotY) stroke(255,0,0)
    if (bot.tilt > constraints.maxRotY) stroke(255,0,0)

    ellipse(0,0,30,30)
    line(15,0,-15,0)
    noStroke()
    fill(255,100)
    ellipse(30,0,3,3)

    pop()

stroke(255,0,0,50)
push()
rotate(radians(-constraints.minRotY))
line(15,0,0,0)
pop()

push()
rotate(radians(-constraints.maxRotY))
line(15,0,0,0)
pop()

push()
rotate(radians(-constraints.minRotX))
line(0,25,0,0)
pop()

push()
rotate(radians(-constraints.maxRotX))
line(0,25,0,0)
pop()

stroke(255,0)
push()
    rotate(radians(-bot.pan))
    noFill()
    stroke(255,200)

    if (bot.pan < constraints.minRotX) stroke(255,0,0)
    if (bot.pan > constraints.maxRotX) stroke(255,0,0)

    ellipse(0,0,50,50)
    line(0,25,0,-25)
    noStroke()
    fill(255,200)
    ellipse(0,25,3,3)
    let la = map(tilt,0,180,25,-25)
    fill(255,0,255,200)
    ellipse(0,la,3,3)
    stroke(255,0,255,100)

    noFill()

    ellipse(0,la,10,10)
    pop()

  pop()

  // body...
}

function drawBotTarget(bot){

  // if (bot.target.x == null ) return

  if (bot.humanSpotted){

    stroke(255,50)
    strokeWeight(10)
    ellipse(bot.target.x,bot.target.y,bot.radius,bot.radius)
    noStroke()

  
  }


  

}

function drawBotEmotions(bot){

  // console.log(bot.emotions)

  if (bot.emotions ==  null) return

  let step = 0
      let y = 525


  for (emotion in bot.emotions){

    let val = bot.emotions[emotion]
    stroke(colors[emotion])
    strokeWeight(5)
    noFill()
    let r = map(val,0.5,1,10,100)
    r = constrain(r, 10, 100)
    ellipse(step+64,y,5,5);
    ellipse(step+64,y,r,r)
    noStroke()
    fill(colors[emotion])
    text(emotion,step+64,y+25)
    step += 64

  }

}

function drawPoses(){

  let x = 0
  noFill()
  textAlign(CENTER)

  // console.log('draw poses: ', botNets)

  for (var i = 0; i < botNets.length; i++){

    bot = botNets[i]

    push()
    translate(x,0)
    drawGimble(bot)
    drawBotTarget(bot)
    drawBotEmotions(bot)

    pop()

    x += 640

  }

}



function drawVideos(){

  let x = 0

  for (var i = 0; i < botNets.length; i++){

    push()
    translate(x,0)
    textSize(25)
    let bot = botNets[i]
    image(bot.video,0,0,640,480)
    stroke(255,50)
    noFill()
    strokeWeight(1)
    ellipse(bot.width/2,bot.height/2,400,400)
    // filter(POSTERIZE,10);
    fill(255)
    textAlign(LEFT)
    textSize(12)
    text(bot.name, 10, 45);
    let data = 'Angle : ' + nf(bot.pan , 0, 2) + ',' + nf(bot.tilt, 0, 2)
    text(data, 10, 420);
    let mood = 'Mood(human) : ' + bot.mood
    text(mood,10, 440);

    let botMood = 'Mood(Bot) : ' + JSON.stringify(bot.botMood)
    text(botMood,10, 460);

    pop()
    x += 640

  }

}

function setTextStyle(){

    noStroke()
    fill(34,155,215);
    textSize(12)
    noStroke()

}

function initializeBots() {


  botNets = []
  let bot = bot_SP
  bot.id = 0
  bot.video = createCam({bot:bot_SP, id:0})
  bot.detector = createAffdex({bot:bot_SP, id:0})

}



function createCam(params){

  let video = createCapture();
  video.size(640,480)
  video.hide()

  return video

}




function createAffdex(params){

  let detector = initializeDetector(params.bot)
  detector.start();

  return detector

}



function initializeDetector(bot){

  var faceMode = affdex.FaceDetectorMode.LARGE_FACES;
  var detector = new affdex.FrameDetector(faceMode);
  detector.addEventListener("onInitializeSuccess", function() {'initialization sucessful!'});
  detector.addEventListener("onInitializeFailure", function() {'initialization failure!'});
  detector.addEventListener("onImageResultsSuccess", function (faces, image, timestamp) {

      detector.reset();

  if (faces.length > 0){

    console.log(faces[0])
    let faceData = faces[0]

    }
  
  })

  detector.detectAllExpressions();
  detector.detectAllEmotions();
  detector.detectAllEmojis();
  detector.detectAllAppearance();

  return detector

}

function processImage(bot){

  try{

    var context = canvas.canvas.getContext('2d');
    var startTimestamp = (new Date()).getTime() / 1000;
    let value = Math.floor(bot.id*bot.width)
    var imageData = context.getImageData(value, 0, bot.width+value, bot.height);
    var now = (new Date()).getTime() / 1000; //Get delta time between the first frame and the current frame.
    var deltaTime = now - startTimestamp;
    bot.detector.process(imageData, deltaTime) //Process the frame

    } catch{

    }

}
