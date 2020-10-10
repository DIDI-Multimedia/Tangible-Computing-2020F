// TenThousandX Assignment: // Add to this code to create a drawing // Note: do not delete anything 


function setup() {

// 1. Canvas
    let canvas = createCanvas(800, 400)
    canvas.parent('p5container');


  }
function draw() {
// 2. background
background('#000000')

// 3. rectangle
noFill()
stroke('red')
strokeWeight(3)
rectMode(CENTER)
rect(width/2,height/2,700,300,25)

// 4. get time

let h = nf(hour(),2)
let m = nf(minute(),2)
let s = nf(second(),2)

// print string
console.log(h + ':' + m + ':' + s)

let time = h + ':' + m + ':' + s

if ( s%2 == 0 ){
  //muduolo function

time = h + ' ' + m + ' ' + s

}

// 5m draw numbers

// size
textSize(96)
// color
noStroke()

fill('red')
textAlign(CENTER, CENTER)
text(time, width/2, height/2)

}









