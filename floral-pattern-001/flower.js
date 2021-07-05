class Flower {
    constructor(posX, posY, petalWidth, petalHeight, petalColor, stamenColor) {
      this.posX = posX;
      this.posY = posY;
      this.petalWidth = petalWidth;
      this.petalHeight = petalHeight
      this.stamenLength = this.petalWidth * .6;
      this.petalColor = petalColor;
      this.stamenColor = stamenColor;
    }
  
    render() {    
      push()
      translate(this.posX, this.posY);
      rotate(45);
      push();
      for (let i = 0; i < 4; i++) {
        fill(this.petalColor);
        rect(this.petalWidth/2,-this.petalHeight/2,this.petalWidth,this.petalHeight,25,25,25,5);

        stroke(this.stamenColor);
        strokeWeight(4);
        line(0,0,this.stamenLength * sin(60),-this.stamenLength * cos(60));
        line(0,0,this.stamenLength * sin(30),-this.stamenLength * cos(30));
        rotate(90);
      }
      pop();
      pop();
    }
  }