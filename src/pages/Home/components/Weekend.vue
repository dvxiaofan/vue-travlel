<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="item-img" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/d5/abe8a48a6ef8bf.jpg_r_640x214_7c41cc81.jpg',
          title: '武汉必打卡',
          desc: '到武汉感受神奇的热干面之都'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/6d/5afbf529076ef6.jpg_r_640x214_7414b151.jpg',
          title: '三峡人家',
          desc: '感受长江的水三峡的情怀，自古至今，无数骚人墨客浓墨重彩的描绘三峡，赶紧领略三峡的壮美吧！'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1507/e0/4aae49007c8a64.jpg_r_640x214_65a42783.jpg',
          title: '周末出游乐翻天',
          desc: '周末，想去哪儿就去哪儿~'
        },
        {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ce/0dd5b8b5f5fd2a.jpg_r_640x214_929b1bec.jpg',
          title: '玩遍楚河汉街',
          desc: '旧时的租界，现代的新街，无论白天黑夜，听它过去和现在的故事。'
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
.item-img-wrapper
  overflow hidden
  height 0
  padding-bottom 39.9%
  .item-img
    width 100%
.item-info
  padding .1rem
  .item-title
    line-height .44rem
    height .44rem
    font-size .28rem
    color #212121
    ellipsis()
  .item-desc
    color #616161
    font-size .24rem
    line-height .4rem
    margin-bottom .1rem
    ellipsis()
</style>
