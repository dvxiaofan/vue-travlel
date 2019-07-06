<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe667;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe615;</span>
      输入城市景点/游玩主题
    </div>
    <router-link tag="div" class="header-right" to="/city">
      {{this.city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header
    display flex
    height $headerH
    line-height $headerH
    background $bgColor
    color #fff
    .header-left
      width .64rem
      float left
      .back-icon
        text-align center
        font-size .4rem
    .header-input
      flex 1
      background #fff
      color #ccc
      border-radius .1rem
      margin-top .12rem
      height .64rem
      line-height .64rem
      margin-left .2rem
      padding-left .2rem
    .header-right
      float right
      min-width 1.04rem
      padding: 0 .1rem
      text-align center
      .arrow-icon
        font-size .24rem
        margin-left -.04rem

</style>
