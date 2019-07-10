<template>
  <div>
    <div class="title-content">
      <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="title-img">
      <span class="title">猜你喜欢</span>
    </div>
    <ul>
      <router-link tag="li"
        class="item border-bottom"
        v-for="item in list"
        :key="item.id"
        :to="'detail/id=' + item.id"
        >
        <img :src="item.imgUrl" alt="item-img" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title-content
  border-top .2rem solid #eee;
  padding .12rem .2rem;
  .title-img
    display: inline-block;
    overflow: hidden;
    width: .3rem;
    height: .3rem;
    padding-bottom .07rem;
  .title
    display: inline-block;
    margin-left: .08rem;
    height: .44rem;
    color: #212121;
    font-size: .32rem;
    line-height: .44rem;
.item
  overflow hidden
  display flex
  height 1.9rem
  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem
  .item-info
    flex 1
    padding .1rem
    min-width 0
    .item-title
      line-height .54rem
      height .54rem
      margin-top .16rem
      font-size .32rem
      color #212121
      ellipsis()
    .item-desc
      color #ccc
      line-height .4rem
      ellipsis()
    .item-btn
      line-height .42rem
      height .42rem
      margin-top .2rem
      background #ff9300
      padding 0 .2rem
      border-radius .06rem
      color #fff
</style>
