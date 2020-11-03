
// collision detection
let capture
function setup() {
// body...
let canvas = createCanvas(900,700)
canvas.parent('p5container')
//captureMode(CENTER)
capture = createCapture()
capture.hide()
}
function draw() {

    background(110,0,25)

        //circle(300,900,50)

        push()
                fill(20,255,0)
                circle(100,500,50)
                
                fill(50,0,110)
                circle(150,500,50)
                
                fill(255,255,255)
                circle(200,500,50)
                
                fill(255,0,0)
                circle(250,500,50)
                
                
        pop()

//background(capture.get())


            push()
            image(capture,0,0)
            pop()


let step = 10
textAlign(CENTER, CENTER)
//translate(500,500)
        for (var i = 0; i < capture.width; i += step) {
        for (var j = 0; j < capture.height; j += step) {
            let col = capture.get(i, j)
            let val = brightness(col)
        if (val < 10) {
push()
            fill(0)
            textSize(step)

           rect(i, j, step, step) // Dark pixels 
            //text("Mo", i, j)

pop()
        } 
        else {
           // fill(val,155,215)
             rect(i, j, step, step)  //Background pixels
        }
    }    
}
stroke(0)
strokeWeight(20)
// for (i capture.width)
// line(width/2,0,width/2,height)
//fill('green')
// noStroke()
noStroke()
// let c = get(mouseX, mouseY)

let g = get(100, 455)
textSize(24)
text(g, 800, 40)

let c = get(150, 455)
textSize(24)
text(c, 800, 70)

let b = get(200, 455)
textSize(24)
text(b, 800, 100)

let d = get(250, 455)
textSize(24)
text(d, 800, 130)



//fill(0, 255, 0)
let black = color(0, 0, 0, 255)
// console.log(c)
// console.log(black)
if (c[0] === 50 ) {

    fill(0,0,215)

    console.log('Turn Blue')
    }
   // circle(mouseX, mouseY, 10, 10)
   if (c[0] === 255 ) {

    fill(255,0,0)

    console.log('Turn Red')
    }
    if (c[0] === 20 ) {

    fill(0,215,0)

    console.log('Turn Green')
    }
     if (c[0] === 255 && c[1] === 255 ) {

    fill(0,255,255)

    console.log('Turn white')
    }

}

//Broken 
