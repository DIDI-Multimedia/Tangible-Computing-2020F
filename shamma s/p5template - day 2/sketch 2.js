function setup() {

    // 1. create canvas
    let canvas = createCanvas(800, 450)
    // canvas.parent('p5container');
        // 2. background 


}


function draw(){
    background('#031926')

  
    // 3. rectangle 
    noFill()
        rectMode(CENTER)
    fill ('#9dbebbff')
    rect(width/2,height/2,700,400,25)
    
 


 


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
    fill ('#468189ff')
    textAlign(CENTER, CENTER)
    text(time, width/2, height/2 )



}



/* CSS HEX 
--rich-black-fogra-29: #031926ff;
--metallic-seaweed: #468189ff;
--green-sheen: #77aca2ff;
--opal: #9dbebbff;
--champagne: #f4e9cdff;

font-family: 'Dawning of a New Day', cursive;

*/