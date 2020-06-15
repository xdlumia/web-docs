/*
 * @Author: web.王晓冬
 * @Date: 2020-03-25 15:15:18
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-06-12 10:10:09
 * @Description: 顶部菜单
 */
<template>
  <div class="header">
    <h1 class="fl">易聊科技前端文档</h1>
    <ul class="fr nav">
      <li>
        <router-link to="/explain">接口说明</router-link>
      </li>
      <li>
        <router-link to="/norms">开发规范</router-link>
      </li>
      <li>
        <router-link to="/basic">e-web-basic</router-link>
      </li>
      <li>暂无</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "header-menu",
  props: {},
  data() {
    return {
      currComp: ""
    };
  },
  watch: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  border-bottom: 1px solid #dcdfe6;
  line-height: 60px;
  height: 100%;
  .nav {
    li {
      float: left;
      margin-left: 40px;
      transition: 0.2s;
      a {
        line-height: 60px;
        display: block;
      }
      :hover {
        color: #409eff;
      }
      .active {
        border-bottom: 2px solid #409eff;
        color: #409eff;
      }
    }
  }
}
</style>
