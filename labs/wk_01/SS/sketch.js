// Sayjel Vijay Patel
// @djclds
// DIDI MuW 2019, Lab 2, August 16, 2019
console.log('clock.js')

let seconds, minutes, hours, days 
var ps, pm, ph, pd
const leftMargin = 200

function setup() {

  const canvasDiv = document.getElementById('p5_example');
  const canvasWidth = canvasDiv.offsetWidth;
  createCanvas(canvasWidth, canvasWidth/2).parent('p5_example')
  initialize()

}

function draw(){

  background(255)

  const time = getTime({})

  updateS = isChanged({time:time.s,previous:ps})
  updateM = isChanged({time:time.m,previous:pm})
  updateH = isChanged({time:time.h,previous:ph})
  updateD = isChanged({time:time.d,previous:pd})

  updateDot( { dot:days,t:time.d,col:4,update:updateD } )
  updateDot( { dot:hours,t:time.h, update:updateH } )  
  updateDot( { dot:minutes,t:time.m, update:updateM } )
  updateDot( { dot:seconds,t:time.s, update:updateS } )

}
 
function initialize(){

  const time = getTime()

  ps = time.s 
  pm = time.m
  ph = time.h 
  pd = time.d 

  console.log('intialize:', ps)

  // console.log('ps',ps)
// 
  seconds = getDots({num:60,rad:width/64,col:3,t:time.s,donut:width/7,speed:0.01})
  minutes = getDots({num:60,rad:width/24,col:2,t:time.m,donut:width/8,speed:0.005})
  hours = getDots({num:24,rad:width/12,col:1,t:time.h,donut:width/14,speed:0.000025})
  days = getDots({num:31,rad:width/6,col:1,t:time.h,donut:width/18,speed:0.0001})

  updateDot({dot:days,t:time.d,col:0,update:false})
  updateDot({dot:hours,t:time.h,col:1,update:false})
  updateDot({dot:minutes,t:time.m,col:2,update:false})
  updateDot({dot:seconds,t:time.s,col:3,update:false})

}

function getTime(params){

  const date = new Date()

  const d = date.getDay()
  const m = date.getMinutes()
  const s = date.getSeconds()
  const h = date.getHours()

  return {

    d:d,
    m:m,
    s:s,
    h:h
  }

}


function isChanged(params){

  // console.log(params.time,)


  if (params.time !== params.previous){
  
    params.previous = params.time 
    return true 
  
  } 

  return false

}

function updateDot(params){

  move(params)
  display(params)

}

function move(params){

  let elements = params.dot
  let threshold = params.t

  // console.log('threshold', elements.elapsed.length, params.update)

  if (params.update){

    if (threshold > elements.elapsed.length){

      let index = elements.future.length
      let element = elements.future.shift()
      element.tar = getPositionVector02({radius:element.radius,i:elements.elapsed.length,total:elements.num,col:elements.col})
      elements.elapsed.push(element)

    }   

    if (threshold === 0){

      elements.future = [...elements.all]

      for (var i = elements.future.length - 1; i >= 0; i--) {
        
        var dot = elements.future[i]
        dot.tar = getPositionVector({radius:elements.donut,i:i,total:elements.num})

      }

      elements.elapsed = []
    
    }

  }

}


function display(params){

  const elements = params.dot
  const threshold =params.t

  for (var i = elements.all.length - 1; i >= 0; i--) {

    dot = elements.all[i]
    dot.pos = p5.Vector.lerp(dot.pos,dot.tar,elements.speed)
    // console.log('lerp',dot.pos,dot.tar,elements.speed)
    strokeWeight(2)
    stroke(threshold/elements.all.length*255,i/elements.all.length*255,elements.col*(255/4))
    fill(threshold/elements.all.length*255,i/elements.all.length*255,elements.col*(255/4),100)
    ellipse(dot.pos.x,dot.pos.y,dot.radius,dot.radius)

  }

}

function getDots(params){

  let obj = params
  obj.elapsed = []
  obj.future = []
  obj.all = []
  obj.column = params.col*(width/3)-width/6

  for (var i = 0; i < params.num; i++){

    let dot = {}
    dot.radius = params.rad 
    dot.pos = getPositionVector({radius:params.donut,i:i,total:params.num})

    if (i > params.t){

      dot.tar = getPositionVector({radius:params.donut,i:i,total:params.num})
      obj.future.push(dot)
      console.log( 'future' )

    } else {

      console.log('elapsed')

      let k = i
      dot.pos= getPositionVector02({radius:dot.radius,i:k,total:params.num,col:obj.col})
      dot.tar= getPositionVector02({radius:dot.radius,i:k,total:params.num,col:obj.col})
      obj.elapsed.push(dot)     

    }

    obj.all.push(dot)

  }

  return obj

}

function getPositionVector(params){

  let angle = TWO_PI/params.total
  let x = params.radius*sin(angle*params.i) + width/4
  let y= params.radius*cos(angle*params.i) + height/2 - height/16

  return createVector(x,y)

}

function getPositionVector02(params){

  let spacing = (height/2)/params.total
  let x = width*0.66 + params.i%2*20 
  let y = height/4 + params.i*spacing  

  return createVector(x,y)

}

