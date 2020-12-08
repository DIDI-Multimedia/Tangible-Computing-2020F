console.log('sketch.js')

let obj1, obj2
let capture


function preload() {

    obj1 = loadModel('obj/obj1.obj');
    obj2 = loadModel('obj/obj2.obj');

}

function setup() {

    canvas = createCanvas(640, 480, WEBGL)
    capture = createCapture()
    capture.hide()

}

function draw() {

    // background(0, 255, 255)

    image(capture.get(),-width/2,-height/2)
    // background(capture.get())
    // image(capture.get(),-width/2,-height/2,width,height)
    push()
    scale(1)
    normalMaterial();
    rotateX(millis() / 1000)
    model(obj2)
    rotateY(millis() / 500)

    model(obj2)
    push()
    translate(0, 10, 0)
    model(obj2)
    pop()
    push()
    rotateZ(millis() / 200)
    translate(10, 10, 0)
    model(obj2)
    pop()
    model(obj2)
    pop()
}