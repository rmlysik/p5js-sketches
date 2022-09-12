let trianglePanels = [];

let palettes = [];

palettes[0] = ["#1F1D36", "#3F3351", "#864879", "#E9A6A6"]
palettes[1] = ["#FFFBE3", "#FFA9A9", "#6A425C", "#3F3351"];
palettes[2] = ["#E7E6E1", "#F7F6E7", "#F2A154", "#6A425C"];

function setup() {
  canvas = createCanvas(windowWidth, windowHeight); 
  
  let gridSize = width;

  if (width > height) {
    gridSize = height;
  }

  let numCols = 3;
  let numRows = 1;

  let marginLeft = (width - gridSize) / 2;
  let marginTop = (height - gridSize) / 2;

  let cellWidth = gridSize / numCols;
  let cellHeight = gridSize / numRows;

  let padding = cellHeight * 0.1;

  let horizontalDivisions = 3;

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      let x = marginLeft + (cellWidth * col) + (padding * 0.5);
      let y = marginTop + (cellHeight * row) + (padding * 0.5);
      trianglePanels.push(new TrianglePanel(x, y, cellWidth - padding, cellHeight - padding, horizontalDivisions, palettes[col]));
    }
  }
  
  noLoop();
}

function draw() {
  background("white");
  
  trianglePanels.forEach(trianglePanel => {
    trianglePanel.render();
  });
}