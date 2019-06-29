/*
 * @Author: DevZhang
 * @Date: 2019-06-29 13:19:03
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-07-01 12:51:20
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body) // 解决手机端点击有 300 毫秒延迟的问题
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
