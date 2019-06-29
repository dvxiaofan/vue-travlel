<template>
  <swiper class="img-swiper" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
    <swiper-slide>
      <img
        class="swiper-img"
        src="https://img1.qunarzz.com/vc/13/a7/27/46de32ff8d50b25cc379c2348a.jpg"
        alt
      >
    </swiper-slide>
    <swiper-slide>
      <img class="swiper-img" src="https://imgs.qunarzz.com/ftejia/1809/f1/5237b904291291.jpg" alt>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {}
    };
  },
  name: "HomeSwiper",
  methods: {
    callback() {}
  }
};
</script>

<style lang="stylus" scoped>
.img-swiper {
  .swiper-img {
    width: 100%;
    height: 3rem;
  }
}
</style>
