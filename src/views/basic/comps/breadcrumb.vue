/*
 * @Author: web.王晓冬
 * @Date: 2020-03-26 11:16:23
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-06-04 16:53:15
 * @Description: breadcrumb
 */
<template>
  <div class="mb50">
    <h1 class="f24 mt40">面包屑组件</h1>
    <p class="mt10 f14 e-text-gray">显示当前页面的路径，快速返回之前的任意页面。</p>
    <code-preview :data="compList">
      <template v-slot:comp="{row,index}">
        <template v-if="index==0">
          <e-breadcrumb></e-breadcrumb>
        </template>
        <template v-if="index==1">
          <e-breadcrumb>
            <el-breadcrumb separator="》">
              <el-breadcrumb-item :to="{ path: '/' }">基础包</el-breadcrumb-item>
              <el-breadcrumb-item>面包屑组件</el-breadcrumb-item>
            </el-breadcrumb>
            <el-button slot="extend" type="warning" icon="el-icon-plus">新增</el-button>
          </e-breadcrumb>
        </template>
      </template>
    </code-preview>

    <!-- slots -->
    <h2 class="f24 mt50 mb20">Slots</h2>
    <el-table class="mb20" :data="slotList" border stripe>
      <el-table-column prop="name" width="120" label="name"></el-table-column>
      <el-table-column prop="info" label="说明"></el-table-column>
    </el-table>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
import codePreview from "@/components/code-preview";
export default {
  name: "breadcrumb",
  props: {},
  //import引入的组件需要注入到对象中才能使用
  components: { codePreview },
  data() {
    //这里存放数据
    return {
      compList: [
        {
          title: "基础用法",
          info: "默认获取router里mate对象里的title字段文本",
          code: "<e-breadcrumb></e-breadcrumb>",
          showCode: false
        },
        {
          title: "自定义用法",
          info: "自定义路由内容",
          code: `<e-breadcrumb>
  <el-breadcrumb separator="》">
    <el-breadcrumb-item :to="{ path: '/' }">基础包</el-breadcrumb-item>
    <el-breadcrumb-item>面包屑组件</el-breadcrumb-item>
  </el-breadcrumb>
  <el-button slot="extend" type="warning" icon="el-icon-plus">新增</el-button>
</e-breadcrumb>`,
          showCode: false
        }
      ],
      slotList: [
        { name: "—", info: "左侧面包屑内容" },
        { name: "extend", info: "右侧扩展功能" }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    get() {
      // 获取指令代码
      this.$axiosGet({ id: 21, path: "package/utils/filters.js" }).then(res => {
        this.data = res;
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // this.get();
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