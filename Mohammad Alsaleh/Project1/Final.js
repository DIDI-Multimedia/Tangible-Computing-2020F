let vecLocation = [];
let vecVelocity = [];

function setup() {
  createCanvas(900,700);

  frameRate(59);
for (let i = 0; i<15; i++){
    vecLocation[i] = createVector(width / 2, 0);
    vecVelocity[i] = createVector(random(-10, 10),random(-10,10));
 }
}

function draw(){
  
  background(0,70);


scene()
  
}
  
function scene(){
  //   for (var x = 0; x < width; x += width / 25) {
  //   for (var y = 0; y < height; y += height / 10) {
  //     stroke(255,0,0);
  //     strokeWeight(3);
  //     line(x, 0, x, height);
  //     line(0, y, width, y);
  //   }
  // }
  noStroke();
  fill(0,255,0)

for (let i = 0; i < 5; i++){
  
    vecLocation[i].add(vecVelocity[i]);
  //CRAB
   rect(vecLocation[i].x,    vecLocation[i].y,10,10);
   rect(vecLocation[i].x+10, vecLocation[i].y,10,10);
   rect(vecLocation[i].x+20, vecLocation[i].y,10,10);
   rect(vecLocation[i].x+30, vecLocation[i].y,10,10);
   rect(vecLocation[i].x+40, vecLocation[i].y,10,10);
   rect(vecLocation[i].x+50, vecLocation[i].y,10,10);
   rect(vecLocation[i].x-10, vecLocation[i].y,10,10);
   rect(vecLocation[i].x-20, vecLocation[i].y,10,10);
   rect(vecLocation[i].x-30, vecLocation[i].y,10,10);
   rect(vecLocation[i].x-40, vecLocation[i].y,10,10);
   rect(vecLocation[i].x-50, vecLocation[i].y,10,10);
  
   rect(vecLocation[i].x,     vecLocation[i].y+10,10,10);
   rect(vecLocation[i].x+10, vecLocation[i].y+10,10,10);
   rect(vecLocation[i].x+20, vecLocation[i].y+10,10,10);
   rect(vecLocation[i].x+30, vecLocation[i].y+10,10,10);
   rect(vecLocation[i].x+50, vecLocation[i].y+10,10,10);
   rect(vecLocation[i].x-10, vecLocation[i].y+10,10,10);
   rect(vecLocation[i].x-20, vecLocation[i].y+10,10,10);
   rect(vecLocation[i].x-30, vecLocation[i].y+10,10,10);
   rect(vecLocation[i].x-50, vecLocation[i].y+10,10,10);
  
   rect(vecLocation[i].x+30, vecLocation[i].y+20,10,10);
   rect(vecLocation[i].x+50, vecLocation[i].y+20,10,10);
   rect(vecLocation[i].x-30, vecLocation[i].y+20,10,10);
   rect(vecLocation[i].x-50, vecLocation[i].y+20,10,10);
  // fill(255)
  //  rect(vecLocation[i].x+10, vecLocation[i].y+30,10,10);
  //  rect(vecLocation[i].x+20, vecLocation[i].y+30,10,10);
  //  rect(vecLocation[i].x-10, vecLocation[i].y+30,10,10);
  //  rect(vecLocation[i].x-20, vecLocation[i].y+30,10,10);

   rect(vecLocation[i].x,    vecLocation[i].y-10,10,10);
   rect(vecLocation[i].x+10, vecLocation[i].y-10,10,10);
   rect(vecLocation[i].x+20, vecLocation[i].y-10,10,10);
   rect(vecLocation[i].x+30, vecLocation[i].y-10,10,10);
   rect(vecLocation[i].x+40, vecLocation[i].y-10,10,10);
   rect(vecLocation[i].x-10, vecLocation[i].y-10,10,10);
   rect(vecLocation[i].x-20, vecLocation[i].y-10,10,10);
   rect(vecLocation[i].x-30, vecLocation[i].y-10,10,10);
   rect(vecLocation[i].x-40, vecLocation[i].y-10,10,10);
  
   rect(vecLocation[i].x,    vecLocation[i].y-20,10,10);
   rect(vecLocation[i].x+10, vecLocation[i].y-20,10,10);
   rect(vecLocation[i].x+20, vecLocation[i].y-20,10,10);
   rect(vecLocation[i].x+30, vecLocation[i].y-20,10,10);
   rect(vecLocation[i].x-10, vecLocation[i].y-20,10,10);
   rect(vecLocation[i].x-20, vecLocation[i].y-20,10,10);
   rect(vecLocation[i].x-30, vecLocation[i].y-20,10,10);
   
   
// print(vecVelocity[i].x)
//  print(width)
  
    if(vecLocation[i].x < 50 || vecLocation[i].x > width-220){
      vecVelocity[i].x = vecVelocity[i].x * -1;
    }
    if (vecLocation[i].y < 0|| vecLocation[i].y> height/2-200){
      vecVelocity[i].y = vecVelocity[i].y * -1;
    }
  }
}
