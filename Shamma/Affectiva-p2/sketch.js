console.log('shamma sketch')

var milliseconds =0;
var seconds =0;
var bp;


let capture;

function setup() {
    createCanvas(640, 480);
    capture = createCapture(VIDEO);
    capture.hide();
    capture.size(640, 480);
}

//function preload(){
	//soundFormats('mp3');
//bp=loadSound('Beep.mp3');
//}



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
                    fill('#1919A6');
                    square(sX, sY, step);
                } else
                if (darkness > 0.5) {
                    fill('#1919a6');
                    square(sX, sY, step);
									
									//start and end points to place curser
								
									
									fill(0,255,0);
									ellipse(610,70,50,50);
									
									fill(222, 161, 133);
									ellipse(40,420,50,50);
							
							
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

    milliseconds = millis();
		text(30-int(seconds), width/20, height/4-95);
	if(seconds >= 30){ 
		seconds = 30;
	}
	else{	seconds = milliseconds/1000;}
	
	
	text('start here', width/2-300, height/2+230); 
	text('end here',width/4-(-430), height/4-90);
	
	

    // let blue = color(25, 25, 166)


    if (c[1] === 0){

			
		
			fill('red');
      circle(x,y,r);
			text('GAME OVER', width/2-50, height/2+50); 
			//bp.play();
		}
			
			else if (c[1] === 255){
				
				text('you win!', width/2-50, height/2+50)
			}
	
	
	
    if (second()<1){
		text('times up!', width/2-50, height/2+50)
        

    } 

}


function updateData(data){

	console.log('update data')

	background(34,155,215)

	fill(255)
	let spacing = height/Object.keys(data).length
	textSize(spacing)
	
	let y = spacing

	for (item in data){
		str = item + ': ' + data[item]
		text(str, 10 ,y)

		y+= spacing*2
	
	}

	

	image(capture.get(),width-64,0,128,96)

	  var x = document.getElementById("app");
	  x.style.display = "none"

}	