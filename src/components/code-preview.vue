/*
 * @Author: web.王晓冬
 * @Date: 2020-06-04 10:01:57
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-06-04 15:06:47
 * @Description: 代码演示
*/
<template>
  <div>
    <div v-for="(item,index) of data" :key="item.title" class="code-preview">
      <h3>{{item.title}}</h3>
      <p>{{item.info}}</p>
      <el-card :body-style="{ padding: '0px' }" shadow="hover">
        <div class="code-preview-body p20">
          <slot name="comp" :row="item" :index="index" />
        </div>
        <div class="code-body">
          <transition name="el-zoom-in-top">
            <div v-show="item.showCode" v-highlight>
              <pre class="html">
              <code style="padding:20px 10px" v-text="item.code">
              </code>
              </pre>
            </div>
          </transition>
        </div>
        <div class="code-footer" @click="item.showCode=!item.showCode">
          <i :class="`el-icon-caret-${item.showCode?'top':'bottom'}`"></i>
          {{item.showCode?'隐藏':'显示'}}代码
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "side-nav",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      show2: true
    };
  },
  watch: {},
  created() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
//@import url(); 引入公共css类
.code-preview {
  margin-bottom: 20px;
  > h3 {
    color: #1f2f3d;
    font-weight: 400;
    margin: 40px 0 20px;
    font-size: 22px;
  }
  > p {
    font-size: 14px;
    color: #5e6d82;
    line-height: 24px;
    margin-bottom: 15px;
  }
  .code-body {
    padding: 0 20px;
  }
  .code-footer {
    border-top: 1px solid #eaeefb;
    height: 44px;
    line-height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;
    transition: 0.2s;
    &:hover {
      color: #409eff;
    }
  }
}
</style>
