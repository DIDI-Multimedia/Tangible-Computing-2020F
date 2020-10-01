//pseudocode

//create canvas
//rectangle
//minutes
//hours
//seconds
//colour
//repeat


function setup() {

    // create canvas
    let canvas = createCanvas(800, 400)
    canvas.parent('p5container');

    // //background
    // background('#000000')

    // //rectangle
    // noFill()
    // stroke('red')
    // strokeWeight(3)
    // rectMode(CENTER)
    // rect(width/2,height/2,700,300,25)

    // //time
    // let h = hour()
    // let m = minute()
    // let s = second()

    // //print , string
    // console.log('hi')

    // console.log(h + ':' +m + ' :' + s)
    // let time = h + ':' +m + ' :' + s

    // //draw numbers
    // //SIZE
    // textSize(96)
    // //color
    // noStroke()
    // fill('red')
    // textAlign(CENTER)
    // text(time,width/2,height/2)

}


function draw(){
  //background
    background('#000000')

    //rectangle
    noFill()
    stroke('red')
    strokeWeight(3)
    rectMode(CENTER)
    rect(width/2,height/2,700,300,25)

    //time
    let h = nf(hour(),2)
    let m = nf(minute(),2)
    let s = nf(second(),2)

    //print , string
    console.log('hi')

    console.log(h + ':' +m + ':' + s)
    let time = h + ':' +m + ':' + s

   //modulo function
   //this makes it blink every 2 seconds
    if( s%2 == 0){
      time = h + ':' + m + ':' + s
    }

    //draw numbers
    //SIZE
    textSize(96)
    //color
    noStroke()
    fill('red')
    textAlign(CENTER,CENTER)
    text(time,width/2,height/2)








}

