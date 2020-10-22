
let capture

function setup() {

    let canvas = createCanvas(640, 480)
    canvas.parent('p5container')
    capture = createCapture(VIDEO)
    capture.hide()
    noStroke()


}

function draw() {

    let spacing = 10

    for (var i = 0; i < width; i += spacing) {

        for (var j = 0; j < height; j += spacing) {

            let col = capture.get(i, j)

            fill(0,0,0)
                rect(i, j, spacing,spacing) 


            if (brightness(col) > 10){

              fill(255,255)
              circle(i+spacing,j+spacing,spacing)
            }


        }

    }

}