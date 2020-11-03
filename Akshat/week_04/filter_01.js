// collision detection 

let capture

function setup() {

    // body...
    let canvas = createCanvas(600, 600)
    canvas.parent('p5container')
    capture = createCapture()
        capture.hide()

}

function draw() {

    background('green')

    background(capture.get())
    image(capture,0,0)

    let step = 20


    textAlign(CENTER, CENTER)

    for (var i = 0; i < capture.width; i += step) {

        for (var j = 0; j < capture.height; j += step) {

            let col = capture.get(i, j)
            let val = brightness(col)

            if (val > 50) {

                fill(random(255),random(255),random(255))
               //rect(i, j, step, step)
                circle(i,j,step)

            } 


        }


    }
}