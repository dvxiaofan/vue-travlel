<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="bannerImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      bannerImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('https://www.easy-mock.com/mock/5ca56f0706e65a2e94712962/api/detail', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        let resData = res.data
        this.sightName = resData.sightName
        this.bannerImg = resData.bannerImg
        this.bannerImgs = resData.gallaryImgs
        this.list = resData.categoryList
      }
    }
  },
  // mounted () {
  //   this.getDetailInfo()
  // },
  activated () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
.content
  height 50rem
</style>
