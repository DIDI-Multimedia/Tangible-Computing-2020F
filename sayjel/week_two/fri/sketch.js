function setup() {
    // body...

    let canvas = createCanvas(500, 500, WEBGL)
    canvas.parent('p5container')

}

function draw() {
    // body...

    background(0)

    let s = second()


    let m = minute()
    let h = hour()
    normalMaterial();

    push()

    rotateX(TWO_PI / 3600 * frameCount)

    for (var j = 0; j < h; j++) {

      // hours

        push()
        rotateZ(TWO_PI / 12 * j)
        translate(25, 0, 0)
        sphere(10)
        pop()

    }


    // translate(150,0,0)

    for (var i = 0; i < m; i++) {

        /// minutes 

        push()
        rotateZ(TWO_PI / 60 * i)
        translate(100, 0, 0)
        sphere(5)
        pop()

    }

    for (var k = 0; k < s; k++) {

        /// seconds 

        push()
        rotateY(TWO_PI / 60 * k)
        translate(sin(millis()/60000*TWO_PI)*10, 0, 0)
        sphere(3)
        pop()

    }



    push()
    rotateZ(TWO_PI / 1000 * millis())
    translate(200, 0, 0)
    sphere(3)
    pop()



}