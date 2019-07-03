<template>
  <div class="header">
    城市选择
    <router-link
      tag="div"
      class="iconfont city-back-icon"
      to="/"
    >
      &#xe667;
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  position relative
  overflow hidden
  height $headerH
  line-height $headerH
  text-align center
  font-size .32rem
  color #fff
  background $bgColor
  .city-back-icon
    position absolute
    top 0
    left 0
    width .64rem
    text-align center
    font-size .4rem
</style>
