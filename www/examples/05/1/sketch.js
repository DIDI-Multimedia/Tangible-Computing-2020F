let names = ['Sayjel', 'Waleed', 'Akshat', 'Zaade', 'Mariam', 'Hussien', 'Arnav', 'Agma', 'Mo', 'Fatima', 'Sharma', 'Mariam Lambertt']
let verbs = ['walks', 'feeds', 'pets', 'washes', 'plays with']
let animals = ['cat', 'dog', 'lion', 'fish', 'Eagle', 'quokka', 'horse', 'cat', 'birds', 'horse']
let cols = ['matte white', 'beige', 'beige', 'blue', 'green', 'red', 'purple ']

let sentences = []

// index 

function setup() {


    let canvas = createCanvas(800, 400)
    canvas.parent('p5container')
    background(0)

    for (var i = 0; i < names.length; i++) {

        let sentence = names[i] + " " + random(verbs) + ' their ' + random(animals)
        sentences.push(sentence)

    }

}

function draw() {

    background(255)
    textAlign(CENTER, CENTER)
    textSize(16)


    for (var i = 0; i < sentences.length; i++) {

        fill(i * 25, 255 - i * 50, i * 10)
        let sentence = sentences[i]
        let posX = cos(frameCount / (100 + sentences.length * i)) * width / 4
        let posY = sin(frameCount / (100 * i + sentences.length)) * width / 4
        text(sentences[i], posX + width / 2, posY + height / 2)




    }





}