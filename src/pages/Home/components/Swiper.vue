<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide  v-for="item in imgUrlList" :key="item.id">
        <img :src="item.imgUrl" class="swiper-img">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      imgUrlList: [
        {
          id: '0001',
          imgUrl: 'https://img1.qunarzz.com/vc/5c/4a/42/31cd9cf831d4e9d8e2c898f1e8.jpg_624x340x92.jpg'
        },
        {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/ftejia/1809/f1/5237b904291291.jpg'
        }
      ]
    }
  },
  name: 'HomeSwiper'
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #fff;
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 53.25%
  .swiper-img
    width 100%
</style>
