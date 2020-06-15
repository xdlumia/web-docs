/*
 * @Author: web.王晓冬
 * @Date: 2020-03-25 11:03:54
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-06-10 17:06:56
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './api'
import './style/app.css'
import ELEMENT from 'element-ui';
import hljs from 'highlight.js';
import moment from 'moment';
import './style/common.scss'
import {
  eWebBasic
} from 'e-web-basic'
import 'highlight.js/styles/monokai-sublime.css' //样式文件


Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
Vue.use(ELEMENT, {
  size: 'mini'
})
ELEMENT.TableColumn.props.showOverflowTooltip = {
  default: true,
  type: Boolean
}
Vue.use(eWebBasic)
Vue.config.productionTip = false
Vue.filter('timeFormat', function (val, formatString = 'YYYY-MM-DD') {
  return moment(val).format(formatString);
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')