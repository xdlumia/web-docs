/*
 * @Author: web.王晓冬
 * @Date: 2020-03-25 11:03:54
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-06-05 10:55:22
 * @Description: file content
 */
<template>
  <el-aside width="200px">
    <el-menu @select="urlTo" :default-active="currComp" class="side-nav mt30">
      <templates v-for="(item,index) of data" :key="index">
        <el-menu-item v-if="!item.children" :index="item.comp">{{item.name}}</el-menu-item>
        <el-submenu v-else index="2">
          <template slot="title">{{item.name}}</template>
          <el-menu-item
            :index="subitem.name"
            v-for="(subitem,i) of item.children"
            :key="i"
          >{{subitem.name}}</el-menu-item>
        </el-submenu>
      </templates>
    </el-menu>
    <!-- <ul class="side-nav">
      <li v-for="(item,index) of data" :key="index">
        <a
          :class="{active:currComp==item.comp}"
          href="javascript:void(0)"
          @click="urlTo(item.comp)"
        >{{item.name}}</a>
      </li>
    </ul>-->
  </el-aside>
</template>
<script>
export default {
  name: "side-nav",
  props: {
    data: Array,
    type: String
  },
  data() {
    return {
      currComp: "log"
    };
  },
  watch: {},
  created() {
    this.currComp = this.$route.query.comp || "log";
  },
  methods: {
    urlTo(comp) {
      if (this.currComp == comp) {
        return;
      }
      if (comp == "form") comp = "eform";
      if (comp == "table") comp = "etable";
      this.currComp = comp;
      this.$router.push({ path: this.type, query: { comp: comp } });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.side-nav {
  padding: 0;
  .el-menu-item,
  .el-submenu__title {
    line-height: 40px;
    height: 40px;
  }
}
</style>
