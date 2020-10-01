// // Pseduocode

// 1. create canvas 
// 2. add background 
// 3. draw rectangle 

// 4. get minutes 
// 5. get hours 
// 6. get seconds 

// 4. color
// 7. draw numbers 
// 8. repeat 

function setup() {

    // 1. create canvas
    let canvas = createCanvas(800, 400)
    canvas.parent('p5container');
        // 2. background 


}


function draw(){
    background('#000000')

    // 3. rectangle 
    noFill() 
    stroke('red')
    strokeWeight(3)
    rectMode(CENTER)
    rect(width/2,height/2,700,300,25)

    // // 4. get time 

    let h = nf(hour(),2)
    let m = nf(minute(),2)
    
    let s = nf(second(),2)
    // print, string 
    console.log(h + ':'+ m + ':' + s)
    let time = h + ':'+ m + ':' + s

    if ( s%2 == 0 ){
    	//muduolo function 

    	time = h + ' '+ m + ' ' + s

    }

    textSize(96)
    // color
    noStroke()

    fill ('red')
    textAlign(CENTER, CENTER)
    text(time, width/2, height/2 )

}


