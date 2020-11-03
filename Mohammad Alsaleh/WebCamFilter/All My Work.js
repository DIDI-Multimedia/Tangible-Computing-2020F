// collision detection
let capture
function setup() {
// body...
let canvas = createCanvas(1200, 1200)
canvas.parent('p5container')
//captureMode(CENTER)
capture = createCapture()
capture.hide()
}
function draw() {
// background('green')
//circle(300,900,50)
push()
fill(20,155,215)
circle(100,500,50)
fill(50,155,215)
circle(120,500,50)
fill(70,155,215)
circle(150,500,50)
pop()
//background(capture.get())
// push()
// image(capture,0,0)
// pop()
let step = 7
textAlign(CENTER, CENTER)
//translate(500,500)
        for (var i = 0; i < capture.width; i += step) {
        for (var j = 0; j < capture.height; j += step) {
            let col = capture.get(i, j)
            let val = brightness(col)
        if (val < 50) {
push()
            fill(0)
            textSize(step)

           //rect(i, j, step, step) // Dark 
            text("Mo", i, j)

pop()
        } 
        else {
           // fill(val,155,215)
             rect(i, j, step, step)  //Background pixels
        }
    }    
}
stroke(0)
strokeWeight(20)
// for (i capture.width)
// line(width/2,0,width/2,height)
//fill('green')
// noStroke()
noStroke()
let c = get(mouseX, mouseY)
textSize(24)
text(c, 50, 50)
fill(0, 255, 0)
let black = color(0, 0, 0, 255)
// console.log(c)
// console.log(black)
if (c[0] <= 0 ) {

    fill(34,155,215)

    console.log('true')
    }
    circle(mouseX, mouseY, 10, 10)

}

//  First 
______________________________________________________

______________________________________________________

______________________________________________________

______________________________________________________

______________________________________________________

______________________________________________________

______________________________________________________

//Police Colors :)

// collision detection
let capture
function setup() {
// body...
let canvas = createCanvas(1200, 1200)
canvas.parent('p5container')
//captureMode(CENTER)
capture = createCapture()
capture.hide()
}
function draw() {

    background(0)

        //circle(300,900,50)

        push()
                fill(20,255,0)
                circle(100,500,50)
                
                fill(50,0,110)
                circle(150,500,50)
                
                fill(255,255,255)
                circle(200,500,50)
                
                fill(255,0,0)
                circle(250,500,50)
                
                
        pop()

//background(capture.get())


            push()
            image(capture,0,0)
            pop()


let step = 10
textAlign(CENTER, CENTER)
//translate(500,500)
        for (var i = 0; i < capture.width; i += step) {
        for (var j = 0; j < capture.height; j += step) {
            let col = capture.get(i, j)
            let val = brightness(col)
        if (val < 50) {
push()
            fill(0)
            textSize(step)

           rect(i, j, step, step) // Dark pixels 
            //text("Mo", i, j)

pop()
        } 
        else {
           // fill(val,155,215)
             rect(i, j, step, step)  //Background pixels
        }
    }    
}
stroke(0)
strokeWeight(20)
// for (i capture.width)
// line(width/2,0,width/2,height)
//fill('green')
// noStroke()
noStroke()
let c = get(mouseX, mouseY)
textSize(24)
text(c, 800, 50)
//fill(0, 255, 0)
let black = color(0, 0, 0, 255)
// console.log(c)
// console.log(black)
if (c[0] === 50 ) {

    fill(0,0,215)

    console.log('Turn Blue')
    }
   // circle(mouseX, mouseY, 10, 10)
   if (c[0] === 255 ) {

    fill(255,0,0)

    console.log('Turn Red')
    }
    if (c[0] === 20 ) {

    fill(0,215,0)

    console.log('Turn Green')
    }
     if (c[0] === 255 && c[1] === 255 ) {

    fill(255,255,255)

    console.log('Turn white')
    }

}

//Police Colors :)))




______________________________________________________

______________________________________________________

______________________________________________________

______________________________________________________

______________________________________________________

______________________________________________________

______________________________________________________




