const BLOSSOM_SIZE = 220
const SMALL_BLOSSOM = 40
const MEDIUM_BLOSSOM = 80
const LARGE_BLOSSOM = 140
const NUM_PETALS = 5

// layout
const MARGIN = 35
const PADDING = BLOSSOM_SIZE * 0.4
const GRIDBOX = BLOSSOM_SIZE + PADDING
const START = (BLOSSOM_SIZE / 2) + MARGIN

function setup() {
  createCanvas(900,900);
  angleMode(DEGREES);
  rectMode(CENTER);
  blossoms = [];
  noLoop();
}

function draw() {
  
  let backgroundColor = color('plum');
  let foregroundColor = color('white');
  let petalLength = LARGE_BLOSSOM;
  let initialRotationAngle = 0;
  let stroke = true;
  background(backgroundColor);

  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      const posX = START + (x * GRIDBOX)
      const posY = START + (y * GRIDBOX)
      let sizeRandom = random(1);
      if (sizeRandom > .6) {
        petalLength = LARGE_BLOSSOM;
        stroke = true;
      } else if (sizeRandom > .3) {
        petalLength = MEDIUM_BLOSSOM;
        stroke = randomSelectTwo();
      } else {
        petalLength = SMALL_BLOSSOM;
        stroke = false;
      }
      let rotationRandom = random(1);
      if (rotationRandom > .6) {
        initialRotationAngle = 0;
      } else if (rotationRandom > .3) {
        initialRotationAngle = 18;
      } else {
        initialRotationAngle = 36;
      }
      print('initialRotationAngle:' + initialRotationAngle);
      blossoms.push(new Blossom(posX, posY, initialRotationAngle, petalLength, NUM_PETALS, randomSelectTwo(), stroke, foregroundColor, backgroundColor))
    }
  }

  blossoms.forEach(blossom => {
    blossom.render()
  })
}