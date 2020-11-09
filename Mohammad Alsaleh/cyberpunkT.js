let font; 
let vertici = []; 
let dimFont = 100;
let xz = 0;
let yz = 2000;
let xz2 = 0;
let yz2 = 1000;
let xz3 = 0;
let yz3 = 1000;
const testo = "Cyberpunk";


function preload() {
  font = loadFont('Cyberpunk.ttf'); 
}

function setup() {
  createCanvas(800, 600);

  let parametri = {
    sampleFactor: 0.4,
    simplifyThreshold: 0
  };

  let punti = font.textToPoints(testo, 95, 272, dimFont, parametri);
  for (let i = 0; i < punti.length; ++i) { 
    let punto = punti[i];
    vertici.push(createVector(punto.x, punto.y));
  }
}

function draw() {
  
  trasformati_r = textNoise(xz);
  trasformati_g = textNoise(xz2);
  trasformati_b = textNoise(xz3);

  blendMode(BLEND);
  background(0);
  noStroke();
  blendMode(ADD);

  for (let i = 0; i < trasformati_r.length; ++i) { 

    fill(0, 255, 0);
    circle(trasformati_r[i].x + 24, trasformati_r[i].y + 11, 7);
    fill(0, 0, 255);
    circle(trasformati_g[i].x + 35, trasformati_g[i].y + 5, 7);
    fill(255, 0, 0);
    circle(trasformati_b[i].x + 22, trasformati_b[i].y + 4, 7);
  }
    xz += 2;
    yz += 2;
    xz2 += 2.25;
    yz2 += 2.25;
    xz3 += 2.5;
    yz3 += 2.5;
}

function textNoise(xz) {
  
  let trasformati = []; 
  
  for (let i = 0; i < vertici.length; ++i) { 
    let vertice = vertici[i].copy();
    
     let tempo = (frameCount + vertice.mag() + xz) / 50;
    vertice.y += map(noise(tempo),-1, 1, -50, 60);
    vertice.x += map(noise(tempo), -1, 1, -50, 30);
    trasformati[i] = vertice;
  }
  return trasformati;
}