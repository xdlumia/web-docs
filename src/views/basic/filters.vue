/*
 * @Author: web.王晓冬
 * @Date: 2020-03-26 11:16:23
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-04-29 16:56:09
 * @Description: filter
 */
<template>
  <div>
    <h1 class="f24">{{data.title}}</h1>
    <p class="mt10 f14 e-text-gray">常用的自定义指令</p>
    <div class="mt20 e-text-gray f12" v-if="!Object.keys(data).length">
      <span class="el-icon-loading" />正在获取数据...
    </div>
    <p class="mt20 e-text-gray">使用示例:</p>
    <div v-highlight>
      <pre class="html">
        <code v-text="data.axample">
        </code>
      </pre>
    </div>
    <el-table class="mb20" :data="data.data" border stripe>
      <el-table-column prop="name" width="120" label="方法名称"></el-table-column>
      <el-table-column prop="detail" label="说明"></el-table-column>
      <el-table-column prop="default" width="200" label="默认值"></el-table-column>
    </el-table>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "filters",
  props: {},
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      data: {}
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
        this.data = this.formatUtils(res);
      });
    },
    formatUtils(data) {
      // 文件内容
      let content = data.content;
      // 文件头
      let header = data.content.slice(0, content.indexOf("*/") + 3);
      data.title = header.substring(
        header.indexOf("@Description:") + 13,
        header.indexOf("@axample") - 2
      );
      // 获取示例
      data.axample = header.substring(
        header.indexOf("@axample") + 9,
        header.indexOf("*/")
      );

      content = content.slice(content.indexOf("*/") + 2);

      // // 获取所有方法
      data.data = content.split("//end").map(item => {
        let name = item
          .substring(item.indexOf("*/") + 2, item.indexOf("("))
          .trim();

        let detail = item
          .substring(item.indexOf("@desc") + 5, item.indexOf("@default") - 2)
          .trim();
        // 默认值
        let defaul = item
          .substring(item.indexOf("@default") + 8, item.indexOf("#"))
          .trim();
        return {
          name: name,
          detail: detail,
          default: defaul
        };
      });
      return data;
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.get();
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