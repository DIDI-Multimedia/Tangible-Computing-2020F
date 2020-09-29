// TenThousandX Assignment: // Add to this code to create a drawing // Note: do not delete anything 


function setup() {

    // do not change anything in setup 
    let canvas = createCanvas(800, 800)
    // canvas.parent('p5container');

    TenThousandX()

}


function TenThousandX() {

background('black')
      stroke(0,100,34,100)

    for (var x = 0; x < 1000; x++) {

      let y1 = random(10,height)
      let y2 = random(500,1000)


      line(0,y1,width,y2)

    }
      stroke(0,400,34,10)

    for (var c = 0; c < 1000; c++) {

      let e1 = random(50,height)
      let e2 = random(300,300)


      line(0,e1,width,e2)

    }
}
function draw() {
	line(mouseX, mouseY, 5, 5);
	stroke('black')
	if (mouseIsPressed) {
	stroke(random(255), random(255), random(255))
}
}


