/*
 * @Author: web.王晓冬
 * @Date: 2020-06-04 14:02:11
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-06-04 16:49:31
 * @Description: chat-record 对话记录
*/
<template>
  <div class="mb50">
    <h1 class="f24 mt40">对话记录组件</h1>
    <p class="mt10 f14 e-text-gray">快速搭建对话记录列表</p>
    <code-preview :data="compList">
      <template v-slot:comp="{row,index}">
        <template v-if="index==0">
          <div class="mb20">
            <el-checkbox v-model="form.avatar" label="是否显示头像"></el-checkbox>
            <el-checkbox v-model="form.bubble" label="是否显示气泡"></el-checkbox>
            <el-checkbox v-model="form.group" label="是否分组"></el-checkbox>
            <el-checkbox v-model="form.senderRight" label="发送者是否居右"></el-checkbox>
          </div>
          <div class="p10" style="width:450px; border:1px solid #efefef; height:400px">
            <e-chat-record
              id="10"
              :avatar="form.avatar"
              :group="form.group"
              :bubble="form.bubble"
              :senderRight="form.senderRight"
            ></e-chat-record>
          </div>
        </template>
      </template>
    </code-preview>

    <!-- Attributes -->
    <h2 class="f24 mt50 mb20">Attributes</h2>
    <el-table class="mb20" :data="AttributesList" border stripe>
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
  name: "chat-record",
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
          info: "默认获取router里mate对象里的title字段文本",
          code: `<template>
  <div class="mb20">
    <el-checkbox v-model="form.avatar" label="是否显示头像"></el-checkbox>
    <el-checkbox v-model="form.bubble" label="是否显示气泡"></el-checkbox>
    <el-checkbox v-model="form.group" label="是否分组"></el-checkbox>
    <el-checkbox v-model="form.senderRight" label="发送者是否居右"></el-checkbox>
  </div>
  <div class="p10" style="width:450px; border:1px solid #efefef; height:400px">
    <e-chat-record
      id="10"
      :avatar="form.avatar"
      :group="form.group"
      :bubble="form.bubble"
      :senderRight="form.senderRight"
    ></e-chat-record>
  </div>
</template>
<script>
export default {
    data() {
      return {
        form: {
          avatar: true,
          group: true,
          bubble: true,
          senderRight: true
        },
      };
    }
  };
</scipt>`,
          showCode: false
        }
      ],
      AttributesList: [
        {
          name: "id",
          info: "根据id查询对话记录",
          type: "number/string",
          value: "-",
          default: "-"
        },
        {
          name: "avatar",
          info: "是否显示头像",
          type: "boolean",
          value: "-",
          default: "true"
        },
        {
          name: "bubble",
          info: "是否显示气泡",
          type: "boolean",
          value: "-",
          default: "true"
        },
        {
          name: "group",
          info: "是否分组",
          type: "boolean",
          value: "-",
          default: "true"
        },
        {
          name: "senderRight",
          info: "发送者是否居右",
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
  created() {},
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