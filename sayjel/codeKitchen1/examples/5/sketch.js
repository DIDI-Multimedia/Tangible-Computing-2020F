//  Description: A generative art drawing tool with several patterns of
//  choice. Press 'c', delete, or backspace to clear the screen. 
//  Press numbers, or buttons, 1 through to 5 to change the 
//  brush stroke pattern.

var eyes
var currentTool = 1 // Set the default tool to be the first pattern
var history = []   // Define the history for pattern3 

// Define the variables for the buttons
var patt1Over = false; // By default the mouse is not over the button
var patt1X, patt1Y; // Position of the button
var patt1Size = 40; // The size of the button

var patt2Over = false;
var patt2X, patt2Y;
var patt2Size = 40;

var patt3Over = false;
var patt3X, patt3Y;
var patt3Size = 40;

var patt4Over = false;
var patt4X, patt4Y;
var patt4Size = 40;

var patt5Over = false;
var patt5X, patt5Y;
var patt5Size = 40;

var clearOver = false;
var clearX, clearY;
var clearSize = 40;


function setup() {


  createCanvas(1000, 800);
  background(255);
  smooth();
  // history  = new ArrayList();  
  history = []
 
  // Set the positions of the buttons
  patt1X = patt1Size;
  patt1Y = patt1Size/2;
  patt2X = patt2Size+50;
  patt2Y = patt2Size/2;
  patt3X = patt3Size+100;
  patt3Y = patt3Size/2;
  patt4X = patt4Size+150;
  patt4Y = patt4Size/2; 
  patt5X = patt5Size+200;
  patt5Y = patt5Size/2;   
  clearX = clearSize+250;
  clearY = clearSize/2;    
}

function draw() {
  update(mouseX, mouseY);
  
  // set the colour of button 
  if (patt1Over) {
    fill(color(138,43,226)); // Highlight if mouse is over button
  } else {
    fill(color(0));  // Standard
  }
  // draw the button
  stroke(255);
  rect(patt1X, patt1Y, patt1Size, patt1Size);  
  fill(255);
  text("1", patt1X+10, patt1Y+20);  
  
  if (patt2Over) {
    fill(color(255,0,255)); // Highlight
  } else {
    fill(color(0));  // Standard
  }
  stroke(255);
  rect(patt2X, patt2Y, patt2Size, patt2Size);
  fill(255);
  text("2", patt2X+10, patt2Y+20);  
 
  if (patt3Over) {
    fill(color(0, 255, 0)); // Highlight
  } else {
    fill(color(0));  // Standard
  }
  stroke(255);
  rect(patt3X, patt3Y, patt3Size, patt3Size); 
  fill(255);
  text("3", patt3X+10, patt3Y+20);  

  if (patt4Over) {
    fill(color(0, 0, 255)); // Highlight
  } else {
    fill(color(0));  // Standard
  }
  stroke(255);
  rect(patt4X, patt4Y, patt4Size, patt4Size);   
  fill(255);
  text("4", patt4X+10, patt4Y+20);  
  
  if (patt5Over) {
    fill(color(0, 255, 255)); // Highlight
  } else {
    fill(color(0));  // Standard
  }
  stroke(255);
  rect(patt5X, patt5Y, patt5Size, patt5Size);   
  fill(255);
  text("5", patt5X+10, patt5Y+20);    

  if (clearOver) {
    fill(color(51)); // Highlight
  } else {
    fill(color(0));  // Standard
  }
  stroke(255);
  rect(clearX, clearY, clearSize, clearSize); 
  fill(255);
  text("C", clearX+10, clearY+20);
  
  if (mousePressed) {
    switch(currentTool) {      
    case 1:      
      pattern1(mouseX, mouseY, 5, 18, color(204, 102, 0), color(0, 102, 153));
      break;
    case 2:      
      pattern2();
      break;      
    case 3:
      pattern3(10);
      break;    
    case 4:
      pattern4();
      break;  
    case 5:
      pattern5();
      break;              
    }
  }
}

/*
  Functions to switch the drawing tool
 */
function keyPressed() {
  switch(key){
    case '1':
      currentTool = 1;
      break;
    case '2':
      currentTool = 2;
      break;
    case '3':
      history  = new ArrayList();  
      currentTool = 3;
      break; 
    case '4':
      currentTool = 4;
      break;
    case '5':
      currentTool = 5;
      break;        
    case 'c':
    case DELETE:
    case BACKSPACE:
      background(0);    // clear the screen
      history  = new ArrayList();  // reset history array
      break;       
  }   
}

/* 
 Drawing tools
 */
