/*
 * @Author: web.王晓冬
 * @Date: 2020-03-26 11:16:23
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-06-05 17:45:10
 * @Description: 基础样式
 */
<template>
  <div>
    <h1 class="f24 mb30">更新日志</h1>
    <div class="e-text-gray f12" v-if="!logData.length">
      <span class="el-icon-loading" />正在获取数据...
    </div>
    <el-timeline>
      <el-timeline-item
        :timestamp="$options.filters.timeFormat(item.committed_date)"
        placement="top"
        v-for="(item,index) of logData"
        :key="index"
      >
        <el-card>
          <h4>{{item.message}}</h4>
          <p
            class="e-text-gray f12"
          >{{item.author_name}}: 提交于 {{item.committed_date | timeFormat('YYYY-MM-DD HH:mm:ss')}}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
import axios from "axios";
export default {
  name: "log",
  props: {},
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      logData: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getLog() {
      axios
        .get(
          `${window.gitlab}/projects/21/repository/commits?per_page=100&page=1`
        )
        .then(res => {
          this.logData = res || [];
        });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getLog();
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