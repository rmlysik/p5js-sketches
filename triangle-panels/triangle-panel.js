class TrianglePanel {
  constructor(x, y, w, h, horizontalDivisions, palette) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.horizontalDivisions = horizontalDivisions;
    this.palette = palette;

    // We know how wide the panel is and how many horizontal divisions there are.
    // We need to calculate how many vertical divisions there are in the panel
    // by finding the hypotenuse of the triangle given that we know the angle
    // is 60 degrees and the opposite side is the width of the panel divided
    // by the number of horizontal divisions.

    angleMode(DEGREES);

    this.divisionWidth = this.w / this.horizontalDivisions;
    this.triangleSideLength = (this.divisionWidth / 2) / sin(60);
    this.verticalDivisions = floor(this.h / this.triangleSideLength);
  }

  render() {
    for (let i = 0; i < this.horizontalDivisions; i++) {
      for (let j = 0; j < this.verticalDivisions; j++) {        
        this.drawTopLeft(i, j);
        this.drawTopRight(i, j);

        // Don't draw the bottom two triangles if they will extend beyond the height of the panel
        if ((this.y + (j * this.triangleSideLength) + (this.triangleSideLength / 2)) <= this.h) {
          this.drawBottomLeft(i, j);
          this.drawBottomRight(i, j);
        }
      }
    }
  }

  drawTopLeft(i, j) {
    let color = getRandomColor(this.palette);
    let x1, y1, x2, y2, x3, y3;
    fill(color);
    stroke(color);
    x1 = this.x + (i * this.divisionWidth);
    y1 = this.y + ((this.triangleSideLength / 2) + (j * this.triangleSideLength));
    x2 = this.x + ((this.divisionWidth / 2) + (i * this.divisionWidth));
    y2 = this.y + (j * this.triangleSideLength);
    x3 = x2;
    y3 = this.y + ((j + 1) * this.triangleSideLength);
    triangle(x1, y1, x2, y2, x3, y3);
  }

  drawTopRight(i, j) {
    let color = getRandomColor(this.palette);
    let x1, y1, x2, y2, x3, y3;
    fill(color);
    stroke(color);
    x1 = this.x + (i * this.divisionWidth) + (this.divisionWidth / 2);
    y1 = this.y + (j * this.triangleSideLength);
    x2 = x1;
    y2 = this.y + ((j + 1) * this.triangleSideLength);    
    x3 = this.x + ((i + 1) * this.divisionWidth);
    y3 = this.y + (this.triangleSideLength / 2) + (j * this.triangleSideLength);
    triangle(x1, y1, x2, y2, x3, y3);
  }

  drawBottomLeft(i, j) {
    let color = getRandomColor(this.palette);
    let x1, y1, x2, y2, x3, y3;
    fill(color);
    stroke(color);
    x1 = this.x + (i * this.divisionWidth);
    y1 = this.y + (j * this.triangleSideLength) + (this.triangleSideLength / 2);
    x2 = x1;
    y2 = this.y + ((j + 1) * this.triangleSideLength) + (this.triangleSideLength / 2);    
    x3 = this.x + (i * this.divisionWidth) + (this.divisionWidth / 2);
    y3 = this.y + ((j + 1) * this.triangleSideLength);
    triangle(x1, y1, x2, y2, x3, y3);
  }

  drawBottomRight(i, j) {
    let color = getRandomColor(this.palette);
    let x1, y1, x2, y2, x3, y3;
    fill(color);
    stroke(color);
    x1 = this.x + (i * this.divisionWidth) + (this.divisionWidth / 2);
    y1 = this.y + ((j + 1) * this.triangleSideLength);
    x2 = this.x + ((i + 1) * this.divisionWidth);
    y2 = this.y + (j * this.triangleSideLength) + (this.triangleSideLength / 2);
    x3 = x2;
    y3 = this.y + ((j + 1) * this.triangleSideLength) + (this.triangleSideLength / 2);
    triangle(x1, y1, x2, y2, x3, y3);
  }
}