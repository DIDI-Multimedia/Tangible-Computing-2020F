//Psudocode for analog clock

//create canvas
// define center
//draw circle
// get time
// apply rotation based on time
// draw arms


function setup() {

    // create canvas
    let canvas = createCanvas(800, 800)
        canvas.parent('p5container')
   

    let cx = width/2
    let cy = height/2
    let d = width/2

    //draw circle
    circle(cx,cy,d)

    // get time
    let h = hour()
    let m = minute()
    let s = second()

// rotation
let rotH = radians (h/60*360)
let rotM = radians (m/60*360)
let rotS = radians (s/60*360)

console.log(rotH)


//draw arms 
push()
translate(cx,cy)
circle (0,0,d)
rotate(s)
line(0,0,0,-d/2)
pop()
    }