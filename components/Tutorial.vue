<!-- Please remove this file from your project -->
<template>
    <div id="p5Canvas"></div>
</template>

<script>
import j from '../static/animation/an/sheeppos.json';
import Sprite from '../static/animation/sprite.js';
import Point from '../static/animation/point.js';
import Hill from '../static/animation/hill.js';
import Cloud from '../static/animation/cloud.js';
import Star from '../static/animation/star.js';
import Sky from '../static/animation/sky.js';
import Sun from '../static/animation/sun.js';
import Moon from '../static/animation/moon.js';
import { twodmakearray } from '../static/jsLib';
export default {
  name: 'NuxtTutorial',
  data() {
    return {
      img: `https://eleven-fifty.s3.ap-northeast-2.amazonaws.com/sheep.png`,
      animation: [],
      startframe: 0,
      framspeed: 10,
      num: 0,
      //point objects
      points: null,
      pointbundle: 2,
      pointsx: [],
      pointsy: [],
      pointsw: 0,
      totalpoints: 5,
      //hill objects
      hills: null,
      hillsw: 1,
      hillsspeed: 0,
      //sheep objects
      sheep: null,
      spritedata: null,
      spritesheet: null,
      sheepspeed: 0,
      sheepx: [],
      sheepysw: 0,
      n: null,
      sheeppos: [],
      px: [],
      py: [],
      //cloud objects
      clouds: null,
      cloudsbundle: 3,
      cloudsw: 1,
      totalclouds: 8,
      cloudsx: [],
      cloudsy: [],
      cloudssize: [],
      //stars objects
      stars: null,
      totalstars: 8,
      starsw: 1,
      starsbundle: 2,
      starsx: [],
      starsy: [],
      nowhour: 0,
      position: null,
      //skycolor object
      sky: null,
      //sun object
      sun: null,
      //moon objet
      moon: null,
      //time function and objects
      totalminuit: 0,
      nowminuit: 0,
      starthour: 0,
      endhour: 0,
      t: null
    }
  },
  async mounted() {
    const { default: P5 } = await import('p5');
    let animation = [];
    let frames = null;
    let about = [];
    const sketch = (s) => {
      s.preload = () => {
        this.spritedata = j;
        this.spritesheet = s.loadImage(this.img);
      }
      s.setup = () => {
        s.createCanvas(s.displayWidth, s.windowHeight);
        ////프레임설정
        let framerate = 60;
        s.frameRate(framerate);
        ////현재시간까지 진행사항에 따른 양x좌표만들기
        let totaldayhour = 24 - 6;////하루총 시간
        let totalmin = totaldayhour * 60;
        let nowmin = (s.hour() - 6) * 60 + s.minute();///최초접속시간
        let percent = nowmin / totalmin;////////현재까지 진행률 분으로 계산
        percent = percent.toFixed(3);
        let speed = s.displayWidth / 4 / (totaldayhour / 4 * 60) / 60 / framerate;///4.5시간에 한줄씩
        this.sheepx = s.displayWidth - s.displayWidth * percent;////////////현재좌표 저장
        //양속도및 언덕속도 설정
        this.hillsspeed = 1;
        speed = speed.toFixed(5);
        this.sheepspeed = parseFloat(speed);//문자열->실수
        ////초기설정확인용출력
        console.log(percent, "percent");
        console.log(speed, "sppeed");
        console.log(this.hillsspeed, "hillspeed");
        console.log(this.sheepspeed, "sheepspeed");
        console.log(this.sheepx, "startsheepx");
        //각객체별2차원배열생성해주기
        this.pointsx = twodmakearray(this.pointbundle, this.totalpoints);
        this.pointsy = twodmakearray(this.pointbundle, this.totalpoints);
        this.cloudsx = twodmakearray(this.cloudsbundle, this.totalclouds);
        this.cloudsy = twodmakearray(this.cloudsbundle, this.totalclouds);
        this.cloudssize = twodmakearray(this.cloudsbundle, this.totalclouds);
        this.starsx = twodmakearray(this.starsbundle, this.totalstars);
        this.starsy = twodmakearray(this.starsbundle, this.totalstars);
        //make sky
        this.sky = new Sky(s);
        //make sun
        this.sun = new Sun(s);
        //make mooon
        this.moon = new Moon(s);
        //make cloud
        this.clouds = new Cloud(this.totalclouds, this.cloudsbundle, s);
        //make stars
        this.stars = new Star(this.totalstars, this.starsbundle, s);
        //make points
        this.points = new Point(this.totalpoints, this.pointbundle, s);
        this.pointsx[0] = [0, s.displayWidth / 4, s.displayWidth * 2 / 4, s.displayWidth * 3 / 4, s.displayWidth];//초기배열
        if (this.pointsx[0].length == this.totalpoints) {
          this.pointsy[0] = this.points.returny();
        }
        else {
          console.log('pointsx초기배열셋팅 고쳐');
        }
        //make hill
        let totalsteps = 480;
        this.hills = new Hill(this.totalpoints, totalsteps, this.pointbundle, s);
        //make sheep
        frames = this.spritedata.frames;
        for (let i = 0; i < frames.length; i++) {
          let pos = frames[i].position;
          let img = this.spritesheet.get(pos.x, pos.y, pos.w, pos.h);
          animation.push(img);
          about = [0, 10];
        }
        this.sheep = new Sprite(animation, about, s);
        this.t = {
          skyobjects:  (nowhour, c)=> {
            let catcharray = [];
            catcharray = c.returnobjects(nowhour);
            this.makenowtotalminuit(nowhour, catcharray[0], catcharray[1],s);
            // console.log(this.nowminuit);
            c.draw(this.nowminuit, this.totalminuit);
          }
        }
        this.position = {
          returnxyz: function (sw, xarray, yarray, zarray, c) {
            switch (sw) {
              case 1:
                xarray[0] = c.returnx();
                yarray[0] = c.returny();
                if (zarray != null) {
                  zarray[0] = c.returnz();
                }
                //console.log('starsw1');   
                break;
              case 2:
                xarray[1] = c.returnx();
                yarray[1] = c.returny();
                if (zarray != null) {
                  zarray[1] = c.returnz();
                }
                // console.log('starsw2');   
                break;
              default:
                break;
            }
          }
        }
      }
      s.draw = () => {
        let nowhour = s.hour();
        //draw sky
        this.choiceskycolor(nowhour);
        //draw sun
        if (nowhour >= 6 && nowhour <= 19) {
          this.t.skyobjects(nowhour, this.sun);
        }
        if (nowhour >= 20 || nowhour <= 6) {
          this.t.skyobjects(nowhour, this.moon);
        }
        //draw cloud
        if (nowhour >= 6 && nowhour <= 19) {
          this.position.returnxyz(this.cloudsw, this.cloudsx, this.cloudsy, this.cloudssize, this.clouds);
          this.cloudsw = 0;
          this.clouds.drawcloud2(this.cloudsx, this.cloudsy,this.cloudssize);
          this.movesystem(this.cloudsbundle, this.totalclouds, this.cloudsx, 1);
          this.cloudsw = this.swsystem(this.cloudsw, this.cloudsx[0], this.cloudsx[1], 350, 350);
        }
        //draw  stars
        else if (nowhour >= 20 || nowhour <= 4) {
          this.position.returnxyz(this.starsw, this.starsx, this.starsy, null, this.stars);
          this.starsw = 0;
          this.stars.drawstar2(this.starsx, this.starsy);
          this.movesystem(this.starsbundle, this.totalstars, this.starsx, 1);
          this.starsw = this.swsystem(this.starsw, this.starsx[0], this.starsx[1], 350, 350);
        }
        //draw points and hills
        this.switchpointsxy();
        this.movesystem(this.pointbundle, this.totalpoints, this.pointsx, this.hillsspeed);
        this.pointsw = this.swsystem(this.pointsw, this.pointsx[0], this.pointsx[1], this.hillsspeed * 2, this.hillsspeed * 2);
        this.hills.drawhills(this.pointsx, this.pointsy);
        //draw sheep
        this.sheepxyz();
        this.sheep.draw(this.sheeppos);
        this.sheepx -= this.sheepspeed;
      }
    }
    // eslint-disable-next-line no-unused-lets
    this.canvas = new P5(sketch, 'p5Canvas')
  },
  methods: {
    ///pointfunction
    switchpointsxy() {
      let beforepointsx;
      switch (this.pointsw) {
        case 1:
          beforepointsx = this.returnmin(this.pointsx[1]);
          this.pointsx[0] = this.points.returnx(beforepointsx);
          this.pointsy[0] = this.points.returny();
          // console.log('point1');
          break;
        case 2:
          beforepointsx = this.returnmin(this.pointsx[0]);
          this.pointsx[1] = this.points.returnx(beforepointsx);
          this.pointsy[1] = this.points.returny();
          // console.log('poinposition');
          break;
        default:
          break;
      }
      this.pointsw = 0;
    },
    swsystem(swnum, xarray, xarray2, target1, target2) {
      if (Math.floor(this.returnmin(xarray)) == target1) {
        swnum = 2;
      }
      if (Math.floor(this.returnmin(xarray2)) == target2) {
        swnum = 1;
      }
      return swnum;
    },
    movesystem(objectbundle, totalcounts, xarray, speed) {
      for (let ii = 0; ii < objectbundle; ii++) {
        for (let i = 0; i < totalcounts; i++) {
          xarray[ii][i] += speed;
        }
      }
    },
    returnmin(array) {
      return Math.min.apply(null, array);
    },
    sheepxyz() {
      if (this.sheeppos == "next") {
        this.sheepysw = 1;
      }
      else if (this.sheeppos == "reset") {
        this.sheepysw = 0;
      }
      if (this.sheepysw == 0) {
        this.px = this.pointsx[0], this.py = this.pointsy[0];
      }
      else if (this.sheepysw == 1) {
        this.px = this.pointsx[1], this.py = this.pointsy[1];
      }
      this.sheeppos = this.hills.gety2(this.px, this.py, this.sheepx, this.sheepysw);
    },
    returntotalminuit(start, end) {
      return (end - start) * 60;
    },
    makenowtotalminuit(nowhour, starthour, endhour,s) {
      this.totalminuit = this.returntotalminuit(starthour, endhour);
      if (nowhour - starthour > 1)/// 한시간 이하시 초과되는 현상때문에 조건을 나눔
      {
        this.nowminuit = (nowhour - starthour) * 60 + s.minute();
      }
      else {
        this.nowminuit = s.minute();
      }
    },
    choiceskycolor(nowhour) {
      this.t.skyobjects(nowhour, this.sky);
    }

  }
}
</script>
