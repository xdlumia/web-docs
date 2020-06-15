/*
 * @Author: web.王晓冬
 * @Date: 2020-03-26 11:16:23
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-04-29 16:55:27
 * @Description: 公共方法
 */
<template>
  <div>
    <h1 class="f24">公共方法</h1>
    <p class="mt10 f14 e-text-gray">使用统一的公共方法,快速处理数据</p>
    <div class="mt20 e-text-gray f12" v-if="!utilData.length">
      <span class="el-icon-loading" />正在获取数据...
    </div>
    <fieldset class="e-fieldset mt20 pl10 pr10" v-for="(item,index) of utilData" :key="index">
      <legend class="f20">{{item.title}}</legend>
      <p class="mt20 e-text-gray">使用示例:</p>
      <div v-highlight>
        <pre>
            <code>
              {{item.axample}}
            </code>
          </pre>
      </div>列表:
      <el-table class="mb20" :data="item.data" border stripe>
        <el-table-column prop="name" width="180" label="方法名称"></el-table-column>
        <el-table-column prop="detail" label="说明"></el-table-column>
      </el-table>
    </fieldset>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "utils",
  props: {},
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      utilData: [] //工具
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getUtils() {
      return this.$axiosGet({ id: 21, path: "package/utils/utils.js" }).then(
        res => {
          return res;
        }
      );
    },
    getStrong() {
      return this.$axiosGet({
        id: 21,
        path: "package/utils/localStrong.js"
      }).then(res => {
        return res;
      });
    },
    formatUtils(data) {
      data.forEach(item => {
        // 获取方法名称
        let content = item.content;
        // 文件头
        let header = content.slice(0, content.indexOf("*/") + 3);
        item.title = header.substring(
          header.indexOf("@Description:") + 13,
          header.indexOf("* @axample")
        );
        item.axample = header.substring(
          header.indexOf("* @axample") + 10,
          header.indexOf("*/")
        );
        content = content.slice(content.indexOf("*/") + 2);

        // 获取所有方法
        item.data = content.split("//end").map(item => {
          let name = item
            .substring(item.indexOf("#") + 1, item.indexOf("("))
            .trim();

          let detail = item
            .substring(item.indexOf("//") + 2, item.indexOf("#"))
            .trim();
          return {
            name: name,
            detail: detail
          };
        });
      });
      return data;
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    Promise.all([this.getUtils(), this.getStrong()]).then(res => {
      this.utilData = this.formatUtils(res);
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