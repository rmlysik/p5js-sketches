class CrossSection {
  constructor(x, y, w, h, numLayers, hue) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.numLayers = numLayers;
    this.hue = hue;
    this.layers = [];

    let brightness = 95;

    let x1 = this.x;
    let x2 = this.x + this.w;
    let x3 = x2;
    let x4 = x1;

    let startY1 = this.y;
    let startY2 = this.y;

    let evenDivision = this.h / this.numLayers;

    let minIncrement = evenDivision - (evenDivision * 0.25);
    let maxIncrement = evenDivision + (evenDivision * 0.25);

    for (let i = 0; i < this.numLayers; i++) {
      
      let y1 = startY1;
      let y2 = startY2;
      let y3, y4, yBottom;

      if (i === numLayers - 1)
      {
        y3 = this.y + h;
        y4 = y3;
      }
      else
      {
        if (y1 > y2) {
          yBottom = y1;
        }
        else {
          yBottom = y2;
        }

        y3 = yBottom + random(minIncrement, maxIncrement);
        y4 = yBottom + random(minIncrement, maxIncrement);
      }
      startY1 = y4;
      startY2 = y3;
      colorMode(HSB);
      let hue = this.hue + random(-25, 25);
      let saturation = random(5, 60);
      let layerColor = color(hue, saturation, brightness);
      this.layers.push(new Layer(x1, y1, x2, y2, x3, y3, x4, y4, layerColor));
    }
  }

  render() { 
    this.layers.forEach(layer => {
      layer.render();
    });
  }
}