/*
 * @Author: web.王晓冬
 * @Date: 2020-03-26 11:16:23
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-04-15 19:13:33
 * @Description: 快速上手
 */
<template>
  <div>
    <h1 class="f24 mb30">快速上手</h1>
    <!-- <div
      class="mt20 e-text-gray f12"
      v-if="!data.length"
    >
      <span class="el-icon-loading" />正在获取数据...
    </div>-->
    <fieldset class="e-fieldset mt20 pl10 pr10">
      <legend class="f20">安装</legend>
      <div v-highlight>
        <pre>
            <code>
//先切换成私有仓库
npm config set registry http://svn.kinfe.net:8082/repository/easyliao-npm-all/
npm config set always-auth true
npm config set _auth YWRtaW46S2luZmUjMTIzNDU2
npm config get registry
//下载
npm install e-web-basic -S  或  yarn add e-web-basic
            </code>
          </pre>
      </div>
    </fieldset>
    <fieldset class="e-fieldset mt20 pl10 pr10">
      <legend class="f20">使用示例</legend>
      <p class="mt20 e-text-gray">在main.js里引入以下内容</p>
      <div v-highlight>
        <pre>
            <code>

import Vue from 'vue'
import elementUi from 'element-ui'
import { eWebBasic} from 'e-web-basic'
Vue.use(eWebBasic)
Vue.use(elementUi,{size:'mini'})
            </code>
          </pre>
      </div>
    </fieldset>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "start",
  props: {},
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      data: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>