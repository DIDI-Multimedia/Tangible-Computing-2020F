  // TenThousandX Assignment: // Add to this code to create a drawing // Note: do not delete anything 


function setup() {

// STep 1
    let canvas = createCanvas(800, 400)
    canvas.parent('p5container');


}
    function draw(){

    background('#000000')




    noFill()
    stroke('red')
    strokeWeight(3)
    rectMode(CENTER)
    rect(width/2,height/2,700,300,30)


    


    let h = hour()
    let m = minute()
    let s = second()

    

    console.log(h + ":"+ m + ":" + s)

    let time = h + ":"+ m + ":" + s

    

    textSize(150)

    textAlign(CENTER,CENTER)

    text (time,width/2,height/2)


}


  