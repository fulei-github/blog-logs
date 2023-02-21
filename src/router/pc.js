/*
 * @Descripttion:pc-router
 * @version: 1.0.0
 * @Author: fulei🐰
 * @Date: 2023-02-21 13:33:53
 * @LastEditors: fulei🐰
 * @LastEditTime: 2023-02-21 13:48:54
 */
import Layout from '@/layout/index.vue'
export default [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        meta: {
          title: 'pc首页'
        },
        component: () =>
          import(/* webpackChunkName: "pcModule" */ '@/views/pc/index.vue')
      }
    ]
  }
]
