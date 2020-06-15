/*
 * @Author: web.王晓冬
 * @Date: 2020-06-04 17:51:48
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-06-04 17:57:00
 * @Description: 搜索
*/
<template>
  <div class="mb50">
    <h1 class="f24 mt40">e-search 组件</h1>
    <p class="mt10 f14 e-text-gray">对管理中心搜索区域的样式封装</p>
    <code-preview :data="compList">
      <template v-slot:comp="{row,index}">
        <template v-if="index==0">
          <e-search>
            <el-input v-model="form.name" style="widht:320px" placeholder="请输入姓名"></el-input>
          </e-search>
        </template>
      </template>
    </code-preview>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
import codePreview from "@/components/code-preview";
export default {
  name: "search",
  props: {},
  //import引入的组件需要注入到对象中才能使用
  components: { codePreview },
  data() {
    //这里存放数据
    return {
      form: {
        name: ""
      },
      compList: [
        {
          title: "基础用法",
          info: "没有什么特殊的用法,就是一个样式包裹器",
          code: `<template>
  <e-search>
    <el-input v-model="form.name" style="widht:320px" placeholder="请输入姓名"></el-input>>
  </e-search>
</template>`,
          showCode: false
        }
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