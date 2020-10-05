// TenThousandX Assignment: // Add to this code to create a drawing // Note: do not delete anything 

function setup() {

    // do not change anything in setup 
    let canvas = createCanvas(800, 400)
    canvas.parent('p5container');
  




}
 function draw() {
//background
background('black')

//rect
 noFill()
 stroke('red')
 strokeWeight(3)
 rectMode(CENTER)
 rect(width/2,height/2,700,300,25)

//time 
 let h = nf(hour(),2)
 let m = nf(minute(),2)
 let s = nf(second(),2)


//print 
 console.log(h + ':' + m + ':' + s)
 let time = h + ':' + m + ':' + s

// draw Numbers 

textAlign(CENTER,CENTER)
text (time, width/2, height/2)

//size 
textSize(96)


 }


