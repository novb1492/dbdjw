export default class Sun {
  constructor(s) {
    this.x;
    this.y;
    this.f;
    this.s;
    this.f2;
    this.s2;
    this.p5 = s;
  }
  returnobjects(nowhour) {
    let array = [];
    let starthour = 0;
    let endhour = 0;
    if (nowhour >= 6 && nowhour <= 8) {
      starthour = 6, endhour = 8;
      this.f = this.p5.displayHeight, this.s = this.p5.displayHeight / 5;
      this.f2 = this.p5.displayWidth, this.s2 = this.p5.displayWidth * 3 / 4;
    }
    else if (nowhour >= 9 && nowhour <= 16) {
      starthour = 9, endhour = 16;
      this.f = this.p5.displayHeight / 5, this.s = this.p5.displayHeight / 5;
      this.f2 = this.p5.displayWidth * 3 / 4, this.s2 = this.p5.displayWidth * 2 / 4;
    }
    else if (nowhour >= 17 && nowhour <= 20) {
      starthour = 17, endhour = 20;
      this.f = this.p5.displayHeight / 5, this.s = this.p5.displayHeight;
      this.f2 = this.p5.displayWidth * 2 / 4, this.s2 = this.p5.displayWidth / 4;
    }
    array[0] = starthour, array[1] = endhour;
    return array;
  }
  draw(nowminuit, totalminuit) {
    this.x = this.p5.map(nowminuit, 0, totalminuit, this.f2, this.s2);
    this.y = this.p5.map(nowminuit, 0, totalminuit, this.f, this.s);
    //console.log(this.x);
    this.drawsun2();
  }
  drawsun2() {
    this.p5.push();
    this.p5.fill(245, 187, 87);
    this.p5.stroke(245, 187, 87);
    this.p5.translate(this.x, this.y);
    this.p5.rotate(this.p5.radians(this.p5.frameCount / 2));
    this.p5.ellipse(0, 0, 60, 60);
    this.p5.line(0, -60, 0, -40);
    this.p5.line(0, 40, 0, 60);
    this.p5.line(-45, -45, -30, -30);
    this.p5.line(45, -45, 30, -30);
    this.p5.line(-60, 0, -40, 0);
    this.p5.line(40, 0, 60, 0);
    this.p5.line(-45, 45, -30, 30);
    this.p5.line(45, 45, 30, 30);
    this.p5.pop();
    this.p5.noFill();
  }
}