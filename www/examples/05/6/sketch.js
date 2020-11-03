console.log('shamma sketch')

let timer = 0 

let capture;

function setup() {
    createCanvas(640, 480);
    capture = createCapture(VIDEO);
    capture.hide();
    capture.size(640, 480);
}

function draw() {

    background(0);
    noStroke();
    fill(177);


    if (capture.width > 0) {
        let img = capture.get(0, 0, capture.width, capture.height);
        img.loadPixels();

        const step = 50;

        for (var y = step; y < img.height; y += step) {
            for (var x = step; x < img.width; x += step) {
                var i = y * img.width + (img.width - x - 1);


                const darkness = ((0, 0, 255) - img.pixels[i * 4]) / (0, 0, 255);

                let sX = x * width / img.width;
                let sY = y * height / img.height;
                if (darkness > 0.80) {
                    fill('#1919a6');
                    square(sX, sY, step);
                } else
                if (darkness > 0.5) {
                    fill('#faed27');
                    square(sX, sY, step);
                }
            }
        }


    checkCollision(mouseX, mouseY,step) // calling a new function 

    }

}


function checkCollision(x, y,r) {



    stroke(0)
    strokeWeight(20)
    noStroke()

    let c = get(x, y)

    text(timer, 50, 50)

    // let blue = color(25, 25, 166)


    if (c[0] === 0 && c[1] === 0 && c[2] === 0) {

      fill('red')
      circle(x,y,r)
        timer++


    } else { 

      timer=0
    }

}
