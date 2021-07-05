const FLOWER_SIZE = 140

// layout
const MARGIN = 30
const PADDING = FLOWER_SIZE * 0.4
const GRIDBOX = FLOWER_SIZE + PADDING
const START = (FLOWER_SIZE / 2) + MARGIN

function setup() {
  createCanvas(600, 600);
  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);
  flowers = [];  
  noLoop();
}

function draw() {
  let backgroundColor = color('maroon');
  let foregroundColor = color('white');
  background(backgroundColor);

  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      const posX = (x * GRIDBOX)
      const posY = (y * GRIDBOX)
      flowers.push(new Flower(posX, posY, 60, 60, foregroundColor, backgroundColor))
    }
  }

  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      const posX = START + (x * GRIDBOX)
      const posY = START + (y * GRIDBOX)
      flowers.push(new Flower(posX, posY, 60, 60, foregroundColor, backgroundColor))
    }
  }

  flowers.forEach(flower => {
    flower.render()
  })
}