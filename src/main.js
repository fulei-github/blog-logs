/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: fulei🐰
 * @Date: 2023-02-21 11:36:50
 * @LastEditors: fulei🐰
 * @LastEditTime: 2023-02-21 13:32:38
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/use' // 注册组件
import 'element-ui/lib/theme-chalk/index.css' // element样式
import 'vant/lib/index.css' // vant样式

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
