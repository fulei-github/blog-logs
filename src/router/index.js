/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: fulei🐰
 * @Date: 2023-02-21 11:36:50
 * @LastEditors: fulei🐰
 * @LastEditTime: 2023-02-21 13:46:55
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import routesPC from './pc'
import routesH5 from './mobile'
Vue.use(VueRouter)

let routes = []
if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
  routes = routesH5
} else {
  routes = routesPC
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
