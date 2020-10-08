// TenThousandX Assignment: // Add to this code to create a drawing // Note: do not delete anything 

//pseudocode

//create canvas
//rectangle
//colour
//get minutes
//get hours
//get seconds
//draw numbers
//repeat

function setup() {

    // do not change anything in setup 
    let canvas = createCanvas(800, 800)
    canvas.parent('p5container');
}

function draw(){
//background
background('black')

//rectangle

noFill()
stroke('red')
strokeWeight(3)
rectMode(CENTER)
//rect(50,50,700,300, 50)
rect(width/2,height/2,700,300,25)

//get.time

let h = nf(hour(),2)
let m = nf(minute(),2)
let s = nf(second(),2)

//print
console.log(h + ':,' + m ':,' + s)
let time = h + ':,' + m ':,' + s

if (s%2 == 0) {

time = h + ' ' + m ' ' + s

}

textSize (96)

noStroke()

fill('red')
textAlign(CENTER, CENTER)
text(time, width/2, height/2)



}


