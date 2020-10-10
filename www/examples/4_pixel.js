/*

Gradient Array

*/
let capture 

let r = 255
let g = 255 
let b = 255

function setup(){

  let canvas = createCanvas(640,480);
  canvas.parent('myContainer')
  capture = createCapture(VIDEO)
  noStroke()

}
function draw(){

  // background(capture)

    let numRow = 100
  let numCol = 100
  
  let boxW = width/numRow
  let boxH = height/numCol
  
  let rStep = 255/numRow
  let bStep = 255/numCol
      
  for (var i = 0; i < numRow; i++){
    
    r -= rStep
  
  
    for (var j = 0; j < numCol; j++){
      
        b -=bStep
      
      push()
      let xPos = i/numRow*width
      let yPos = j/numCol*height
      
      let col = capture.get(xPos,yPos)
      // let col = 255
      
      if (j%2 == 0){
        if ( i%2 == 0){

          translate(-5*sin(millis()/2000),-5*cos(millis()/2000))
          col = [r,g,b]
        }
      }
      
      if (i%2 != 0){
        if ( j%2 != 0){
          col = [r,g,b]
        }
      }
      
      if (i%3 == 0){
        if ( j%3 == 0){

          translate(10*sin(millis()/1000),10*cos(millis()/1000))
          col = [b,r,g]
        }
      }

      fill(col)
      translate(xPos, yPos)
      rect(0,0,boxW,boxH)

      pop()
    
    }
    
    b = 255
  
  }

}


// function setup() {
  
//   let canvas = createCanvas(500, 500)

//   canvas.parent = 'myContainer'
//   noStroke()
  
//   let numRow = 50
//   let numCol = 50
  
//   let boxW = width/numRow
//   let boxH = height/numCol
  
//   let rStep = 255/numRow
//   let bStep = 255/numCol
      
//   for (var i = 0; i < numRow; i++){
    
//     r -= rStep
  
  
//     for (var j = 0; j < numCol; j++){
      
//         b -=bStep
      
//       let xPos = i/numRow*width
//       let yPos = j/numCol*height
      
//       let col = 255
      
//       if (j%2 == 0){
//         if ( i%2 == 0){
//           col = [r,g,b]
//         }
//       }
      
//       if (i%2 != 0){
//         if ( j%2 != 0){
//           col = [r,g,b]
//         }
//       }
      
//       if (i%3 == 0){
//         if ( j%3 == 0){
//           col = [b,r,g]
//         }
//       }

//       fill(col)
//       rect(xPos,yPos,boxW,boxH)

      
    
//     }
    
//     b = 255
  
//   }
  
// }