// collision detection
let capture
function setup() {
// body...
let canvas = createCanvas(1200, 1200)
canvas.parent('p5container')
//captureMode(CENTER)
capture = createCapture()
capture.hide()
}
function draw() {

    background(110,0,25)

        //circle(300,900,50)

        push()
                fill(20,255,0)
                circle(100,500,50)
                
                fill(50,0,110)
                circle(150,500,50)
                
                fill(255,255,255)
                circle(200,500,50)
                
                fill(255,0,0)
                circle(250,500,50)
                
                
        pop()

//background(capture.get())


            push()
            image(capture,0,0)
            pop()


let step = 10
textAlign(CENTER, CENTER)
//translate(500,500)
        for (var i = 0; i < capture.width; i += step) {
        for (var j = 0; j < capture.height; j += step) {
            let col = capture.get(i, j)
            let val = brightness(col)
        if (val < 10) {
push()
            fill(0)
            textSize(step)

           rect(i, j, step, step) // Dark pixels 
            //text("Mo", i, j)

pop()
        } 
        else {
           // fill(val,155,215)
             rect(i, j, step, step)  //Background pixels
        }
    }    
}
stroke(0)
strokeWeight(20)
// for (i capture.width)
// line(width/2,0,width/2,height)
//fill('green')
// noStroke()
noStroke()
// let c = get(mouseX, mouseY)

let g = get(100, 455)
textSize(24)
text(g, 800, 40)

let c = get(150, 455)
textSize(24)
text(c, 800, 70)

let b = get(200, 455)
textSize(24)
text(b, 800, 100)

let d = get(250, 455)
textSize(24)
text(d, 800, 130)



//fill(0, 255, 0)
let black = color(0, 0, 0, 255)
// console.log(c)
// console.log(black)
if (c[0] === 50 ) {

    fill(0,0,215)

    console.log('Turn Blue')
    }
   // circle(mouseX, mouseY, 10, 10)
   if (c[0] === 255 ) {

    fill(255,0,0)

    console.log('Turn Red')
    }
    if (c[0] === 20 ) {

    fill(0,215,0)

    console.log('Turn Green')
    }
     if (c[0] === 255 && c[1] === 255 ) {

    fill(0,255,255)

    console.log('Turn white')
    }

}

//Broken 


______________________________________________________

______________________________________________________

______________________________________________________

______________________________________________________

______________________________________________________

______________________________________________________

______________________________________________________


// Color detector by me :))))))

// collision detection
let capture
function setup() {
// body...
let canvas = createCanvas(1200, 1200)
canvas.parent('p5container')
//captureMode(CENTER)
capture = createCapture()
capture.hide()
}
function draw() {

    background(110,0,25)

        //circle(300,900,50)

        push()
                fill(20,255,0)
                circle(100,500,50)
                
                fill(50,0,110)
                circle(150,500,50)
                
                fill(255,255,255)
                circle(200,500,50)
                
                fill(255,0,0)
                circle(250,500,50)
                
                
        pop()

//background(capture.get())


            push()
            image(capture,0,0)
            pop()


//______________


let stepp = 10

for (var p = 0; p < 150; p += stepp) {
        for (var a = 0; a < 300; a += stepp) {
            let coll = capture.get(p, a)
            let vall = brightness(coll)
        if (vall < 40) {
push()
            
            fill(0)
            //fill(val*2,val/4*15,113)
            
            //fill(val*2,val/4*15,113)
            textSize(stepp)

           rect(p, a, stepp, stepp) // Dark pixels 
            //text("Mo", p, a)

pop()
        } 
        else {
           // fill(val,155,215)
            //rect(p, a, stepp, stepp)  //Background pixels
        }
    }    
}





let step = 10
textAlign(CENTER, CENTER)
//translate(500,500)
        for (var i = 150; i < capture.width; i += step) {
        for (var j = 0; j < capture.height; j += step) {
            let col = capture.get(i, j)
            let val = brightness(col)
        if (val < 30) {
push()
            
            fill(0)
            //fill(val*2,val/4*15,113)
            
            //fill(val*2,val/4*15,113)
            textSize(step)

           circle(i, j, step, step) // Dark pixels 
            text("Mo", i, j)

pop()
        } 
        else {
           // fill(val,155,215)
             rect(i, j, step, step)  //Background pixels
        }
    }    
}








//________________
stroke(0)
strokeWeight(20)
// for (i capture.width)
// line(width/2,0,width/2,height)
//fill('green')
// noStroke()
noStroke()
// let c = get(mouseX, mouseY)

// let g = get(100, 455)
// textSize(24)
// text(g, 800, 40)

//let c = get(150, 455)
let c = get(70, 100)
push()
noFill()
stroke(255)
strokeWeight(2)
circle(70,100,80)
pop()
textSize(24)
text(c, 800, 70)
push()
fill(c)
circle(800,150,50)
pop()

// let b = get(200, 455)
// textSize(24)
// text(b, 800, 100)

// let d = get(250, 455)
// textSize(24)
// text(d, 800, 130)



//fill(0, 255, 0)
//let black = color(0, 0, 0, 255)
// console.log(c)
// console.log(black)
// if (c[0] === 50 ) {

//     fill(c)

//     console.log('Turn Blue')
//     }
//    // circle(mouseX, mouseY, 10, 10)
//    // if (c[0] === 255 ) {

//    //  fill(255,0,0)

//    //  console.log('Turn Red')
//    //  }
//    //  if (c[0] === 20 ) {

//    //  fill(0,215,0)

//    //  console.log('Turn Green')
//    //  }
//     //  if (c[0] === 255 && c[1] === 255 ) {

//     // fill(0,255,255)

//     // console.log('Turn white')
//     // }

}





______________________________________________________

