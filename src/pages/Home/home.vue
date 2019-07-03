<template>
  <div class="main-page">
    <home-header></home-header>
    <home-swiper v-bind="indexData"></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'

export default {
  name: 'home',
  data () {
    return {
      indexData: {}
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeInfo () {
      axios.get('https://www.easy-mock.com/mock/5ca56f0706e65a2e94712962/api/index')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      console.log('res: ', res.data.data)
      this.indexData = res.data
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>
.main-page
  // background #f5f5f5
</style>
