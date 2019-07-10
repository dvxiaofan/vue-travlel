<template>
  <div class="main-page">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-hot-list></home-hot-list>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import HomeHotList from './components/HotList'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      lastCity: '',
      swiperList: [],
      recommendList: [],
      weekendList: [],
      iconList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeHotList,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeInfo () {
      axios.get('https://www.easy-mock.com/mock/5ca56f0706e65a2e94712962/api/index?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      let resData = res.data
      this.swiperList = resData.swiperList
      this.iconList = resData.iconList
      this.recommendList = resData.recommendList
      this.weekendList = resData.weekendList
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () { // keep-alive 自带生命周期, 用于监听组件更新
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style lang="stylus" scoped>
.main-page
  // background #f5f5f5
</style>
