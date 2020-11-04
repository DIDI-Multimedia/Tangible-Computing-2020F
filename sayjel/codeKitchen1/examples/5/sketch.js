// collision detection 

let capture

let pixelsGrid = []

let cx = 0 
let cy = 0 
// distance attractor filed 
// use nose eyes mouth as attractor points

function preload() {

    capture = createCapture()
    capture.hide()
}

function setup() {


    let canvas = createCanvas(1280, 720)
        // pixelsGrid = initGrid(10, 10)

    console.log('pixels grid loaded')

}

function draw() {

    // console.log('draw!')

    background(34,155,215)

    let spacing = 5
    noStroke()

    if (capture) {

        // image(capture.get(),0,0)

        console.log('capture available')

        for (var x = 0; x < capture.width; x += spacing) {

            for (var y = 0; y < capture.height; y += spacing) {

                let col = capture.get(x, y)

                let dx = x - mouseX
                let dy = y - mouseY

                let offX = dx / 5
                let offY = dy / 5

                let d = dist(mouseX, mouseY, x, y)

                let radius = width/8

                if (d < radius) {

                    let alpha = (1-d/radius)*255

                    let circleRadius = (1-d/radius)*50

                    // stroke(255)

                    fill(brightness(col)*2,alpha)
                    circle(x + offX+cx, y + offY + sin(frameCount/100)*height/4, circleRadius)



                }




            }


        }

    }

    cx++
    cy++ 

    if (cx > width) cx = 0 
    if (cy > height) cy = 0



}

// let capture

// let pixelsGrid = []

// function preload() {

//     capture = createCapture()
//     capture.hide()
// }

// function setup() {


//     let canvas = createCanvas(1280, 720)
//     pixelsGrid = initGrid(10, 10)

//     console.log('pixels grid loaded')

// }

// function draw() {

//     if (capture) {

//         for (var i = 0; i < pixelsGrid.length; i++) {
//             let row = pixelsGrid[i]
//             for (var j = 0; j < row.length; j++) {

//                 let w = capture.width/pixelsGrid.length
//                 let h = capture.height/row.length
//                 let x = w*i
//                 let y = j*j

//                 let pixel = pixelsGrid[i][j]
//                 pixel.col = capture.get(x,y)

//                 fill(pixel.col)
//                 rectangle(x,y,w,j)




//             }
//         }


//     }



// }

// function initGrid(numX, numY) {

//     let arr = []

//     for (var i = 0; i < numX; i++) {
//         let row = []
//         for (var j = 0; j < numY; j++) {

//             let obj = {}
//             obj.col = [0,0,0]
//             row.push(obj)
//         }
//         arr.push(row)
//     }

//     return arr
// }

// function initializePixelsGrid(feed, numX, numY) {

//     // console.log('initializePixelsGrid', numX,numY,feed.width,feed.height)

//     // let grid = []

//     // let xoff = feed.width/numX 
//     // let yoff = feed.height/numY 

//     // console.log('xoff',xoff,'yoff',yoff)

//     // for (var i = 0; i < capture.width; xoff ){

//     //     let row = []

//     //     for (var j  = 0; j < capture.height; yoff){



//     //         row.push(setPixel(i, j, xoff, yoff))


//     //     }

//     //     grid.push(row)

//     // }

//     // return grid 

// }

// function setPixel(x, y, w, h) {

//     // let obj = {}
//     // obj.x = x 
//     // obj.y = y 
//     // obj.w = w 
//     // obj.h = h 

//     // obj.display = function(img){

//     //     let col = img.get(this.x,this.y)
//     //     fill(col)
//     //     rect(this.x, this.y, this.w, this.h)

//     // }

//     return obj

// }