/*
 * @Author: web.王晓冬
 * @Date: 2020-03-25 11:03:54
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-06-10 11:18:50
 * @Description: 基础包文档
 */
<template>
  <el-container>
    <sideNav type="basic" :data="navList" />
    <el-main class="main-content">
      <div :is="$route.query.comp || 'log'"></div>
    </el-main>
  </el-container>
</template>
<script>
const navList = [
  {
    name: "更新日志",
    comp: "log"
  },
  {
    name: "快速上手",
    comp: "start"
  },
  {
    name: "公共组件",
    comp: "comps",
    children: []
  },
  {
    name: "公共方法",
    comp: "utils"
  },
  {
    name: "自定义指令 directive",
    comp: "directives"
  },
  {
    name: "过滤器 filter",
    comp: "filters"
  },
  {
    name: "公共css",
    comp: "stylecss"
  },
  {
    name: "axios封装",
    comp: "axios"
  },
  {
    name: "发布到私有仓库",
    comp: "publish"
  }
];
import sideNav from "@/components/side-nav";
const files = require.context(".", true, /\.vue$/);
let comps = {};
files.keys().forEach(key => {
  if (key != "./index.vue") {
    let file = files(key).default;
    comps[file.name] = file;
  }
});
import axios from "axios";
export default {
  name: "index",
  components: {
    sideNav,
    ...comps
  },
  data() {
    return {
      navList: navList
    };
  },
  watch: {},
  created() {
    this.getLog();
  },
  methods: {
    getLog() {
      axios
        .get(
          `${window.gitlab}/projects/21/repository/tree?path=package/components`
        )
        .then(res => {
          let data = res.filter(v => v.type == "tree");
          data = data.map(v => {
            v.name = v.name.replace("e-", "");
            return v;
          });
          this.navList[2].children = data;
        });
    }
  }
};
</script>
