/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: fulei🐰
 * @Date: 2023-02-21 13:34:00
 * @LastEditors: fulei🐰
 * @LastEditTime: 2023-02-21 13:49:31
 */
export default [
  {
    path: '/',
    name: '首页',
    meta: {
      needLogin: false,
      keepAlive: false
    },
    component: () =>
      import(/* webpackChunkName: "mobileModule" */ '@/views/mobile/index.vue')
  }
]
