// collision detection 

let capture

function setup() {

    // body...
    let canvas = createCanvas(1200, 1000)
    canvas.parent('p5container')
    //captureMode(CENTER)
    capture = createCapture()
        capture.hide()

}

function draw() {

    background('green')

    //background(capture.get())

    push()
    translate(height/2,width/2)
    imageMode(CENTER)
    image(capture,0,0)

    let step = 10


    textAlign(CENTER, CENTER)

    for (var i = -capture.width; i < capture.width; i += step) {

        for (var j = -capture.height; j < capture.height; j += step) {

            let col = capture.get(i, j)
            let val = brightness(col)

            if (val < 50) {

                //fill(val)
              textSize(step)
                
               //rect(i, j, step, step)

                text("Mo", i, j)

            } else {

                fill(255,0,0)
                rect(i, j, step, step)
            }






        }


    }
pop()
    stroke(0)
    strokeWeight(20)

    // for (i capture.width)

    // line(width/2,0,width/2,height)

    // fill('green')
    // noStroke()


    noStroke()

    let c = get(mouseX, mouseY)

    textSize(24)
    text(c, 50, 50)

    fill(0, 255, 0)

    let black = color(0, 0, 0, 255)
        // console.log(c)
        // console.log(black)

    if (c[0] <= 0 ) {

        fill(255, 0, 0)
        console.log('true')

    }

    circle(mouseX, mouseY, 10, 10)



}

// function draw() {
//     // body...

//     background(0)

//     let s = second()


//     let m = minute()
//     let h = hour()
//     normalMaterial();

//     push()

//     rotateX(TWO_PI / 3600 * frameCount)

//     for (var j = 0; j < h; j++) {

//       // hours

//         push()
//         rotateZ(TWO_PI / 12 * j)
//         translate(25, 0, 0)
//         sphere(10)
//         pop()

//     }


//     // translate(150,0,0)

//     for (var i = 0; i < m; i++) {

//         /// minutes 

//         push()
//         rotateZ(TWO_PI / 60 * i)
//         translate(100, 0, 0)
//         sphere(5)
//         pop()

//     }

//     for (var k = 0; k < s; k++) {

//         /// seconds 

//         push()
//         rotateY(TWO_PI / 60 * k)
//         translate(sin(millis()/60000*TWO_PI)*10, 0, 0)
//         sphere(3)
//         pop()

//     }



//     push()
//     rotateZ(TWO_PI / 1000 * millis())
//     translate(200, 0, 0)
//     sphere(3)
//     pop()



// }