/*
 * @Author: DevZhang
 * @Date: 2019-06-29 13:19:03
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-06-29 13:19:38
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import 'assets/styles/reset.css'
import 'assets/styles/border.css'
import 'assets/styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body) // 解决手机端点击有 300 毫秒延迟的问题

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
