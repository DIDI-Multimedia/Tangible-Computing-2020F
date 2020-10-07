
//Pseudo code for analogue clock

// Create canvas
// Define Center
// Draw circle
// Get time (hrs,min, s)
// Apply rotation based on time 
//Draw arms


/* SCSS RGB 
$army-green: rgba(81, 75, 35, 1);
$dark-olive-green: rgba(101, 104, 57, 1);
$sage: rgba(203, 201, 173, 1);
$ash-gray: rgba(203, 208, 185, 1);
$opal: rgba(189, 219, 208, 1);


function setup(){

       let canvas = createCanvas(600,600)
       canvas.parent('p5container')

}


function draw(){


       background(255)


       // Define Center
       let cx = width/2
       let cy = height/2
        let d = width/1

       // Draw circle
       

       // Get time (hrs,min, s)
       let h = hour()
       let m = minute()
       let s = nf(second(),2)

       // rotation
       let rotH = radians(h/60*360)
       let rotM = radians(m/60*360)
       let rotS = radians(s/60*360) // radians
       // let rotS = s/60*TWO_PI // radians

       // draw arm
       console.log('circle')
    let time = 'circle'

    if ( s%2 == 0 ){
      //muduolo function 

      time = 'circle'

    }

        push()
        
    
        translate(cx,cy)
        
        
        stroke(203, 208, 185)
        strokeWeight(4)
        rotate(rotH)
        line(0,0,0,-d/8)


        stroke(203, 201, 173)
        strokeWeight(3)
        rotate(rotM)
        line(0,0,0,-d/4) 
 

        fill(101, 104, 57)
        stroke(101, 104, 57)
        strokeWeight(2)
        rotate(rotS)
        circle(0,0,50,-d/2)

         pop()



}

*/



void setup() {
 size(800,800);
 p = new PointerThing();
}

void draw() {
 background(255);
 p.update();
 p.display();
}

class PointerThing {
 float x,y,w,h,a;

 PointerThing(){
  x = 400;
  y = 400;
  w = 100;
  h = 20;
  a = 0;
 }
 void update(){
  a = atan2(mouseY - y, mouseX - x);
 }
 void display(){
  fill(255,0,0);
  pushMatrix();
  translate(x,y);
  rotate(a);
  rect(0,-h/2,w,h);
  popMatrix();
 }
}