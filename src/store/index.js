import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '武汉'
  },
  // actions: {
  //   // 第一个参数是上下文 数据简单, 没有异步操作, 可以不需要actions 转发
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations: {
    changeCity (state, city) {
      state.city = city
    }
  }
})
