console.log('5_critters.js')

// Week Five - for MuW201 Tangible Computing, 2019
// Sayje Patel 
// DJCLDS
// Date 


let creatures 


let species = [drawSanta,drawPig,drawJabroni,drawYogi,drawAngryStickman,drawMeow,drawHippo]
let names = ['ayesha','noor','bella','mona','rafif','nikhilesh','hoor','ahsan','aditi','hani']

function setup(){

	let canvas = createCanvas(windowWidth/2,windowHeight/2)
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('myContainer');
	creatures = initialize(500)
	// creatures
	console.log(JSON.stringify(creatures,null,4))

}

function draw(){

	background(255,0,255)
	
	for (var i = 0; i< creatures.length; i++){
		// console.log('draw')
		let creature = creatures[i]
		move(creature)
		push()
		// scale(0.5)
		// translate(width/2,height/2)
		creature.drawFace()
		pop()
		// display(creature)

	}

}

function initialize(num){

	// define our creatures
	let creatures = []

	for (var i =0; i < 500;i++){

		let id = Math.floor(random(species.length))
		let nameId = Math.floor(random(names.length))

		creature = {}
		creature.name = names[nameId]
		creature.posX = random(0,width)
		creature.posY = random(0,height)
		creature.rot = random(TWO_PI)
		creature.color = [random(255),random(255),random(255)]
		creature.size = random(10,100)
		creature.drawFace = species[id] 
		creatures.push(creature)


	}

	return creatures 

}

function move(crtr){

	crtr.posX += random(-2,2)
	crtr.posY += random(-2,2)
	crtr.rot += 0.1


}




function sayjelFace(){

	push()

	translate(this.posX,this.posY)
	rotate(this.rot)

	textSize(this.size)
	fill(this.color)

	text(this.name,0,-this.size/2)
	ellipse(0,0,this.size,this.size)

	fill(0)
	ellipse(0,0,this.size/4,this.size/4)
	ellipse(5,-5,this.size/8,this.size/8)
	ellipse(-5,-5,this.size/8,this.size/8)
	line(-5,5,5,5)
	pop()

}



    function drawJabroni(){

    	let c = this

      push()
    
      translate(c.posX,c.posY)
      rotate(c.rot)
      text(c.name,0,-c.size/2-15)
      noStroke()
      // fill(c.color,50)
      fill(c.color[0],c.color[1],c.color[2],10)

      for (var i = c.size;i > 0; i-=5){
        console.log(i)
        ellipse(0,0,i,i)
      }

      fill(0)
      ellipse(c.size/10,-c.size/8,c.size/16,c.size/16)
      ellipse(-c.size/10 ,-c.size/8,c.size/16,c.size/16)
      ellipse(0 ,c.size/10,c.size/8,c.size/8)
      stroke(0,150)
      strokeWeight(5)
      line(c.size/2,-c.size/12,c.size/2+c.size/12,c.size/12)
      line(-c.size/2,-c.size/12,-c.size/2-c.size/12,c.size/12)
      line(c.size/12,c.size/2,c.size/12,c.size*0.6)
      line(-c.size/12,c.size/2,-c.size/12,c.size*0.6)
      pop()


    }




