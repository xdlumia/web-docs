/*
 * @Author: web.王晓冬
 * @Date: 2020-03-25 11:03:54
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-06-12 15:16:01
 * @Description: 基础包文档
 */
<template>
  <el-container>
    <el-aside width="200px">
      <ul class="side-nav e-text-gray mt30">
        <li
          v-for="(item,index) of navData"
          :key="index"
          @click="navClick(item,index)"
          :class="{active:activeIndex==item.id}"
        >{{item.title}}</li>
      </ul>
    </el-aside>
    <el-main class="main-content">
      <!-- 接口返回参数说明 -->
      <fieldset id="A01" class="e-fieldset mt20 pl10 pr10">
        <legend class="f20">接口返回参数说明</legend>
        <p class="e-text-gray mt5">后端开发人员严格按照以下格式返回数据,如果格式不正确,前端开发人员有义务要求后端人员更改.</p>
        <div v-highlight>
          <pre class="htm">
            <code>
{
  code: 0, //状态码 code =0 非200表示有异常
  status: 'ok', //状态
  msg: '请求成功', // 当status!=0 都应该有错误信息
  data:{
    size:'15', //当前页条数
    pageNum: 0, //当前页码
    pages: 0, //总页数
    total: 0, //总条数
    records:[], //数据集合
    }
}
            </code>
          </pre>
        </div>
        <div>状态码说明:</div>
        <el-table border :data="datausData">
          <el-table-column prop="code" label="code"></el-table-column>
          <el-table-column prop="info" label="说明"></el-table-column>
        </el-table>
      </fieldset>
      <fieldset id="A02" class="e-fieldset mt20 pl10 pr10">
        <legend class="f20">请求方式说明</legend>
        <p class="mt20">获取数据使用get请求 使用url/query方式传参</p>
        <p>保存数据使用post/put请求 必须使用body传参</p>
        <p>删除数据使用delete请求 使用url/query方式传参</p>
        <router-link class="mt10 e-text-blue" to="/basic?comp=axios">点击我查看 前端基于axios 的数据调用方式示例</router-link>
      </fieldset>

      <fieldset id="A03" class="e-fieldset mt20 pl10 pr10">
        <legend class="f20">VSCode插件推荐</legend>
        <p class="mt20 mb20">为了提高团队协作,统一使用以下插件</p>
        <el-table class="mb20" :data="vscodeList" border stripe>
          <el-table-column prop="name" width="180" label="名称"></el-table-column>
          <el-table-column prop="info" label="说明"></el-table-column>
        </el-table>
        <p class="mt20">vscode setting.json配置参考</p>
        <a class="e-text-blue" :href="`${publicPath}settings.json`" download="settings.json">点击下载</a>
        <p class="mt20">vue代码片段</p>
        <a class="e-text-blue" :href="`${publicPath}vue.json`" download="vue.json">点击下载</a>
      </fieldset>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: "index",
  components: {},
  data() {
    return {
      activeIndex: "#A01",
      publicPath: process.env.BASE_URL,
      timer: null,
      vscodeList: [
        { name: "vetur", info: "代码格式化工具" },
        { name: "ESlint", info: "代码检测工具，" },
        { name: "GitLens", info: "查看当前行commit信息" },
        { name: "koroFileHeader", info: "自动生成注释" },
        { name: "VSCode-Element-Helper", info: "element ui官网代码提示工具" },
        { name: "vue 2 Snippets", info: "官方语法高亮" },
        { name: "open in browser", info: "快速使用浏览器查看html文件" },
        { name: "Auto Rename Tag", info: "自动闭合HTML标签" },
        { name: "Todo Tree", info: "代码TODO标记" }
      ],
      datausData: [
        { code: "0", info: "执行成功" },
        { code: "40001", info: "不合法的凭证" },
        { code: "40002", info: "权限不足" },
        { code: "40004", info: "无效token" },
        { code: "40004", info: "token失效，请重新登录" },
        { code: "40005", info: "不合法的文件大小" },
        { code: "40006", info: "不合法的参数类型" },
        { code: "40007", info: "不合法的请求字符" },
        { code: "40008", info: "不合法的请求格式" },
        { code: "40009", info: "接口调用超过限制" },
        { code: "40010", info: "调用太频繁，请稍候再试" },
        { code: "40011", info: "数据不存在" },
        { code: "40012", info: "数据已存在" },
        { code: "40013", info: "系统错误" }
      ],
      navData: [
        {
          id: "#A01",
          title: "接口返回参数说明"
        },
        {
          id: "#A02",
          title: "请求方式说明"
        },
        {
          id: "#A03",
          title: "vscode插件推荐"
        }
      ]
    };
  },
  watch: {},
  created() {},
  mounted() {
    this.onScroll();
  },
  methods: {
    onScroll() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        let baseEl = document.querySelector(".main-content");
        let elArr = this.navData.map(v => ({
          dom: document.querySelector(v.id),
          id: v.id
        }));
        baseEl.onscroll = () => {
          elArr.forEach(item => {
            if (
              item.dom.getBoundingClientRect().top > 0 &&
              item.dom.getBoundingClientRect().top < 50
            ) {
              this.activeIndex = item.id;
            }
          });
        };
      }, 1000);
    },
    navClick(item, index) {
      this.activeIndex = index;
      document.querySelector(item.id).scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
