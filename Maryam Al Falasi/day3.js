// TenThousandX Assignment: // Add to this code to create a drawing // Note: do not delete anything 


function setup() {

    // do not change anything in setup 
    let canvas = createCanvas(800, 800)
    // canvas.parent('p5container');

    TenThousandX()

}


function TenThousandX() {
    // add code here 
colorMode(RGB);

let from = color(random(255),random(255),random(255));
let to = color(random(255),random(255),random(255));
colorMode(RGB); // Try changing to HSB.
let interA = lerpColor(from, to, 0.2);
let interB = lerpColor(from, to, 1);
	
      stroke(interA)

    for (var x = 0; x < 1000; x+=10) {

      let y1 = random(1000,500)
      let y2 = random(20,9)


      line(0,y1,width,y2)

    }
	    stroke(interB)

    for (var g = 0; g < 1000; g+=10) {

      let c1 = random(20,500)
      let c2 = random(1000,9)


      line(0,c1,width,c2)

    }
	
}
