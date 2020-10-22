let capture

function setup() {

    let canvas = createCanvas(600, 600)
    canvas.parent('p5container')
    capture = createCapture()
        capture.hide()

}

function draw() {

    background('green')

    background(capture.get())
    image(capture,0,0)

    let step = 10




    for (var i = 0; i < capture.width; i+=step) {

        for (var j = 0; j < capture.height; j+=step) {

            let col = capture.get(i, j)
            let val = brightness(col)
          
            if (val > 50) {
                
                fill(0)
                textSize(step)
                rect(i, j, step, step)


            } else {

                console.log('mynameisjef')

            }

        }
    }

  
}