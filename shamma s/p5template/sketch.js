// TenThousandX Assignment: // Add to this code to create a drawing // Note: do not delete anything 


function setup() {

    // do not change anything in setup 
    let canvas = createCanvas(800, 800)
    canvas.parent('p5container');

    TenThousandX()

}


function TenThousandX() {
    // add code here 

      stroke(0,255)

    for (var x = 0; x < 1000; x++) {

      let y1 = random(0,height)
      let y2 = random(0,height)


      line(0,y1,width,y2)

    }
}