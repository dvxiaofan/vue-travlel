<template>
  <swiper class="home-swiper" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
    <swiper-slide>
      <img class="img-swiper" src="https://imgs.qunarzz.com/ftejia/1809/f1/5237b904291291.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img class="img-swiper" src="https://img1.qunarzz.com/vc/5c/4a/42/31cd9cf831d4e9d8e2c898f1e8.jpg_624x340x92.jpg" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {}
    }
  },
  name: 'HomeSwiper',
  methods: {
    callback () {}
  }
}
</script>

<style lang="stylus" scoped>
.home-swiper
  .img-swiper
    width 100%;
    height 3rem;
</style>
