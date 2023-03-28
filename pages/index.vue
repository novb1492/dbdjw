<template>
  <div>
    <div class="swiper mySwiper" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <Tutorial />
        </div>
        <div class="swiper-slide">
          <write />
        </div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min';
import 'swiper/swiper-bundle.min.css';
import write from './write.vue';
export default {
  name: 'IndexPage',
  asyncData({ isDev, route, store, env, params, query, req, res, redirect, error }) {
    return { title: "하루하루" };
  },
  components: { write },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'og:description',
          content: 'Users Pages1234',
        },
      ],
    }
  },
  mounted() {
    this.$nextTick(() => {
      new Swiper(this.$refs.swiper, {
        // spaceBetween: 200,    // 슬라이드 사이 여백
        slidesPerView: 1,
        // centeredSlides: true,
        // autoplay: {     //자동슬라이드 (false-비활성화)
        //   delay: 2500, // 시간 설정
        //   disableOnInteraction: false, // false-스와이프 후 자동 재생
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    });

  },
}
</script>
