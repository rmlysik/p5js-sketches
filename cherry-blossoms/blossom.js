class Blossom {
  constructor(posX, posY, initialRotationAngle, petalLength, numPetals, fill, stroke, foregroundColor, backgroundColor) {
    this.posX = posX;
    this.posY = posY;
    this.initialRotationAngle = initialRotationAngle;
    this.petalLength = petalLength;
    this.numPetals = numPetals;
    this.angle = 360 / this.numPetals;
    this.fill = fill;
    this.stroke = stroke;
    this.foregroundColor = foregroundColor;
    this.backgroundColor = backgroundColor;
  }

  render() {    
    strokeWeight(5);

    push();
    translate(this.posX, this.posY);

    rotate(this.initialRotationAngle);

    if (this.fill == true) {  

      fill(this.foregroundColor);
      noStroke();

      for (let i = 0; i < this.numPetals; i++) {
        beginShape();
        vertex(.14 * this.petalLength, -this.petalLength);
        quadraticVertex(.6 * this.petalLength, -.4 * this.petalLength, 0, 0);
        quadraticVertex(-.6 * this.petalLength, -.4 * this.petalLength, -.14 * this.petalLength, -this.petalLength);
        quadraticVertex(0, -.85 * this.petalLength, .14 * this.petalLength, -this.petalLength);
        
        endShape(CLOSE);
        rotate(this.angle);
      }
      
      if (this.stroke == true) {        
        stroke(this.backgroundColor);
        noFill();
        
        for (let i = 0; i < this.numPetals; i++) {
          beginShape();
          vertex(.14 * this.petalLength, -this.petalLength);
          quadraticVertex(.6 * this.petalLength, -.4 * this.petalLength, 0, 0);
          quadraticVertex(-.6 * this.petalLength, -.4 * this.petalLength, -.14 * this.petalLength, -this.petalLength);
          quadraticVertex(0, -.85 * this.petalLength, .14 * this.petalLength, -this.petalLength);
          endShape(CLOSE);
          rotate(this.angle);
        }
      } else {
        fill(this.backgroundColor);
        noStroke();

        for (let i = 0; i < this.numPetals; i++) {
          beginShape();
          vertex(.1 * this.petalLength, -.5 * this.petalLength);
          quadraticVertex(.2 * this.petalLength, -.2 * this.petalLength, 0, 0);
          quadraticVertex(-.2 * this.petalLength, -.2 * this.petalLength, -.1 * this.petalLength, -.5 * this.petalLength);
          quadraticVertex(0, -.35 * this.petalLength, .1 * this.petalLength, -.5 * this.petalLength);
          
          endShape(CLOSE);
          rotate(this.angle);
        }
      }
    } else {
      
      noFill();
      stroke(this.foregroundColor);

      for (let i = 0; i < this.numPetals; i++) {
        beginShape();
        vertex(.14 * this.petalLength, -this.petalLength);
        quadraticVertex(.6 * this.petalLength, -.4 * this.petalLength, 0, 0);
        quadraticVertex(-.6 * this.petalLength, -.4 * this.petalLength, -.14 * this.petalLength, -this.petalLength);
        quadraticVertex(0, -.85 * this.petalLength, .14 * this.petalLength, -this.petalLength);
        endShape(CLOSE);
        rotate(this.angle);
      }
    }


    pop();
  }
}