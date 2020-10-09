
// pseudo code for analog code

// 0 create canvas
// 1 define center
// 2 draw circle
// 3 get time (hrs, m, s)
// 4 apply rotation based on timr
// 5 draw arms




function setup() {

let canvas = createCanvas(600,600)
canvas.parent('p5container');

// define center
let cx = width/2
let cy = height/2
let d = width/2

// draw circle


// get time
let h = hour()
let m = minute()
let s = second()

// rotation?

let rotH = radians(h/60*360)
let rotM = radians(m/60*360)
let rotS = radians(s/60*360)


console.log(rotH)
// draw arms


push()
translate(cx,cy)
circle(0,0,d)


push()
rotate(rotS)
line(0,0,0,-d/2)
pop()

push()
rotate(rotM)
line(0,0,0,-d/4)
pop()

push()
rotate(rotH)
line(0,0,0,-d/8)
pop()

pop()

}





function draw(){


}