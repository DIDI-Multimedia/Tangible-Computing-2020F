
function x(){
for (let i = 0; i < 5; i++){
	noStroke();
	fill(c,255,c,t)
    vecLocation[i].add(vecVelocity[i]);
  //CRAB
   rect(vecLocation[i].x,		 vecLocation[i].y,10,10);
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
  
   rect(vecLocation[i].x, 		vecLocation[i].y+10,10,10);
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

   rect(vecLocation[i].x,		 vecLocation[i].y-10,10,10);
   rect(vecLocation[i].x+10, vecLocation[i].y-10,10,10);
	 rect(vecLocation[i].x+20, vecLocation[i].y-10,10,10);
   rect(vecLocation[i].x+30, vecLocation[i].y-10,10,10);
   rect(vecLocation[i].x+40, vecLocation[i].y-10,10,10);
   rect(vecLocation[i].x-10, vecLocation[i].y-10,10,10);
	 rect(vecLocation[i].x-20, vecLocation[i].y-10,10,10);
   rect(vecLocation[i].x-30, vecLocation[i].y-10,10,10);
   rect(vecLocation[i].x-40, vecLocation[i].y-10,10,10);
  
   rect(vecLocation[i].x,		 vecLocation[i].y-20,10,10);
   rect(vecLocation[i].x+10, vecLocation[i].y-20,10,10);
   rect(vecLocation[i].x+20, vecLocation[i].y-20,10,10);
   rect(vecLocation[i].x+30, vecLocation[i].y-20,10,10);
   rect(vecLocation[i].x-10, vecLocation[i].y-20,10,10);
   rect(vecLocation[i].x-20, vecLocation[i].y-20,10,10);
   rect(vecLocation[i].x-30, vecLocation[i].y-20,10,10);
   
   
// print(vecVelocity[i].x)
// 	print(width)
  
    if(vecLocation[i].x < 50 || vecLocation[i].x > width-5){
      vecVelocity[i].x = vecVelocity[i].x * -1;
    }
    if (vecLocation[i].y < 0|| vecLocation[i].y> height-200){
      vecVelocity[i].y = vecVelocity[i].y * -1;
    }
  }
}