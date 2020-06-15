/*
 * @Author: web.王晓冬
 * @Date: 2020-03-26 11:16:23
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-06-11 18:34:51
 * @Description: axios
 */
<template>
  <div>
    <h1 class="f24 mb30">axios封装</h1>
    <p class="mt10 f14 e-text-gray">基于axios二次封装 方便调取数据</p>
    <fieldset class="e-fieldset mt20 pl10 pr10">
      <legend class="f20">封装说明</legend>
      <div class="mt20 e-text-gray">
        <p>
          获取数据使用
          <el-tag class="mr5 ml5">get</el-tag>请求
        </p>
        <p>
          保存数据使用
          <el-tag class="mr5 ml5">post/put</el-tag>请求
        </p>
        <p>
          删除数据使用
          <el-tag class="mr5 ml5">delete</el-tag>请求
        </p>
        <p>
          业务码
          <el-tag class="mr5 ml5">code==0</el-tag>的状态下进入.then方法 post/put/delete 请求方法下 会弹出
          <span class="e-text-green">
            <el-tag class="mr5 ml5" type="success">操作成功</el-tag>
          </span>的消息, get请求成功默认不提醒
        </p>
        <p>
          业务码
          <el-tag class="mr5 ml5">code==0</el-tag>的状态下 是否显示消息提醒可以通过
          <el-tag class="mr5 ml5">showMsg</el-tag>配置
        </p>
        <p>
          业务码
          <el-tag class="mr5 ml5">code!=0</el-tag>的状态下进入.catch方法 任何请求方式下都会弹出
          <span class="e-text-red">
            <el-tag class="mr5 ml5" type="danger">请求失败</el-tag>
          </span>的消息
        </p>
        <p>
          业务码
          <el-tag class="mr5 ml5">code!=0</el-tag>的状态下 是否显示消息提醒 不可配置
        </p>
      </div>
    </fieldset>

    <!-- <div
      class="mt20 e-text-gray f12"
      v-if="!data.length"
    >
      <span class="el-icon-loading" />正在获取数据...
    </div>-->
    <fieldset class="e-fieldset mt20 pl10 pr10">
      <legend class="f20">安装方式</legend>
      <p class="mt20 e-text-gray">通过命令下载</p>
      <div v-highlight>
        <pre class="js">
            <code>
npm install e-web-basic -S  或  yarn add e-web-basic
            </code>
          </pre>
      </div>
    </fieldset>
    <fieldset class="e-fieldset mt20 pl10 pr10">
      <legend class="f20">使用示例</legend>
      <p class="mt20 e-text-gray">1: 在src/api文件夹下创建index.js和服务api.js</p>
      <p class="e-text-gray">2:在index.js文件里引入e-web-basic</p>
      <div v-highlight>
        <pre class="js">
            <code>
import { api } from 'e-web-basic/package'
import serveApi from 'serveApi.js'
// 第二个参数: 是否是多个服务,true 是, false 否    默认是false
api.registry(serveApi,false)
            </code>
          </pre>
      </div>
      <p class="e-text-gray">3: serveApi写入接口</p>
      <div v-highlight>
        <pre class="js">
            <code>
export default {
  //获取分页数据
  getPage: {
    'url': '/log/info/{id}', //接口url
    'mock': false,  //是否使用mock 数据
    'methods': 'post', //接口请求方式 默认get
    'showMsg': false //请求成功是否弹出提醒
  },
  // 批量保存
  logSaveBatchLogs: {
    'url': '/log/saveBatchLogs',
    'mock': false,
    'methods': 'post'
  },
}
            </code>
          </pre>
      </div>
      <p class="e-text-gray">4: 在main.js里引入以下内容</p>
      <div v-highlight>
        <pre class="js">
            <code>
import Vue from 'vue'
import { eWebBasic} from 'e-web-basic'
import './api'
Vue.use(eWebBasic)
            </code>
          </pre>
      </div>
      <p class="e-text-gray">5: 请求数据时用法示例</p>
      <div v-highlight>
        <pre class="js">
            <code>

//如果在第二步是否多个服务设置为flase的时候
this.$api.logSaveBatchLogs({id:1})
  .then(res=>{
    let data = res.data || []
  }).finally(err){}

  
//如果在第二步是否多个服务设置为true的时候
this.$api.serveApi.logSaveBatchLogs({id:1})
  .then(res=>{
    let data = res.data || []
  }).finally(err){}

//url传参
this.$api.getDetail(null,id)  //getDetail/1
  .then(res=>{
    //请求成功
  }).finally(err){}
  
//query / body传参  传参内容均为json
this.$api.getDetail({id:1})
  .then(res=>{
    //请求成功
  }).finally(err){}
            </code>
          </pre>
      </div>
    </fieldset>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "axios",
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