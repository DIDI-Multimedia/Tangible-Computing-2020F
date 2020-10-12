// TenThousandX Assignment: // Add to this code to create a drawing // Note: do not delete anything 



let img;

function preload() {

  img = loadImage('Templates/covid-19/PNG/bust-mask-1.png');

}

function setup() {

    // do not change anything in setup 
    let canvas = createCanvas(800, 800)
    canvas.parent('p5container');
    image(img, 0, 0)

}

