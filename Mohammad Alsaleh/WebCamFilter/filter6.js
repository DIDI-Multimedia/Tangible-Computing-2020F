
// Ver 2



// collision detection
let capture
function setup() {
// body...
let canvas = createCanvas(900, 900)
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
//______________
let stepp = 7
        for (var p = 0; p < 150; p += stepp) {
        for (var a = 0; a < 300; a += stepp) {
                let coll = capture.get(p, a)
                let vall = brightness(coll)
        if (vall < 40) {
                push()

                fill(0)
                        //fill(val*2,val/4*15,113)

                        //fill(val*2,val/4*15,113)
                        textSize(stepp)
                        //rect(p, a, stepp, stepp) // Dark pixels
                        fill('green')
                        text("Mo", p, a)
                pop()


}

else {
    fill(255)
// fill(val,155,215)
//rect(p, a, stepp, stepp)  //Background pixels


        }
    }
}
let step = 10
textAlign(CENTER, CENTER)
//translate(500,500)
for (var i = 150; i < capture.width; i += step) {
for (var j = 0; j < capture.height; j += step) {


let col = capture.get(i, j)
let val = brightness(col)

if (val < 30) {

            push()

                    fill(255)
                    //fill(val*2,val/4*15,113)

                    //fill(val*2,val/4*15,113)
                    textSize(step)
                    //circle(i, j, step, step) // Dark pixels
                    text("Mo", i, j)
            pop()
}

else {
 fill(0)
//rect(i, j, step, step)  //Background pixels
push()

                    fill(255,0,0)
                    //fill(val*2,val/4*15,113)

                    //fill(val*2,val/4*15,113)
                    textSize(step)
                    //circle(i, j, step, step) // Dark pixels
                    text("Mo", i, j)
            pop()


        }
    }
}
//________________
stroke(0)
strokeWeight(20)
// for (i capture.width)
// line(width/2,0,width/2,height)
//fill('green')
// noStroke()
noStroke()
// let c = get(mouseX, mouseY)
// let g = get(100, 455)
// textSize(24)
// text(g, 800, 40)
//let c = get(150, 455)
let c = get(70, 100)

        push()
                noFill()
                stroke(255)
                strokeWeight(2)
                circle(70,100,80)
        pop()

                textSize(24)
                text(c, 800, 70)

        push()
            
                fill(c)
                circle(800,150,50)

        pop()
