let crossSections = [];

function setup() {
  canvas = createCanvas(800, 800);
  
  let gridSize = width;

  if (width > height) {
    gridSize = height;
  }

  let numCols = 3;
  let numRows = 3;

  let marginLeft = (width - gridSize) / 2;
  let marginTop = (height - gridSize) / 2;

  let cellWidth = gridSize / numCols;
  let cellHeight = gridSize / numRows;

  let padding = cellHeight * 0.1;

  let hue = random(0, 360);

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      let numLayers = floor(random(2, 6));
      let x = marginLeft + (cellWidth * col) + (padding * 0.5);
      let y = marginTop + (cellHeight * row) + (padding * 0.5);
      crossSections.push(new CrossSection(x, y, cellWidth - padding, cellHeight - padding, numLayers, hue));
    }
  }
  
  noLoop();
}

function draw() {
  background("white");
  
  crossSections.forEach(crossSection => {
    crossSection.render();
  });
}