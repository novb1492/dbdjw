export default class cloud {
  constructor(totalclouds, cloudsbundle, s) {
    this.cloudsize = 1;
    this.totalclouds = totalclouds;
    this.cloudsbundle = cloudsbundle;
    this.s = s;
  }
  returnx() {
    var x = [];
    for (var i = 0; i < this.totalclouds; i++) {
      x[i] = this.s.random(-500, 0);
      //console.log(x[i],"x");
    }
    return x;
  }
  returny() {
    var y = [];
    for (var i = 0; i < this.totalclouds; i++) {
      y[i] = this.s.random(20, 100);
      // console.log(y[i],"y");
    }
    return y;
  }
  returnz() {
    var z = [];
    for (var i = 0; i < this.totalclouds; i++) {
      z[i] = this.s.random(1, 1.5);
      //console.log(z[i],"z");
    }
    return z;
  }
  drawcloud2(cloudsx, cloudsy,cloudssize) {
    console.log("draw");
    for (var ii = 0; ii < this.cloudsbundle; ii++) {
      for (var i = 0; i < this.totalclouds; i++) {
        this.drawcloud(cloudsx[ii][i], cloudsy[ii][i], cloudssize[ii][i]);
      }
    }
  }
  drawcloud(x, y, size) {
    this.s.push();
    this.s.fill('white');
    this.s.stroke('white');
    this.s.translate(x, y);
    this.s.fill(255, 255, 255);
    this.s.noStroke();
    this.s.arc(x, y, 25 * size, 20 * size, this.s.PI + this.s.TWO_PI, this.s.TWO_PI);
    this.s.arc(x + 10, y, 25 * size, 45 * size, this.s.PI + this.s.TWO_PI, this.s.TWO_PI);
    this.s.arc(x + 25, y, 25 * size, 35 * size, this.s.PI + this.s.TWO_PI, this.s.TWO_PI);
    this.s.arc(x + 40, y, 30 * size, 20 * size, this.s.PI + this.s.TWO_PI, this.s.TWO_PI);
    this.s.endShape(this.s.CLOSE);
    this.s.pop();
  }

}