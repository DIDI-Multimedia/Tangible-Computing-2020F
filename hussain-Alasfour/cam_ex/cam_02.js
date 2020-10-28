
let capture

function setup() {

    let canvas = createCanvas(640, 480)
    canvas.parent('p5container')
    capture = createCapture(VIDEO)
    capture.hide()
   

}

function draw() {

    // image(capture,0,0) 

    let spacing = 5


    for (var m = 0; m < width; m += spacing) {

        for (var n = 0; n < height; n += spacing) {

            let col = capture.get(m, n)

            if (brightness(col) < second()){
              col = 255
              fill(255,100,255)
              rect(m,n,spacing*4)
              stroke(171, 87, 151)
              
            }

                fill(col)
                rect(m, n, spacing,spacing)

        


        }

    }

}