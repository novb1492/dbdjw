export default class sprite {
  constructor(animation, about, s) {
    this.about = about;
    this.animation = animation
    this.s = s;
  }
  frameup() {
    this.about[1]++;
    if (this.about[1] % 5 == 0) {
      this.about[0]++;
      this.about[1] = 0;
    }
    if (this.about[0] == 7) {
      this.about[0] = 0;
    }
  }
  draw(tempxy) {
    this.frameup();
    this.s.translate(tempxy[0], tempxy[1]);
    this.s.rotate(tempxy[2] + (90 * this.s.TWO_PI / 180));
    this.s.imageMode(this.s.CENTER);
    this.s.image(this.animation[this.about[0]], 0, -20, 80, 80);
  }

}