// A recursive pattern that draws a spray of circles mirrored across the
// Y-axis. 
function pattern1(x, y, r, num, fromC,  toC) {  
  var erA = lerpColor(fromC, toC, .12); // get the inbetween colour
  noStroke();
  fill(fromC, 80);
  ellipse(x, y, r, r); 
  stroke(fromC); 
  ellipse(width-x, y, r, r);  // draw the mirror of the ellipse

  if (num > 0) {
  
    let newY = y + sin(random(0, TWO_PI)) * 12.0;    
    // recursive call
    pattern1(x+(num/3), newY, random(r/2, r+num/5), num-1, erA, toC);
  }
}

// pattern2 draws a rainbow web. Code inspired by Mr Doob's project harmony.
function pattern2() {
  var extra = 3;
  // Randomise the colours during each frame
  stroke(random(0,255), random(0,255), random(0,255));
  strokeWeight(0.2);
  line(mouseX, mouseY, pmouseX, pmouseY);
  line(width-mouseX, mouseY, width-pmouseX, mouseY); // Mirror

  for(var i = 0; i < history.size(); i++){
    let p = createVector(history.get(i))
    
    // Draw a line from the current mouse povar to 
    // the historical povar if the distance is less
    // than 50
    if(dist(mouseX, mouseY, p.x, p.y) < 50){
      line(mouseX, mouseY, p.x + extra, p.y + extra);
    } 
    // repeat for the mirror line
    if(dist(width-mouseX, mouseY, p.x, p.y) < 50){
      line(width-mouseX, mouseY, p.x + extra, p.y + extra);
    }      
  }
  
  // // Add the current povar to the history
  // history.add(new PVector(mouseX, mouseY));
  // history.add(new PVector(width-mouseX, mouseY));
}

// pattern3
function pattern3(offset) {
  strokeWeight(0.5);
  for (var i = 0; i < 5; i++) {
    // Random colours for each time
    stroke(random(0,255), random(0,255), random(0,255));
    // Draw a line of various lengths at the mouse povar  
    p = random(mouseX, mouseX+offset);                                  
    q = random(mouseY, mouseY+offset);
    r = random(pmouseX, pmouseX+offset);
    s = random(pmouseY, pmouseY+offset);
    
    line(p, q, r, s);
    //mirror
    line(width-p, q, width-r, s);
                                                              
    offset = offset+10;
  }
}

// pattern4 
function pattern4(){
  noStroke();
  fill(random(0,255), random(0,255), random(0,255),10);
  // alters the size
  let widthDistance = abs(width/2 - mouseX);
  ellipse(mouseX, mouseY, widthDistance/2, widthDistance/2);  
  //Mirror
  ellipse(width-mouseX, mouseY, widthDistance/2, widthDistance/2);      
 }

// pattern 5 -inspired by Mr Doob's project harmony.
function pattern5(){
  eyes = loadImage
  // Randomise the colours during each frame
  stroke(255);
  line(mouseX, mouseY, pmouseX, pmouseY);

  for(var i = 0; i < history.size(); i++){
    let p = createVector(history.get(i))
    let d = dist(mouseX, mouseY, p.x, p.y);
    // Adjust the stroke weight according to the distance
    strokeWeight(1/d);
    
    // Draw a line from the current mouse povar to 
    // the historical povar if the distance is less
    // than 25
    if(d < 25){
     if(random(10) < 5) // Skip some lines randomly
        line(mouseX, mouseY, p.x + 2, p.y + 2);
    } 
  }
  
  // Add the current povar to the history
  history.add(new PVector(mouseX, mouseY));
  strokeWeight(0.2);
}

// buttons
function update(x, y) {
  patt1Over = overPattern(patt1X, patt1Y, patt1Size, patt1Size);  
  patt2Over = overPattern(patt2X, patt2Y, patt2Size, patt2Size);
  patt3Over = overPattern(patt3X, patt3Y, patt3Size, patt3Size);
  patt4Over = overPattern(patt4X, patt4Y, patt4Size, patt4Size);
  patt5Over = overPattern(patt5X, patt5Y, patt5Size, patt5Size);
  clearOver = overPattern(clearX, clearY, clearSize, clearSize);
}

// Switch the tool according to the button press
function mousePressed() {
  if (patt1Over) {
    currentTool = 1;
  }else if (patt2Over) {
    currentTool = 2;
  }else if (patt3Over) {
    currentTool = 3;
  }else if (patt4Over) {
    currentTool = 4;
  } else if (patt5Over) {
    currentTool = 5;  
  } else if (clearOver) {
      background(0);    // clear the screen
  }  
}

// Function to check if the mouse click is within the boundaries of (button)
function overPattern( x, y, width, height)  {
  if (mouseX >= x && mouseX <= x+width && 
      mouseY >= y && mouseY <= y+height) {
    return true;
  } else {
    return false;
  }
}


function keyPressed() {
  if (keyCode === BACKSPACE) {
    saveFile('img.jpg')
  } 
}


//REFERENCE
// http://www.mrdoob.com/projects/harmony/
