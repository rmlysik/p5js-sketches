const ROWS = 8;
const COLUMNS = 8;
const CELL_SIZE = 40;
const MARGIN = CELL_SIZE * 0.1;
const PADDING = CELL_SIZE * 0.1;
const BOX_SIZE = CELL_SIZE + (PADDING * 2);
const OFFSET = (BOX_SIZE / 2) + MARGIN;
let PALETTE = [];

function setup() {
  let canvasWidth = (MARGIN * 2) + (BOX_SIZE * COLUMNS);
  let canvasHeight = (MARGIN * 2) + (BOX_SIZE * ROWS);
  createCanvas(canvasWidth, canvasHeight);
  PALETTE = [
    color(86, 44, 44), // dark red
    color(242, 84, 45), // orange
    color(245, 223, 187), // tan
    color(14, 149, 148), // medium green
    color(18, 116, 117), // dark green
  ];
  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  for (let x = 0; x < COLUMNS; x++) {
     for (let y = 0; y < ROWS; y++) {
        let posX = OFFSET + (x * BOX_SIZE);
        let posY = OFFSET + (y * BOX_SIZE);
        let topLeftRadius = randomChoice() ? 0 : 20;
        let topRightRadius = randomChoice() ? 0 : 20;
        let bottomLeftRadius = randomChoice() ? 0 : 20;
        let bottomRightRadius = randomChoice() ? 0 : 20;
        let squareColor = getRandomColorFromPalette();
        noStroke();
        fill(squareColor);
        rect(posX, posY, CELL_SIZE, CELL_SIZE, topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius);
    }
  }
}

function getRandomColorFromPalette() {
  return PALETTE[floor(random(0, PALETTE.length))];
}

function randomChoice() {
  let rnd = random(1);
  if (rnd > 0.5) {
    return true;
  } else {
    return false;
  }
}