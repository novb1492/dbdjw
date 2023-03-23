<!-- Please remove this file from your project -->
<template>
  <div id="p5Canvas"> </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  data() {
    return {
      canvas: null,
      num: 0
    }
  },
  async mounted() {
    const { default: P5 } = await import('p5')
    const sketch = (s) => {
      s.setup = () => {
        s.createCanvas(500, 500)
      }
      s.draw = () => {
        if (this.num % 3 == 0)
          s.background(255, 255, 33);
        if (this.num % 4 == 0)
          s.background(51);
        if (this.num % 2 == 0) {
          s.background(200);
        }

        this.num += 1;
      }
    }
    // eslint-disable-next-line no-unused-vars
    this.canvas = new P5(sketch, 'p5Canvas')
  },
}
</script>
