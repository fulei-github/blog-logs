/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: fulei🐰
 * @Date: 2023-02-21 11:36:50
 * @LastEditors: fulei🐰
 * @LastEditTime: 2023-02-21 11:41:52
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routesP = [{
  path: '/',
  name: 'Index',
  component: () => import(/* webpackChunkName: "about" */ '../views/pc/index.vue')
}]

const routesM = [{
  path: '/',
  name: 'Index',
  component: () => import(/* webpackChunkName: "about" */ '../views/mobile/index.vue')
}]

let routes = []
if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
  routes = routesM
} else {
  routes = routesP
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
