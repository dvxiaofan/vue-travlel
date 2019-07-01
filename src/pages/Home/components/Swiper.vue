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
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/818f6cc784ae6669b74bbbb255414a53.jpg_750x200_66ca5873.jpg'
        },
        {
          id: '0002',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'
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
  padding-bottom 26.15%
  .swiper-img
    width 100%
</style>
