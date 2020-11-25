// TenThousandX Assignment: // Add to this code to create a drawing // Note: do not delete anything 


function setup() {

    // do not change anything in setup 
    let canvas = createCanvas(800, 800)
    canvas.parent('p5container');

    TenThousandX()

}


function TenThousandX() {
    // add code here 

    background(255)

    for (var x = 0; x < 10000; x++) {

        let t = x / 1000
        let x1 = t * width
        let y1 = t * height



        stroke(0, 50)

        if (x % 1 == 0) {


            // line(noise(t) * width + 0.16, noise(t) * height + 0.02, x1, noise(t) * width + 1.123, noise(t) * height + 0.44)

        }

        if (x % 2 == 0) {


            line(0, y1, x1, noise(t) * height + 0.07)

        }

        if (x % 7 == 0) {

            line(x1, y1, noise(t) * height + 0.017, y1)


        }


        if (x % 11 == 0) {

            line(noise(t) * height + 0.03, y1, noise(t) * height + 0.017,y1 )


        }

    }
}