export default class point {
  constructor(totalpoints, pointbundle, s) {
    this.totalpoints = totalpoints
    this.pointsbundle = pointbundle
    this.s = s;
  }
  returnx(beforepointx) {
    let x = [-this.s.displayWidth, -this.s.displayWidth * 3 / 4, -this.s.displayWidth * 2 / 4, -this.s.displayWidth / 4, beforepointx];
    if (x.length == this.totalpoints) {
      return x;
    }
    else {
      console.log('pointclass수정해pointxarray');
    }
  }
  returny() {
    let y = [];
    let siny = this.s.map(this.s.sin(this.s.PI / 2), -1, 1, 500, this.s.displayHeight - (this.s.displayHeight - this.s.windowHeight) - 50);
    let siny2 = this.s.map(this.s.sin(this.s.PI), 1, -1, 500, this.s.displayHeight - (this.s.displayHeight - this.s.windowHeight) - 50);
    y = [siny2, siny, siny2, siny, siny2];
    if (y.length == this.totalpoints) {
      return y;
    }
    else {
      console.log('pointclass수정해pointyarray');
    }
  }
  drawpoint(pointx, pointy) {
    noFill();
    for (var ii = 0; ii < this.pointbundle; ii++) {
      for (var i = 0; i < this.totalpoints; i++) {
        this.s.circle(pointx[ii][i], pointy[ii][i], 50, 50);
      }
    }
  }
}