______________________________________________________
______________________________________________________
______________________________________________________
______________________________________________________
______________________________________________________
______________________________________________________

// Ver 2



// collision detection
let capture
function setup() {
// body...
let canvas = createCanvas(900, 700)
canvas.parent('p5container')
//captureMode(CENTER)
capture = createCapture()
capture.hide()
}
function draw() {
    background(110,0,25)
    //circle(300,900,50)
            push()
            fill(20,255,0)
            circle(100,500,50)

            fill(50,0,110)
            circle(150,500,50)

            fill(255,255,255)
            circle(200,500,50)

            fill(255,0,0)
            circle(250,500,50)


pop()
//background(capture.get())
        push()
        image(capture,0,0)
        pop()
//______________
let stepp = 7
        for (var p = 0; p < 150; p += stepp) {
        for (var a = 0; a < 300; a += stepp) {
                let coll = capture.get(p, a)
                let vall = brightness(coll)
        if (vall < 40) {
                push()

                fill(0)
                        //fill(val*2,val/4*15,113)

                        //fill(val*2,val/4*15,113)
                        textSize(stepp)
                        //rect(p, a, stepp, stepp) // Dark pixels
                        fill('green')
                        text("Mo", p, a)
                pop()


}

else {
    fill(255)
// fill(val,155,215)
//rect(p, a, stepp, stepp)  //Background pixels


        }
    }
}
let step = 10
textAlign(CENTER, CENTER)
//translate(500,500)
for (var i = 150; i < capture.width; i += step) {
for (var j = 0; j < capture.height; j += step) {


let col = capture.get(i, j)
let val = brightness(col)

if (val < 30) {

            push()

                    fill(255)
                    //fill(val*2,val/4*15,113)

                    //fill(val*2,val/4*15,113)
                    textSize(step)
                    //circle(i, j, step, step) // Dark pixels
                    text("Mo", i, j)
            pop()
}

else {
 fill(0)
//rect(i, j, step, step)  //Background pixels
push()

                    fill(255,0,0)
                    //fill(val*2,val/4*15,113)

                    //fill(val*2,val/4*15,113)
                    textSize(step)
                    //circle(i, j, step, step) // Dark pixels
                    text("Mo", i, j)
            pop()


        }
    }
}
//________________
stroke(0)
strokeWeight(20)
// for (i capture.width)
// line(width/2,0,width/2,height)
//fill('green')
// noStroke()
noStroke()
// let c = get(mouseX, mouseY)
// let g = get(100, 455)
// textSize(24)
// text(g, 800, 40)
//let c = get(150, 455)
let c = get(70, 100)

        push()
                noFill()
                stroke(255)
                strokeWeight(2)
                circle(70,100,80)
        pop()

                textSize(24)
                text(c, 800, 70)

        push()
            
                fill(c)
                circle(800,150,50)

        pop()
// let b = get(200, 455)
// textSize(24)
// text(b, 800, 100)
// let d = get(250, 455)
// textSize(24)
// text(d, 800, 130)
//fill(0, 255, 0)
//let black = color(0, 0, 0, 255)
// console.log(c)
// console.log(black)
// if (c[0] === 50 ) {
//     fill(c)
//     console.log('Turn Blue')
//     }
//    // circle(mouseX, mouseY, 10, 10)
//    // if (c[0] === 255 ) {
//    //  fill(255,0,0)
//    //  console.log('Turn Red')
//    //  }
//    //  if (c[0] === 20 ) {
//    //  fill(0,215,0)
//    //  console.log('Turn Green')
//    //  }
//     //  if (c[0] === 255 && c[1] === 255 ) {
//     // fill(0,255,255)
//     // console.log('Turn white')
//     // }
}

______________________________________________________






<!-- HTML Example -->
<!DOCTYPE html>

<html>

<head>

    <title> Introduction </title>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/p5.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/addons/p5.dom.min.js"></script>

    <link rel="stylesheet" type="text/css" href="../MyStyle.css"> 

</head>

<body>

    <div id="content">

        <h1> MuW201 Tangible Computing </h1>

        <hr>

        <div style="text-align: left;" class="dropdown" >
        <button onclick="myFunction()" class="dropbtn">Projects</button>
        <div id="myDropdown" class="dropdown-content">
          <a href="filter1.html"> filter 1</a>
          <a href="filter2.html"> filter 2</a>
          <a href="filter3.html"> filter 3</a>
          <a href="filter4.html"> filter 4</a>
          <a href="filter5.html"> filter 5</a>
          <!-- <a href="filter6.html"> Project 3</a> -->
        </div>
    
        <h3 class="color" > My amazing Webcam Filter . </h3>

        <br>

        <div id = "p5container"></div>
        
        
        <br>

        <p><a href="sketch2page.html"> Go Home  </a></p>

    </div>

    <script src ="filter1.js"></script>
    
    <!-- <script style="text-align: center;" src ="sketch2.js"></script> -->

<script>
      function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
  </script>

</body>

</html>