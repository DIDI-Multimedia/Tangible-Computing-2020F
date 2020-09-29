// TenThousandX Assignment: // Add to this code to create a drawing // Note: do not delete anything 


function setup() {

  // do not change anything in setup 
  let canvas = createCanvas(800, 800)
  // canvas.parent('p5container');
  
  background('#ffefff')



  TenThousandX()

let step = 2;
for (let m = 0; m < width; m+=step) {
let val = m/width*255
line(m,0,m,height)
stroke('#ffefff')
}

}


function TenThousandX() {
  // add code here 

    stroke('#E784BA');



  for (var x = 0; x < 100; x++) {
    
    

    let y1 = random(1000,10)
    let y2 = random(50,109)

    line(5,y1,width,y2)
  }

stroke('#B7F6AF');
strokeWeight(0.5);



  for (var v = 5; v < 1000; v+=10) {
    
    

    let v1 = random(500,500)
    let v2 = random(230,700)

    line(5,v1,height,v2)
  }

}