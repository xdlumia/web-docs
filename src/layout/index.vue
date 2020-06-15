/*
 * @Author: web.王晓冬
 * @Date: 2020-03-25 15:15:18
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-03-30 15:38:14
 * @Description: file content
 */
<template>
  <div class="e-max-content">
    <el-container>
      <el-header>
        <headerMenu />
      </el-header>
      <el-container>
        <router-view />
      </el-container>
    </el-container>
  </div>
</template>

<script>
import headerMenu from "./header-menu";
export default {
  name: "layout",
  components: { headerMenu },
  props: {
    msg: String
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
