console.log('solvingsol.js')

// Sayjel Vijay Patel, September 1, 2019 
// Github: @djclds
// "Sol Lewitt Drips"

let w;
let drips = []

function setup(){

    const canvasDiv = document.getElementById('INTRO');
    createCanvas(canvasDiv.offsetWidth, screen.height).parent('INTRO')
    noStroke()
    w = new Walker();

}

function draw(){

  w.step();
  w.display();

}

class Walker {

  constructor() {

      fill(0)

      this.col = [[255,0,0],[255,255,0],[0,0,255]]

      this.arr = []
      this.arrPrev = null
      this.count = 0
      this.iy = 0
      this.x = 0
      this.y = 0
      this.tx = 0;
      this.ty = 10000; // Hvis ty også starter på 0 vil x og y alltid få samme verdi
      this.range = 200
      this.color = [0,0,0]

    }

    step() {
      
      this.x ++
      this.ny = map(noise(this.ty), 0, 1, 0, this.range);


      if (this.arrPrev){

        let val = this.arrPrev[this.count] + this.ny
        this.arr.push(val)
        // console.log(this.arrPrev[this.count],this.ny,val)

      } else {

        this.arr.push(this.ny)

      }


      const v = this.arr[this.count] 

      this.y = this.iy + v

      this.ty += 0.02;


      this.count++

      if (this.x > width){

        console.log('x greather than width')
        this.x = 0;
        this.iy += 3
        this.y = this.iy 
        // fill(random(255),random(255),random(255))
        this.count = 0 
        this.arrPrev = [...this.arr]
        this.arr = []
        this.range = 25

        this.color = this.col.shift()

        fill(this.color[0],this.color[1],this.color[2])
        this.col.push(this.color)

      }


      if (random()>0.99){
      
        let x = this.x
        let y = this.y
        let r = 5 
        drips.push([x,y,r,...this.color])
        if (random()>0.5){
          drips.shift(drips.length*random()*Math.floor(),1)
        }
      
      }


    }

    display() {


              fill(this.color)
      ellipse(this.x, this.y,3, 3);
      drips.forEach(arr=>{
        arr[1] = arr[1] + 0.25
        arr[0] = arr[0]+(mouseX-arr[0])*0.00001
        arr[3] = arr[3] - 1 
        fill(arr[3],arr[4],arr[5])
        ellipse(arr[0],arr[1],arr[2])

      })

      fill(this.color)

    }

  }




