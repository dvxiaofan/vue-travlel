<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="btn-list">
          <div class="btn-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="btn-list">
          <div
            class="btn-wrapper"
            v-for="item in hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
            >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>

      <div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem in item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
          {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  name: 'CityList',
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    handleCityClick (city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    // this.scroll = new BScroll(this.$refs.wrapper)
  },
  activated () { // keep-alive 自带生命周期, 用于监听组件更新
    // 有时候进入城市列表会无法滚动, 尝试通过 activate的钩子处理添加滚动事件
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;

  .title {
    line-height: 0.54rem;
    background: #eee;
    color: #666;
    padding-left: 0.2rem;
  }

  .btn-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .btn-wrapper {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      color: #666666;
      padding-left: 0.2rem;
    }
  }
}
</style>