function drawPig() {

  let c = this 

  push()
  translate(c.posX, c.posY)
  noStroke()
  rectMode(CENTER)
  text(c.name, c.size, -c.size)
  fill(c.color)
  //face
  rect(0, 0, c.size, c.size)
  pop()

  //nose
  push()
  rectMode(CENTER)
  translate(c.posX, c.posY + 15)
  strokeWeight(3)
  stroke(240, 180, 230)
  fill(215, 155, 214)
  rect(0, 0, 50, 30)
  pop()

  //nostrils
  push()
  rectMode(CENTER)
  translate(c.posX, c.posY + 15)
  noStroke()
  fill(200, 90, 90)
  rect(-18, 0, c.size / 10, c.size / 10)
  rect(18, 0, c.size / 10, c.size / 10)
  pop()

  //eyes
  push()
  rectMode(CENTER)
  noStroke()
  translate(c.posX, c.posY)
  fill(0)
  rect(-44.75, -6.5, c.size / 10, c.size / 10)
  rect(44.75, -6.5, c.size / 10, c.size / 10)
  fill(255)
  rect(-35, -6.5, c.size / 10, c.size / 10)
  rect(35, -6.5, c.size / 10, c.size / 10)
  pop()


}

    function drawSanta(){

      let c = this
     
      push()
    
      // fill in code here, draw a funny face

      translate(c.posX,c.posY)
      text(c.name, c.size,-c.size)
      
      fill(214,13,13)
       ellipse(c.size-50,c.size+15,c.size*2,c.size*2)

       fill(236,203,138)
       ellipse(c.size-50,c.size-50,c.size,c.size)


       fill(255,220)
        ellipse(c.size-50,c.size/1.85,c.size+1.5,c.size+1.5)


        fill(214,13,13)
        triangle(-c.size/2, -c.size/3.5, c.size/50, -c.size+-2, c.size/2, -c.size/3)  

        fill(255)
        line(-c.size/5, c.size/5, c.size/5, c.size/5)
        line(-c.size/4, -c.size/6.25, -c.size/10-1, -c.size/5)
         line(c.size/4, -c.size/6.25, c.size/10-1, -c.size/5)
         ellipse(c.size-50,c.size-102,c.size/3,c.size/3)


        fill(0)
        ellipse(c.size/6.25,-c.size/16.6,c.size/7,c.size/7)
        ellipse(-c.size/6.25,-c.size/16.6,c.size/7,c.size/7)
         ellipse(c.size-50,c.size+10,c.size/3,c.size/3)
         ellipse(c.size-50,c.size+30,c.size/3,c.size/3)

        


     

      pop()


    }

    function drawAngryStickman(){

    	let c = this
     
      push()
    
      // fill in code here, draw a funny face

      translate(c.posX,c.posY)
      text(c.name, c.size,-c.size)
      fill(c.color)
      ellipse(0,0,c.size,c.size)

fill(0)

      ellipse(10,-10,c.size-40,c.size/16)
      ellipse(-10,-10,c.size/5,c.size/16)

fill(216,95,125)
stroke(0)
strokeWeight(2)
  arc(0, 10, c.size-20, c.size-30, PI, TWO_PI);
  
fill(0)
  strokeWeight(7)
  line(0,120,0,26)
line(1,20,c.size,c.size+10)
line(1,20,-c.size,c.size+10)
line(1,120,-c.size,c.size*3.5)
line(1,120,c.size,c.size*3.5)


      pop()


    }

  function drawYogi(){


    let c = this
     
    push()
    
      // fill in code here, draw a funny face

      translate(c.posX,c.posY)
      text(c.name, c.size,-c.size)
      fill(c.color)

      push()
      translate(-c.size/2,-c.size/2)
      triangle(40,30,30,60,-10,-10)
      pop()

      rect(-50,-50,c.size,c.size)
      fill (0)
      ellipse(15,-20,10,10)
      ellipse(-15,-20,10,10)
      rect(-20,15,40,10)
      triangle(-5,5,5,5,0,10)

      fill(255)
      rect(-20,15,5,5)
      rect(-15,15,5,5)
      rect(-10,15,5,5)
      rect(-5,15,5,5)
      rect(0,15,5,5)
      rect(5,15,5,5)
      rect(10,15,5,5)
      rect(15,15,5,5)
      rect(-20,20,5,5)
      rect(-15,20,5,5)
      rect(-10,20,5,5)
      rect(-5,20,5,5)
      rect(0,20,5,5)
      rect(5,20,5,5)
      rect(10,20,5,5)
      rect(15,20,5,5)
      noStroke()
      ellipse(17,-22,3,3)
      ellipse(-13,-22,3,3)
      ellipse(15,-18,5,5)
      ellipse(-15,-18,5,5)




      pop()

    }



    function drawMeow(){
    	let c = this
     
      push()
    
  

      translate(c.posX,c.posY)
      text(c.name, c.size,-c.size)
      fill(155)
      stroke(0)
      strokeWeight(0.1)
      rect(0,0,c.size,c.size)
      
      fill(255)
      rect(2,c.size/3,c.size/3,c.size/6)
      rect(30,c.size/3,c.size/3,c.size/6)
      
         fill(0)
      rect(2,c.size/3,c.size/6,c.size/6)
      rect(30,c.size/3,c.size/6,c.size/6)
      
       fill(255)
      noStroke()
   ellipse(5,c.size/2.5,c.size/10,c.size/10)
  ellipse(33,c.size/2.5,c.size/10,c.size/10)

         fill(random(255),random(255),random(255))
      strokeWeight(20)
  triangle(2,1,20,3,-40,8)
      triangle(2,1,-20,3,40,8)
      triangle(20,15,10,10,22,-20)
      pop()


    }


    function drawHippo(){

    	let c = this
     
      push()
    
      // fill in code here, draw a funny face

      translate(c.posX,c.posY)
      text(c.name, c.size,-c.size)
      fill(c.color)
      ellipse(10,20,c.size-10*2,c.size*3)
       ellipse(-30,10,c.size*2,c.size/10)
       ellipse(1,1,c.size-9,c.size*2)
       ellipse(40,29,c.size,c.size/2)

      pop()


    }