/*

  Simple Clock

*/


function setup(){

  createCanvas(800,800);
  stroke(255)
 
}

function draw(){

  let mins = 60 // per hour
  let hours = 24 
  let secs = 60

  noStroke()

  for (var hr = 0; hr < hours; hr++){
 
    let wHour = width/hours
    let x = hr*wHour
    let h = height/mins
    fill(255*hr/hours)

    if (hr != hour()){
      rect(x,0,wHour,height)
      continue
    }
    // hours
    fill(255,0,0)
    rect(x,0,wHour,height)
    // minutes
    let y = minute()/60*height
    fill(0,255,0)
    rect(x,0,wHour,y+h)

    // seconds
    let wSecond = wHour/60
    let xSecond = x + second()/60*wHour
    fill(0,0,255)
    rect(x,y,xSecond-x,h)
  
  }

}
