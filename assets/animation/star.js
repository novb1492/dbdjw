export default class star {
  constructor(totalstars, starsbundle, s) {
    this.radius1 = 7.5;
    this.radius2 = 15;
    this.npoints = 5;
    this.totalstars = totalstars;
    this.starsbundle = starsbundle;
    this.s = s;
  }
  returnx() {
    let x = [];
    for (let i = 0; i < this.totalstars; i++) {
      x[i] = this.s.random(-500, 0);
    }
    return x;
  }
  returny() {
    let y = [];
    for (let i = 0; i < this.totalstars; i++) {
      y[i] = this.s.random(0, 100);
    }
    return y;
  }
  drawstar2(starx, stary) {
    for (let ii = 0; ii < this.starsbundle; ii++) {
      for (let i = 0; i < this.totalstars; i++) {
        this.drawstar(starx[ii][i], stary[ii][i]);
      }
    }
  }
  drawstar(x, y) {
    this.s.push();
    this.s.fill('yellow');
    this.s.stroke('yellow');
    this.s.translate(x, y);
    let angle = this.s.TWO_PI / this.npoints;
    let halfAngle = angle / 2.0;
    this.s.beginShape();
    for (let a = 0; a < this.s.TWO_PI; a += angle) {
      let sx = x + this.s.cos(a) * this.radius2;
      let sy = y + this.s.sin(a) * this.radius2;
      this.s.vertex(sx, sy);
      sx = x + this.s.cos(a + halfAngle) * this.radius1;
      sy = y + this.s.sin(a + halfAngle) * this.radius1;
      this.s.vertex(sx, sy);
    }
    this.s.endShape(this.s.CLOSE);
    this.s.pop();
  }

}