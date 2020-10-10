//try to mess with shapes 
//using template from 1st clock



let h
let m
let s

function setup() {

    let canvas = createCanvas(600, 600)
    canvas.parent('p5container');
}


function draw() {

    background(0)

    // define center 
    let cx = width / 2
    let cy = height / 2
    // let d = width / 2

    // get time 
    h = hour()
    m = minute()
    s = second()

    glowrect(cx, cy, s, 60)
    glowrecttwo(cx, cy, m, 60)  
    glowrectthree(cx, cy, h, 24)  


}

function glowrect(cx, cy, t, max) {

    push()
    translate(cx, cy)
    stroke(50*t * 5, 155/t,100+t)
    //strokeWeight(25)

    if (frameCount% 1 == 0) {

        // noFill(0)
        for (var i = 0; i < max; i++) {
            if (i <= t) {


                for (var k = 1; k < 10; k++) {
                    fill(50*t * 5, 155/t,100+t) 
                    
                    rect(-275,-275,10,k*t)
                    rect(-225,-275,10,k*t)

                    rect(275,-275,10,k*t)
                    rect(225,-275,10,k*t)
                }


            }

            // strokeWeight(1)
        }


    }
    pop()

}

function glowrecttwo(cx, cy, t, max) {

    push()
    translate(cx, cy)
    stroke(50*t * 5, 155/t,100+t)
    //strokeWeight(25)

    if (frameCount% 1 == 0) {

        // noFill(0)
        for (var i = 0; i < max; i++) {
            if (i <= t) {


                for (var k = 1; k < 10; k++) {
                    fill(100*t,122,122) 
                    
                    rect(-175,-275,10,k*t)
                    rect(-125,-275,10,k*t)

                    rect(175,-275,10,k*t)
                    rect(125,-275,10,k*t)
                }


            }

            // strokeWeight(1)
        }


    }
    pop()

}

function glowrectthree(cx, cy, t, max) {

    push()
    translate(cx, cy)
    stroke(10+t * 5, 0,100*t)
    //strokeWeight(25)

    if (frameCount% 1 == 0) {

        // noFill(0)
        for (var i = 0; i < max; i++) {
            if (i <= t) {


                for (var k = 1; k < 10; k++) {
                    fill(100,122,22*k*t) 
                    
                    rect(-75,-275,10,k*t)
                    rect(-25,-275,10,k*t)

                    rect(75,-275,10,k*t)
                    rect(25,-275,10,k*t)
                }


            }

            // strokeWeight(1)
        }


    }
    pop()

}


