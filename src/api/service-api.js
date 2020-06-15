/*
 * @Author: web.王晓冬
 * @Date: 2020-03-20 18:25:34
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-06-05 14:57:02
 * @Description: file content
 */
const MOCK_ADDRESS = '/'

export default {
  __mockAddress: MOCK_ADDRESS,
  /* =============人机结合API=========== */
  // 可选客服人员
  mockGetUser: {
    'url': '/mock/getUser',
    'methods': 'get',
    'mock': false,
    'showMsg': false
  },
  // 登陆验证
  validUser: {
    'url': '/ValidUser',
    'mock': false,
    'methods': 'post'
  },

}