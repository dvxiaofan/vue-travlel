<template>
  <div class="hot-list">
    <div class="list-title">
      <!-- <span class="title-icon"> -->
      <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="title-img">
      <!-- </span> -->
      <span class="title">本周热门榜单</span>
    </div>
    <div class="list-item" v-for="(item, index) in list" :key="index">
      <img :src="item.imgUrl" alt="" class="item-img">
      <div class="item-title">{{item.title}}</div>
      <div class="price">
        <span class="price-num">'¥'{{item.price}}起</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHotList',
  data () {
    return {
      list: [
        {
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1609/73/738c9707d753117ba3.img.jpg_250x250_ce922802.jpg',
          title: '贺兰山广宗寺（南寺）',
          price: '70'
        },
        {
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/15/2cd24bb4ca30169611d8fe0263c3d5e0.jpg_250x250_432f8ced.jpg',
          title: '腾格里沙漠天鹅湖',
          price: '35'
        },
        {
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/07/c94ceadc0abc7dbb072ca962851af051.jpg_250x250_3c3caba7.jpg',
          title: '阿拉善通湖草原',
          price: '69'
        },
        {
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/3d/3d1631412590a1aea3.img.png_250x250_8047fda9.png',
          title: '贺兰山福因寺（北寺旅游景区）',
          price: '199'
        },
        {
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1609/73/738c9707d753117ba3.img.jpg_250x250_ce922802.jpg',
          title: '贺兰山广宗寺（南寺）',
          price: '70'
        },
        {
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/15/2cd24bb4ca30169611d8fe0263c3d5e0.jpg_250x250_432f8ced.jpg',
          title: '腾格里沙漠天鹅湖',
          price: '35'
        },
        {
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/07/c94ceadc0abc7dbb072ca962851af051.jpg_250x250_3c3caba7.jpg',
          title: '阿拉善通湖草原',
          price: '69'
        },
        {
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/3d/3d1631412590a1aea3.img.png_250x250_8047fda9.png',
          title: '贺兰山福因寺（北寺旅游景区）',
          price: '199'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.hot-list
  position relative;
  overflow hidden;
  height 0;
  border-top .2rem solid #eee;
  padding-bottom 40%;
  .list-title
    // height .44rem;
    // line-height .44rem;
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
</style>
