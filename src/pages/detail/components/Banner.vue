<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img :src="bannerImg" class="banner-img">
      <div class="banner-info">
        <div class="banner-num">
          <span class="iconfont banner-icon">&#xe691;</span>
          {{this.bannerImgs.length}}
        </div>
        <div class="banner-title">{{this.sightName}}</div>
      </div>
    </div>
    <common-gallary
      :imgs="bannerImgs"
      v-show="showGallary"
      @close="handleGallaryClose"
      ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative;
  overflow hidden;
  height 0;
  padding-bottom 55%;
  .banner-img
    width 100%;
  .banner-info
    position absolute;
    left 0;
    right 0;
    bottom 0;
    line-height .6rem;
    padding 0 0 .2rem .2rem;
    background-image linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8));
    color #fff;
    .banner-num
      font-size .24rem;
      line-height .4rem;
      height .4rem;
      width 1.2rem;
      text-align center;
      background rgba(0,0,0, .5);
      border-radius .2rem;
      .banner-icon
        font-size .24rem;
    .banner-title
      font-size .36rem;
      margin-top .1rem;
      ext-shadow: 0 1px 2px rgba(0,0,0, .70);

</style>
