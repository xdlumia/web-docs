/*
 * @Author: web.王晓冬
 * @Date: 2020-03-25 13:03:14
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-06-10 16:59:11
 * @Description: file content
 */
import axios from 'axios'
import Vue from 'vue'
axios.defaults.baseURL = 'http://192.168.4.147:3000';
axios.defaults.timeout = 200000
window.gitlab = 'http://git.kinfe.net/api/v4/'

import {
  api
} from 'e-web-basic'
import QS from 'querystring'
import serviceApi from './service-api.js'

api.registry({
  serviceApi
}, false)


let Base64 = require('js-base64').Base64
// GET 请求 params 序列化
axios.defaults.paramsSerializer = function (params) {
  return QS.stringify(params)
}
// 设置token
const token = "Wz6K47F6HKPp1RUYTKxd"
const ref = "dev"
axios.interceptors.request.use(config => {
  // 判断请求的类型
  // 如果是post请求就把默认参数拼到data里面
  // 如果是get请求就拼到params里面
  if (config.method === 'post') {
    let data = QS.parse(config.data)
    config.data = QS.stringify({
      ...data
    })
  } else if (config.method === 'get') {
    config.params = {
      private_token: token,
      ref: ref,
      ...config.params
    }
  }
  // config.headers.token = '132';
  return config;
}, error => {
  Promise.reject(error)
})

const axiosGet = (params) => {
  let path = params.path.replace(new RegExp("/", "gm"), "%2F")

  return axios.get(`${window.gitlab}/projects/${params.id}/repository/files/${path}`, )
    .then(function (res) {
      let content = res.content || {}
      res.content = Base64.decode(content)
      return res
    })
}
Vue.prototype.$axiosGet = axiosGet