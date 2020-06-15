/*
 * @Author: web.王晓冬
 * @Date: 2020-03-25 11:03:54
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-06-10 18:23:48
 * @Description: file content
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../layout/index.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    redirect: '/explain',
    component: layout,
    children: [

      {
        path: '/explain',
        component: () => import('../views/explainApi'),
        meta: {
          title: '接口说明'
        }
      },
      {
        path: 'basic/',
        component: () => import('../views/basic'),
        meta: {
          title: 'basic说明'
        }
      }, {
        path: 'norms/',
        component: () => import('../views/norms'),
        meta: {
          title: '开发规范'
        }
      },
    ]
  }
]

const router = new VueRouter({
  // mode: 'history',
  linkActiveClass: 'active',
  // base: process.env.BASE_URL,
  base: '../docs',
  routes
})

export default router