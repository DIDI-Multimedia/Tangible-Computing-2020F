let con = [];
function setup() {
let canvas = createCanvas(windowWidth/3, windowWidth/3)
  canvas.parent('sketch-holder');

  for (let i = 0; i < 25; i++) {
    con.push(new Jitter());
  }
}

function draw() {
  background(255);
   for (let i = 5; i < con.length; i++) {
  con[i].move();
  con[i].display();
}
}


class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(15, 20);
    this.speed = 2;
  }

  move() {
    this.x += random(-this.speed, +this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    for (var angle=1; angle < TWO_PI; angle+= TWO_PI/con){
      push()
    translate(150,10)
    rotate(angle)
    fill(random(255),random(255),random(255))
    noStroke()
    ellipse(this.x, this.y, this.diameter, this.diameter);
    rect(this.y, this.x, this.diameter, this.diameter);
      pop()
    } 
  }
}