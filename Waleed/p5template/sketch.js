//Psudocode

//create canvas
//add background
// rectangle
//color
// draw numbers 
// get minutes
// get hours
// get seconds
// draw numbers


function setup() {

    // create canvas
    let canvas = createCanvas(800, 400)
    canvas.parent('p5container');

}

function draw() {

  //bg color
background ('#000000')

//rectangle 
noFill()
stroke('red')
strokeWeight('5')
rect(50,50,700,300,50)

//time 

let h = hour()
let m = minute()
let s = second()

// print
console.log (h+ ':' + m + ':' + s)
let time = h + ':' + m + ':' + s

if(s%2 == 0 ) {
  time = h + ':' + m + ':' + s
}
//modulo function

//size
textSize(96)

//color
noStroke()

fill ('red')
textAlign(CENTER, CENTER)
text (time, width/2, height/2)
}
