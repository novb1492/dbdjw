<!-- Please remove this file from your project -->
<template>
  <div>
  <!-- <script src="animation/check.js"></script>
    <script src="animation/cloud.js"></script>
    <script src="animation/hill.js"></script>
    <script src="animation/moon.js"></script>
    <script src="animation/point.js"></script>
    <script src="animation/sky.js"></script>
    <script src="animation/sprite.js"></script>
    <script src="animation/star.js"></script>
    <script src="animation/sun.js"></script>
    <script src="animation/p5.js"></script>
              <div id="canvas"></div> -->
    <div id="p5Canvas"></div>
  </div>
</template>

<script>
import j from '../static/animation/an/sheeppos.json';
import Sprite from '../static/animation/sprite.js';
import Point from '../static/animation/point.js';
export default {
  name: 'NuxtTutorial',
  data() {
    return {
      img: `https://eleven-fifty.s3.ap-northeast-2.amazonaws.com/sheep.png`,
      animation: [],
      startframe: 0,
      framspeed: 10,
      num: 0
    }
  },
  async mounted() {
    const { default: P5 } = await import('p5')
    let animation = [];
    let frames = null;
    let about = [];
    let sheep = null;
    let spritedata = null;
    let spritesheet = null;
    let totalpoints = 5;
    let points = null;
    let pointsx = []
    let pointsy = [];
    let pointbundle=2;
    const sketch = (s) => {
      s.preload = () => {
        spritedata = j;
        spritesheet = s.loadImage('https://eleven-fifty.s3.ap-northeast-2.amazonaws.com/sheep.png');
      }
      s.setup = () => {
        s.createCanvas(s.displayWidth, s.windowHeight);
        points = new Point(totalpoints,pointbundle,s);
        pointsx[0] = [0, s.displayWidth / 4, s.displayWidth * 2 / 4, s.displayWidth * 3 / 4, s.displayWidth];//초기배열
        if (pointsx[0].length == totalpoints) {
          pointsy[0] = points.returny();
        }
        else {
          console.log('pointsx초기배열셋팅 고쳐');
        }
        frames = spritedata.frames;
        for (var i = 0; i < frames.length; i++) {
          var pos = frames[i].position;
          var img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
          animation.push(img);
          about = [0, 10];
        }
        sheep = new Sprite(animation, about, s);
      }
      s.draw = () => {
        s.background('gray');
        sheep.draw(10, 10);
      }
    }
    // eslint-disable-next-line no-unused-vars
    this.canvas = new P5(sketch, 'p5Canvas')
  },
}
</script>
