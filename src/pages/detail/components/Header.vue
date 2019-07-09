<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe667;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link tag="div" to="/">
        <div class="iconfont header-fixed-back">&#xe667;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      this.showAbs = false
      // 拿到滚动到顶部的距离
      const top = document.documentElement.scrollTop
      // 动态设置元素的透明度
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
      } else {
        this.showAbs = true
      }
    }
  },
  // 页面加载后被触发
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 页面即将被隐藏触发
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
  position absolute;
  top .2rem;
  left .2rem;
  width .8rem;
  height .8rem;
  line-height .8rem;
  border-radius .4rem;
  text-align center;
  background rgba(0,0,0, .8);
  .header-abs-back
    color #fff;
    font-size .4rem;
.header-fixed
  position fixed;
  top 0;
  left 0;
  right 0;
  height $headerH;
  line-height $headerH;
  text-align center;
  font-size .32rem;
  color #fff;
  background $bgColor;
  .header-fixed-back
    position absolute;
    top 0;
    left 0;
    width .64rem;
    text-align center;
    font-size .4rem;
</style>
