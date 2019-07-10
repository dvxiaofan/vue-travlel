<template>
  <div class="hot-list">
    <div class="list-title">
      <!-- <span class="title-icon"> -->
      <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="title-img">
      <!-- </span> -->
      <span class="title">本周热门榜单</span>
    </div>
    <div class="item-content" >
      <div class="item" v-for="(item, index) in list" :key="index">
        <img :src="item.imgUrl" alt="" class="item-img">
        <div class="item-title">{{item.title}}</div>
        <div class="price">
          <span class="price-num">¥{{item.price}}</span>
          起
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  name: 'HomeHotList'
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.hot-list
  position relative;
  overflow hidden;
  height 0;
  border-top .2rem solid #eee;
  padding-bottom 50%;
  .list-title
    padding-top .2rem;
    margin-bottom .2rem;
    .title-img
      display inline-block;
      width .3rem;
      height .3rem;
      margin-left .2rem;
      margin-right .1rem;
      vertical-align top;
    .title
      height .44rem
      line-height .44rem;
      color #212121;
      font-size .32rem;
  .item-content
    padding 0 .24rem;
    overflow-x scroll;
    white-space nowrap;
    padding-bottom 40%;
    .item:not(:first-child)
      margin-left .12rem;
    .item
      position relative;
      display inline-block;
      width 2rem;
      padding 0 0 .2rem;
      .item-img
        width 100%;
      .item-title
        margin-top: .12rem;
        color: #212121;
        font-size: .24rem;
        line-height: .32rem;
        text-align: center;
        ellipsis();
      .price
        color: #616161;
        font-size: .24rem;
        line-height: .36rem;
        text-align: center;
        .price-num
          color #ff8300;
</style>
