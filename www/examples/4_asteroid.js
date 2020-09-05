// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

let balls = []
let core 
// let radius 
// let ball2;
// let ball3;
// let ball4;
let y = 30 
let r = 0
function setup(){

	let canvas = createCanvas(windowWidth/3,windowWidth/4)
	canvas.parent('myContainer');
	background(255)
  noStroke()
  j = random()
  k =0
  let numBalls = random(25,100)
  
   core = {x:width/2,y:height/2,radius:windowHeight/4,velocity:1}

  for (var i = 0; i < numBalls; i++){
    let newBall = getBall(i)
    balls.push(newBall) // adds new ball to the array
  }
  // stroke(255)
  // frameRate(50)
  // ball1 = getBall() // you can use a function to create the ball object and initialize it with random values 
  // ball2 = getBall()
  // ball3 = getBall()
  // ball4 = getBall()


}

let i = 0
function draw(){


  background(255)
  stroke(0,50)
  strokeWeight(10)

  // console.log(core)
  // noFill()
  fill(255,0,0)
  ellipse(core.x,core.y,core.radius,core.radius)

  let max = windowWidth/3- core.radius/2

  // console.log(max,core.x)


  if (core.x > max){
    core.velocity = -1
  } else if (core.x < core.radius/2){
    core.velocity = 1
  }

  core.x += core.velocity
  core.y = sin(r)*(height-core.radius)+core.radius
  console.log(core.y,r)

  r = r + 0.02

  // i += 0.01
  // k += 0.02
  // ball1.move();
  // ball1.display();
  // ball2.move();
  // ball2.display();
  // ball3.move();
  // ball3.display();
  // ball4.move();
  // ball4.display();

  // stroke(255)

  for (var i = 0; i < balls.length; i++){

    let ball = balls[i]
    ball.collide(balls)
    ball.move()
    ball.display()

  }

  balls.sort((a, b) => (a.x > b.x) ? 1 : -1)
  // stroke(25/5)
  for (var i = 0; i < balls.length; i+=100){
    let row = []
    for (var j= 0; j < 100; j++){

      let item = i+j

      row.push(balls[item])

    }

    row.sort((a, b) => (a.y > b.y) ? 1 : -1)
    // console.log('row', row.length)

    for (var k =0; k < row.length-1; k++){
        let a = row[k]
        let b = row[k+1]
        // line(a.x,a.y,b.x,b.y)  
      }

  }

}


function getBall(id){

  let ball ={

    id:id,
    size : random(3,15),
    x: width/2+random(-100,100), // random position width of div
    y: height/2+random(-100,100), // random position height of div
    speedX:random(-1,1),
    speedY:random(-1,1),
    color:[random(255),random(255),random(255)], // this is a way of giving a random colour

    move : function(){
      //code here
          // this.size *= 1.05
      this.x += this.speedX // 'this' means the variables associate with this specific ball objec
      this.y += this.speedY // 'this' means the variables associate with this specific ball object

      // console.log(core.x,core.y)
      if (dist(this.x,this.y,core.x,core.y) > core.radius/2){
        // console.log('collide!')
        this.speedX *= -1
         this.speedY *= -1
         // this.size *= 0.99
         // this.move()
         // balls.push(getBall(balls.length)) // // adds new ball to the array
      }
      if (this.y > height || this.y < 0) {

        // this.speedX *=-1; 
        this.speedY *=-1; 
                // this.size *=0.99
                // this.move()
         // balls.push(getBall(balls.length)) // adds new ball to the array
       // this.size *= 0.99
      }
     
     if (this.x > width || this.x < 0) {

        this.speedX *=-1; 
        // this.size *=0.99
        this.move()
         // balls.push(getBall(balls.length)) // adds new ball to the array
               // this.size *= 0.99
        // this.speedY *=-1; 

      }
      
    },

    collide: function(balls){

      for (var i = 0; i < balls.length; i++){

        if (i != this.id) { // ball cant collide with itself
          let other = balls[i]
          
          if (dist(this.x,this.y,other.x,other.y) < this.size/2 + other.size/2){

            this.speedX *= -.99 
            other.speedX *= -1.01
            this.speedY *= -.99
            other.speedY *= -1.01
            other.move()
            // if (other.size < 25){
                          // other.size *= 1.01
// 
            // }
            // this.size *=0.99


          }

        }

      }

    
    },

    display : function(){

      //more code
      noStroke()
      fill(this.color)
      ellipse(this.x, this.y, this.size, this.size);

    }

  }

  return ball 

}
