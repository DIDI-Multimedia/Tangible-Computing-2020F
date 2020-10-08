//0. create canvas
//1. Define center
//2. Draw circle
//3. Get Time
//4. Apply rotation based on time
//5. Draw arms
function setup(){

let canvas = createCanvas(600,600)
canvas.parent('p5container')


}

function draw(){

let cx = width/2
let cy = height/2
let d = width/2



let h = hour()
let m = minute()
let s = second()

let rotH = radians(h/60*360)

let rotM = radians(m/60*360)

let rotS = radians(s/60*360)

console.log(rotH)

stroke(34,155,215)

push()
translate(cx,cy)

circle(0,0,d)

push()

rotate(rotS)
strokeWeight(1)
line(0,0,0,-d/2)
pop()

push()
rotate(rotM)
strokeWeight(2)
line(0,0,0,-d/4)
pop()

push()
rotate(rotH)
strokeWeight(3)
line(0,0,0,-d/8)

pop()
pop()


}