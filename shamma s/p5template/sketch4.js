
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
*/

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
       let h = nf(our(),2)
       let m = nf(minute(),2)
       let s = nf(second(),2)
       let time = h + ':'+ m + ':' + s

    if ( s%2 == 0 ){
      //muduolo function 

      time = h + ' '+ m + ' ' + s

    }


    textSize(96)
    noStroke()
    fill('red')
    textAlign(CENTER, CENTER)
    

      





       // rotation
       let rotH = radians(h/60*360)
       let rotM = radians(m/60*360)
       let rotS = radians(s/60*360) // radians
       // let rotS = s/60*TWO_PI // radians

       // draw arm
       console.log(rotH)
       
        stroke(34,155,215)

        push()
        translate(cx,cy)
        circle(0,0,d)
        
        push()
        strokeWeight(1)
        rotate(rotS)
        line(0,0,0,-d/2)
        pop()

        push()
        strokeWeight(2)
        rotate(rotM)
        line(0,0,0,-d/4) 
        pop()

        push()
        strokeWeight(3)
        rotate(rotH)
        line(0,0,0,-d/8)
        pop()

        
         pop()



}