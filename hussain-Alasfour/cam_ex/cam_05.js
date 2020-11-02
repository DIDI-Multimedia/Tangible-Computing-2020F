

let capture

function setup() {

    
    let canvas = createCanvas(600, 600)
    canvas.parent('p5container')
    capture = createCapture()
    capture.hide()

}

function draw() {

    background(218, 208, 192)

    background(capture.get())


    let step = 50


    textAlign(CENTER, CENTER)

    for (var i = 0; i < capture.width; i += step) {

        for (var j = 0; j < capture.height; j += step) {

            let col = capture.get(i, j)
            let val = brightness(col)

            if (val > 50) {

                fill(val)
                textSize(step)
                rect(i, j, step, step)
                noStroke()
                text(val, i, j)

            } else {

                fill(43, 42, 92,5)
                rect(i, j, step, step)
            }






        }
    }
}