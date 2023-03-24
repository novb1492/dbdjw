export default class sprite{
  constructor(animation,about,s){
  this.about=about;
  this.animation=animation
  this.s=s;
  }
  frameup()
  {
    this.about[1]++;
    if(this.about[1]%5==0)
    {
      this.about[0]++;
      this.about[1]=0;
    }
    if(this.about[0]==7)
    {
      this.about[0]=0;
    }
  }
  draw(x,y)
  {
    this.frameup();////이미지를 넘겨준다!
    // this.s.translate(x,y);///나중에설명해보자
    this.s.image(this.animation[this.about[0]],0,0,80,80);
  }
  
}