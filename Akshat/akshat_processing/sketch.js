// TenThousandX Assignment: // Add to this code to create a drawing // Note: do not delete anything 


function setup() {

  // do not change anything in setup 
  let canvas = createCanvas(800, 400)
  canvas.parent('p5container');
}
function draw() {
background('black')
noFill()
stroke('red')
strokeWeight(3)
rectMode(CENTER)
rect(width/2,height/2,700,300,25)

let h = hour()
let m = minute()
let s = second ()

console.log(h + ':' + m + ':' + s)
let time = h + ':' + m + ':' + s

fill('red')
textAlign(CENTER)
text (time, width/2, height/2)

textSize(96)


}

