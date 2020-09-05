console.log('bot-behaviours.js')

const colors = {

  joy: [255,255,0],
  sadness:[95,158,160],
  disgust:[139,69,19],
  contempt:[139,0,0],
  anger:[255,0,0],
  fear:[255,69,0],
  surprise:[0,255,0],
  engagement:[150,150,150],
  valence:[255,255,255]

}

// this are constraints on the 
const constraints = {

	minRotX:10,
	maxRotX:165,
	minRotY:10,
	maxRotY:45,
	defRotX:90,
	defRotY:25,

}

const botMotions = ["fear","normal","engagement"]


let botMotionsArr = {}

botMotionsArr.fear = {

  mood: "fear",
  velocity: 0.0025,
  radius: 25,
  responsiveness: 3, 

}

botMotionsArr.normal = {

  mood: "normal",
  velocity: -0.01,
  radius: 50,
  responsiveness: 3, 

}

botMotionsArr.engagement = {

  mood: "engagement",
  velocity: -0.02,
  radius:50,
  responsiveness: 3, 

}


function getRandomMood(){

  let i = Math.floor(Math.random()*botMotions.length)
  let mood =  botMotionsArr[botMotions[i]]
  console.log('get random mood:', mood)

  return mood 

}



function computeBotCommand(params){

  let pos = params.position
  const velocity = params.velocity 
  let vx = (320-pos.x)*velocity // 
  let vy = (240-pos.y)*velocity //

  if (Math.abs(320-pos.x)<params.radius) vx = 0 // this is the radius 
  if (Math.abs(320-pos.y)<params.radius) vy = 0 // 

  return { pan: -vx, tilt: -vy }

}



