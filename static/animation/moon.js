export default class Moon {
  constructor(ss) {
    this.moonsizex = 200;
    this.moonsizey = 200;
    this.x;
    this.y;
    this.f;
    this.s;
    this.f2;
    this.s2;
    this.p5 = ss;
  }
  returnobjects(nowhour) {
    let array = [];
    let starthour=0;
    let endhour=0;
    if (nowhour >= 19 && nowhour <= 20)////////////////밤
    {
      starthour = 19, endhour = 20;
      this.f = 0, this.s = this.p5.displayHeight / 5;
      this.f2 = this.p5.displayWidth, this.s2 = this.p5.displayWidth * 4 / 5;
    }
    else if (nowhour >= 21 || nowhour <= 3)////////////새벽
    {
      starthour = 21, endhour = 23;
      this.f = this.p5.displayHeight / 5, this.s = this.p5.displayHeight / 5;
      this.f2 = this.p5.displayWidth * 4 / 5, this.s2 = this.p5.displayWidth * 4 / 5;
      if (nowhour <= 3)////////////////////////////새벽
      {
        starthour = 0, endhour = 3;
        this.f = this.p5.displayHeight / 5, this.s = this.p5.displayHeight / 5;
        this.f2 = this.p5.displayWidth * 4 / 5, this.s2 = this.p5.displayWidth * 4 / 5;
      }
    }
    else if (nowhour >= 4 && nowhour <= 6)/////////////동틀무렵
    {
      starthour = 4, endhour = 6;
      this.f = this.p5.displayHeight * 4 / 5, this.s = this.p5.displayHeight;
      this.f2 = this.p5.displayWidth * 4 / 5, this.s2 = this.p5.displayWidth / 5;
    }
    array[0] = starthour, array[1] = endhour;
    return array;

  }
  draw(nowminuit, totalminuit) {
    console.log(this.x);
    this.x = this.p5.map(nowminuit, 0, totalminuit, this.f2, this.s2);
    this.y = this.p5.map(nowminuit, 0, totalminuit, this.f, this.s);
    this.drawmoon2();
  }
  drawmoon2() {
    this.p5.push();
    this.p5.translate(this.x, this.y);
    this.p5.fill(255, 240, 280);
    this.p5.noStroke();
    this.p5.circle(0, 0, this.moonsizex, this.moonsizey);
    this.p5.pop();
  }
}