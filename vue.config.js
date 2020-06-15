/*
 * @Author: web.王晓冬
 * @Date: 2020-03-25 14:14:18
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-06-05 14:34:51
 * @Description: file content
 */
module.exports = {
  devServer: {
    proxy: {
      "/gitlab": {
        target: "http://git.kinfe.net/api/v4/", //  本地
        changeOrigin: true,
        pathRewrite: {
          '^/gitlab': ''
        }
      },
      "/mock": {
        target: "http://192.168.4.147:3000", //  本地
        changeOrigin: true,
        pathRewrite: {
          '^/mock': ''
        }
      }
    },
  },
  css: {
    // 是否使用css扩展
    requireModuleExtension: true,
  },
  productionSourceMap: false,
  // publicPath: process.env.NODE_ENV === 'production' ?
  //   '../' : './',
  publicPath: process.env.NODE_ENV === 'production' ? '../docs' : './',
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'vuex': 'Vuex',
      'vue-router': 'VueRouter',
      'element-ui': 'ELEMENT',
      'axios': 'axios'
    }

    // if (process.env.NODE_ENV === 'production') {
    //   return {
    //     plugins: [
    //       new CompressionWebpackPlugin({
    //         filename: '[path].gz[query]',
    //         algorithm: 'gzip', //算法类型
    //         test: productionGzipExtensions,
    //         threshold: 10240, //处理大于此字节
    //         deleteOriginalAssets: true, //是否不删除之前的资源
    //         minRatio: 0.8 //压缩比例
    //       })
    //     ]
    //   }
    // }
  }
}