<template>
  <div>
    <div class="banner">
      <img src="http://img1.qunarzz.com/sight/p0/1409/15/2cd24bb4ca30169611d8fe0263c3d5e0.jpg_600x330_d126e191.jpg" class="banner-img">
      <div class="banner-info">
        <div class="banner-num">
          <span class="iconfont banner-icon">&#xe691;</span>
          39
        </div>
        <div class="banner-title">腾格里沙漠天鹅湖</div>
      </div>
    </div>
    <!-- <common-gallary></common-gallary> -->
  </div>
</template>

<script>
// import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner'
  // components: {
  //   CommonGallary
  // }
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
