class Cell {
  constructor(x, y, w, h, hue) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  render() { 
    let color = getRandomColor(backgroundPalette);
    fill(color);
    stroke(color);

    rect(this.x, this.y, this.w, this.h);

    let horizontalOrientation = randomSelectTwo();

    let hasLargeCircle = randomSelectTwo();

    if (hasLargeCircle) {
      let chance = random(1);
      
      if (chance > 0.3) {
        this.drawSemiCircle(horizontalOrientation);      
      }
      else {
        this.drawLargeCircle();
      }
    }


    let hasSmallCircle = randomSelectTwo();

    if (hasSmallCircle) {
      this.drawSmallCircle(horizontalOrientation);      
    } 
  }

  drawSmallCircle(horizontalOrientation) {
    let color = getRandomColor(foregroundPalette);
    fill(color);
    stroke(color);

    if (horizontalOrientation) {
      let left = randomSelectTwo();

      if (left) {
        let centerX = this.x + (this.w * 0.25);
        let centerY = this.y + (this.h * 0.5);
        let diameter = this.w * 0.45;
        ellipse(centerX, centerY, diameter);
      }
      else {
        let centerX = this.x + (this.w * 0.75);
        let centerY = this.y + (this.h * 0.5);
        let diameter = this.w * 0.45;
        ellipse(centerX, centerY, diameter);
      }
    }
    else {
      let top = randomSelectTwo();

      if (top) {
        let centerX = this.x + (this.w * 0.5);
        let centerY = this.y + (this.h * 0.25);
        let diameter = this.w * 0.45;
        ellipse(centerX, centerY, diameter);
      }
      else {
        let centerX = this.x + (this.w * 0.5);
        let centerY = this.y + (this.h * 0.75);
        let diameter = this.w * 0.45;
        ellipse(centerX, centerY, diameter);
      }
    }
  }
  
  drawSemiCircle(horizontalOrientation) {    
    let color = getRandomColor(foregroundPalette);
    fill(color);
    stroke(color);
    
    let centerX = this.x + (this.w * 0.5);
    let centerY = this.y + (this.h * 0.5);
    let diameter = this.w * 0.98;

    if (horizontalOrientation) {
      let left = randomSelectTwo();

      if (left) {
        arc(centerX, centerY, diameter, diameter, HALF_PI, PI + HALF_PI, CHORD);
      }
      else {
        arc(centerX, centerY, diameter, diameter, PI + HALF_PI, HALF_PI, CHORD);
      }
    }
    else {
      let top = randomSelectTwo();

      if (top) {
        arc(centerX, centerY, diameter, diameter, PI, 0, CHORD);
      }
      else {
        arc(centerX, centerY, diameter, diameter, 0, PI, CHORD);
      }
    }
  }

  drawLargeCircle() {    
    let color = getRandomColor(foregroundPalette);
    fill(color);
    stroke(color);
    
    let centerX = this.x + (this.w * 0.5);
    let centerY = this.y + (this.h * 0.5);
    let diameter = this.w * 0.98;

    ellipse(centerX, centerY, diameter);
  }
}