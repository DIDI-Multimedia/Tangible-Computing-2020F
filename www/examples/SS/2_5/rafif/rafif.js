let x = 200;
let y = 200;

let fr = 30;

let thoughts = ["i am hungry", "i am stressed out", "who is texting me", "what should i have for lunch", "i am tired", "i am overwhelmed", "i am struggling"]


let firstPart = ["I am", "Who is","She is","He is","We are","They are","You are"]

let secondPart = ["hungry", " late for class", " eye infection, miss"]

let thirdPart = ["feeling"]

let fourthPart = ["in Abu Dhabi", "in Dubai", "in Sharjah", "in university", "at the movies", "in the car", "at the coffee shop", "at home", "at the beach", "in the mall", "in the restaurant", "with her friends", "with his friends", "with your friends"]
let adjectives = ['muddy','happy']
let fonts = ['Helvetica', 'Times New Roman', 'Comic Sans', 'Arial']

// let angle = 0.0;

// let jitter = 0.0;


// let position = ["CENTER", "RIGHT", "LEFT"]


let freeThoughts = []

// var lastPrint;
// var v = 0;

// thoughts.lifespan = 2;

function setup() {

  // img = loadImage('assets/final.png');
  createCanvas(window.innerWidth, window.innerWidth);
  textAlign(CENTER)
  // img = loadImage("assets/final.png");
  // image(img, mouseX, mouseY);
  // stroke(0)
  frameRate(fr);
  background(0);
  console.log(adjectives)
  lifeSpan = 0.2;
  ellipseMode(CENTER);
  // rotate(90);
  // lastPrint = millis () - 3000;
  // fill(255)

}


  var r = 80
  var g = 120
  var b = 255

function draw() {

  // var timeElapsed = millis( - lastPrint;

  //   if (timeElapsed > 3000) {
  //     v++;
  //     console.log(v);
  //     last Print = millis(); 

  background(r,g,b);
  drainBrain()
  // fill(random(255),random(255),random(255));
  stroke(0);
  frameRate(fr);
  fill(255);
  noStroke()

  //   if (second() % 2 === 0) {
  //   jitter = random(-0.1, 0.1);
  // }

  // angle = angle + jitter;
  // let c = cos(angle);
  // translate(width / 6, height / 6);
  // rotate(c);

  ellipse(2500, 2500, 3000, 3000);
  // ellipse(2200,2100,3000,3000);
 
  for (var i = 0; i < freeThoughts.length; i++){
    let tht = freeThoughts[i]
    console.log(tht.lifeSpan)
    fill(0,tht.lifeSpan)
    textSize(tht.Size);
    textFont(tht.Font);
    console.log(tht.Font)
    push()
    translate(tht.x,tht.y)
    rotate(tht.rotate)
    for (var s = 3; s > 1; s--){
      textSize(tht.Size+s);
      fill(255,0,0,tht.lifeSpan)
      text(tht.txt,0,s*10);      
    }

    pop();
    move(tht)

  }      

  }


function mousePressed(){
  console.log('mouse pressed')
  // creates a new thought 

  let tht = {}
  tht.x = width/2 
  tht.y = height/2 
  tht.Size = random(10,150)
  tht.rotate = random(-TWO_PI/4,TWO_PI/4)
  // tht.Align = random(textAlign)
  tht.Font = random(fonts)
  // console.log
  tht.txt = getRandomThought(firstPart) + " " + getRandomThought(thirdPart) + " " + getRandomThought(adjectives) + " " + getRandomThought(fourthPart)  
  tht.dead = random(1,10)
  // tht.lifespan = 2;
  frameRate(fr);
  freeThoughts.push(tht)
  tht.lifeSpan = 255
  // tht.rotate = random(rotate)
  fill(random(255), random(255), random(255))
  r = random(255);
  g = random(255);
  b = random(255);


}

function drainBrain(){

  console.log('brain')
  noStroke()
  fill(255);
  fill(r,g,b);
  frameRate(fr);
  ellipse(width/2,height/2,300,500)
  // ellipse(500,00);
}


function move(tht){

  tht.x += random(-5, 5);
  tht.y += random(-5, 5);

  tht.lifeSpan -= tht.dead
  frameRate(fr);

}

// function mousePressed(){
//   console.log('mouse pressed')
//   // creates a new thought 

//   let tht = {}
//   tht.x = width/2 
//   tht.y = height/2 
//   tht.txt = getRandomThought(firstPart) + " " + getRandomThought(adjectives)
//   // tht.lifespan = 2;
//   frameRate(fr);
//   freeThoughts.push(tht)
//   fill(random(255), random(255), random(255)
//   ellipse();

// }


function getRandomThought(wordList){

  let string =  wordList[Math.floor(random(wordList.length))] // get random thought

  return string 
   frameRate(fr);

}