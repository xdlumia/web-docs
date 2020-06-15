/*
 * @Author: web.王晓冬
 * @Date: 2020-06-04 17:57:50
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-06-10 17:13:52
 * @Description: 表格
*/
<template>
  <div class="mb50">
    <h1 class="f24 mt40">e-table 表格组件</h1>
    <p class="mt10 f14 e-text-gray">快速搭建带有分页的表格,</p>
    <code-preview :data="compList">
      <template v-slot:comp="{row,index}">
        <template v-if="index==0">
          <el-button @click="$refs.table.reload()" class="mb10">刷新列表</el-button>
          <e-table ref="table" border api="mockGetUser" :params="{}" style="height:300px">
            <el-table-column type="selection" width="60"></el-table-column>
            <el-table-column label="姓名" prop="name"></el-table-column>
            <el-table-column label="城市" prop="city"></el-table-column>
            <el-table-column label="文本" prop="ctitle"></el-table-column>
            <el-table-column label="email" prop="email"></el-table-column>
          </e-table>
        </template>
      </template>
    </code-preview>

    <!-- Attributes -->
    <h2 class="f24 mt50 mb20">Attributes</h2>
    <p class="mb20">
      e-table基于el-table组件封装. 以下是e-table新添加的参数. 其余参数参考
      <a
        class="e-text-blue"
        target="_blank"
        href="https://element.eleme.cn/#/zh-CN/component/table#table-attributes"
      >el-table组件</a>
    </p>
    <el-table class="mb20" :data="attrList" border stripe>
      <el-table-column prop="name" width="120" label="参数"></el-table-column>
      <el-table-column prop="info" label="说明"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="value" label="可选值"></el-table-column>
      <el-table-column prop="default" label="默认"></el-table-column>
    </el-table>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
import codePreview from "@/components/code-preview";
export default {
  name: "etable",
  props: {},
  //import引入的组件需要注入到对象中才能使用
  components: { codePreview },
  data() {
    //这里存放数据
    return {
      form: {
        avatar: true,
        group: true,
        bubble: true,
        senderRight: true
      },
      compList: [
        {
          title: "基础用法",
          info: "快速获取数据生成带有分页的表格",
          code: `<template>
  <e-table ref="table" border api="mockGetUser" :params="{}" style="height:300px">
    <el-table-column type="selection" width="60"></el-table-column>
    <el-table-column label="姓名" prop="name"></el-table-column>
    <el-table-column label="性别" prop="sex"></el-table-column>
  </e-table>
</template>
<script>

</scipt>`,
          showCode: false
        }
      ],
      attrList: [
        {
          name: "api",
          info: "api接口",
          type: "string",
          value: "-",
          default: "-"
        },
        {
          name: "params",
          info: "api接口请求参数",
          type: "object/string/number",
          value: "-",
          default: "{ page: 1, size: 15 }"
        },
        {
          name: "autoInit",
          info: "是否自动调用接口请求",
          type: "boolean",
          value: "-",
          default: "true"
        },
        {
          name: "page",
          info: "是否显示分页",
          type: "boolean",
          value: "-",
          default: "true"
        }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.$nextTick(() => {
      console.log("this.$refs.table", this.$refs.table);
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