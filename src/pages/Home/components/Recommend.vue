<template>
  <div>
    <div class="title">猜你喜欢</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <img :src="item.imgUrl" alt="item-img" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/dc/dc83333aca70040da3.img.jpg_200x200_8fc200de.jpg',
          title: '武汉海昌极地海洋公园',
          desc: '87697条评价'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1504/47/4730a0c01664b63d.water.jpg_200x200_d7f52253.jpg',
          title: '武汉欢乐谷',
          desc: '21459条评论'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201405/27/11a29c646d897af77648bc3d98949107.jpg_200x200_0b6014b8.jpg',
          title: '九峰动物园',
          desc: '21459条评论'
        },
        {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1703/a4/a4357d1a8afc001da3.water.jpg_200x200_872a1b11.jpg',
          title: '武汉东湖磨山',
          desc: '4125条评论'
        },
        {
          id: '005',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/dc/dc83333aca70040da3.img.jpg_200x200_8fc200de.jpg',
          title: '武汉海昌极地海洋公园',
          desc: '87697条评价'
        },
        {
          id: '006',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1504/47/4730a0c01664b63d.water.jpg_200x200_d7f52253.jpg',
          title: '武汉欢乐谷',
          desc: '21459条评论'
        },
        {
          id: '007',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201405/27/11a29c646d897af77648bc3d98949107.jpg_200x200_0b6014b8.jpg',
          title: '九峰动物园',
          desc: '21459条评论'
        },
        {
          id: '008',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1703/a4/a4357d1a8afc001da3.water.jpg_200x200_872a1b11.jpg',
          title: '武汉东湖磨山',
          desc: '4125条评论'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin-top .2rem
  line-height .8rem
  background #eee
  text-indent .2rem
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
