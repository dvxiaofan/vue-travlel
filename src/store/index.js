/*
 * @Author: DevZhang
 * @Date: 2019-07-06 22:26:16
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-07-06 22:30:58
 */

import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
})
