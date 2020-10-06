// TenThousandX Assignment: // Add to this code to create a drawing // Note: do not delete anything 


function setup() {

    // do not change anything in setup 
    let canvas = createCanvas(800, 400)
    canvas.parent('p5container');
}


    function draw() {
      // body...
    
    background('black')
    noFill()
    stroke('red')
    rectMode(CENTER)
    strokeWeight(3)
    rect( width/2, height/2. 700, 300,25)

    let h = hour()
    let m = minute()
    let s = second()

// print
console,log( h + ':'+ m + ':' + s)
let time = h + ':'+ m + ':' + s

textSize(96)
noStroke()
fill('red')
textAlign(CENTER,CENTER)
text(time, width/2, height/2)

}



