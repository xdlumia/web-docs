/*
 * @Author: web.王晓冬
 * @Date: 2020-03-26 11:16:23
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-03-28 12:58:46
 * @Description: 基础样式
 */
<template>
  <div>
    <h1 class="f24">css 样式</h1>
    <p class="mt10 f14 e-text-gray">基础的css样式 用于快速搭建页面</p>
    <div class="mt20 e-text-gray f12" v-if="!styleData.length">
      <span class="el-icon-loading" />正在获取数据...
    </div>
    <!-- <li v-for="(item,index) of styleData" :key="index">1</li> -->
    <fieldset class="e-fieldset mt20 pl10 pr10" v-for="(item,index) of styleData" :key="index">
      <legend class="f20">{{item.file_name}} 样式</legend>
      <div v-highlight>
        <pre>
            <code>
{{item.content}}
            </code>
          </pre>
      </div>
    </fieldset>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "stylecss",
  props: {},
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      styleData: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getBase() {
      return this.$axiosGet({ id: 21, path: "package/style/base.scss" }).then(
        res => {
          return res;
        }
      );
    },
    getReset() {
      return this.$axiosGet({ id: 21, path: "package/style/reset.scss" }).then(
        res => {
          return res;
        }
      );
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    Promise.all([this.getBase(), this.getReset()]).then(res => {
      this.styleData = res || [];
    });
  },
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