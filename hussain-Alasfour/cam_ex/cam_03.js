
let capture

function setup() {

    let canvas = createCanvas(640, 480)
    canvas.parent('p5container')
    capture = createCapture(VIDEO)
    capture.hide()
    


}

function draw() {

    

    let spacing = 5

    

    for (var i = 0; i < width; i += spacing) {

        for (var j = 0; j < height; j += spacing) {

            let col = capture.get(i, j)

            if (brightness(col) > second()){
              col = (0,0,0)
              fill(255,100,255)
              rect(i,j,spacing*4)
              stroke(random(255),random(255),random(255))
            }

                fill(col)
                circle(i, j, spacing,spacing)

        


        }

    }

}