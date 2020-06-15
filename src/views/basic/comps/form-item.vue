/*
 * @Author: web.王晓冬
 * @Date: 2020-06-04 14:39:12
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-06-04 16:49:23
 * @Description: form-item
*/
<template>
  <div class="mb50">
    <h1 class="f24 mt40">form-item</h1>
    <p class="mt10 f14 e-text-gray">基于el-form-item封装 汇集各种类型表单 必须使用el-form 或者f-from包裹使用</p>
    <code-preview :data="compList">
      <template v-slot:comp="{row,index}">
        <template v-if="index==0">
          <el-form size="small" label-width="120px" :model="form">
            <e-form-item v-model="form" lineSpace="15px" :gutter="10" :span="12" :option="formList">
              <template v-slot:key5>
                根据options里的prop的值自定义元素
                <el-button>按钮</el-button>
              </template>
            </e-form-item>
          </el-form>
        </template>
      </template>
    </code-preview>

    <!-- Attributes -->
    <h2 class="f24 mt50 mb20">Attributes</h2>
    <el-table class="mb20" :data="attrList" border stripe>
      <el-table-column prop="name" width="120" label="参数"></el-table-column>
      <el-table-column prop="info" label="说明"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="value" label="可选值"></el-table-column>
      <el-table-column prop="default" label="默认"></el-table-column>
    </el-table>

    <!-- slots -->
    <h2 class="f24 mt50 mb20">Slots</h2>
    <el-table class="mb20" :data="slotList" border stripe>
      <el-table-column prop="name" width="120" label="name"></el-table-column>
      <el-table-column prop="info" label="说明"></el-table-column>
    </el-table>
  </div>
</template>

<script>
let formItem = [
  {
    label: "所有者:",
    prop: "key1",
    type: "text",
    append: "132",
    rules: { required: true },
    change: val => {
      console.log(val);
    }
  },
  {
    label: "创建者:",
    prop: "key1",
    type: "select",
    dic: [{ label: "测试", value: 1 }],
    change: val => {
      console.log(val);
    }
  },
  {
    label: "日期1:",
    prop: "key1",
    type: "daterange",
    span: 12,
    change: e => {
      console.log(e);
    }
  },
  { label: "日期2:", prop: "key1", type: "datetimerange", span: 12 },
  {
    label: "处理状态:",
    prop: "key1",
    type: "radio",
    dic: [{ label: "测试", value: 1 }]
  },
  {
    label: "子站点:",
    prop: "key1",
    type: "checkbox",
    dic: [{ label: "测试", value: 1 }]
  },
  { label: "日期:", prop: "key1", type: "datetime" },
  { label: "省市:", prop: "key1", type: "cascader" },
  { label: "省市:", prop: "key1", type: "switch" },
  { label: "省市:", prop: "key1", type: "colorPicker" },
  { label: "关键词:", prop: "key1", type: "textarea", span: 24 }
];
formItem = formItem.map((v, i) => {
  v.prop = `key${i}`;
  return v;
});
//例如：import 《组件名称》 from '《组件路径》';
import codePreview from "@/components/code-preview";
export default {
  name: "form-item",
  props: {},
  //import引入的组件需要注入到对象中才能使用
  components: { codePreview },
  data() {
    //这里存放数据
    return {
      form: { a: "" },
      formList: formItem,
      compList: [
        {
          title: "基础用法",
          info: "必须配合el-form 或者e-form使用,每项输入内容都提供change事件",
          code: ` <template>
  <el-form size="small" label-width="120px" :model="form">
    <e-form-item v-model="form" lineSpace="15px" :gutter="10" :span="12" :option="formList">
      <template v-slot:key5>
        根据options里的prop的值自定义元素
        <el-button>按钮</el-button>
      </template>
    </e-form-item>
  </el-form>
</template>
<script>
let formItem = [
  {
    label: "所有者:",
    prop: "key0",
    type: "text",
    append: "132",
    rules: { required: true },
    change: val => {
      console.log(val);
    }
  },
  {
    label: "创建者:",
    prop: "key1",
    type: "select",
    dic: [{ label: "测试", value: 1 }]
  },
  {
    label: "日期1:",
    prop: "key2",
    type: "daterange",
    span: 12,
    change: e => {
      console.log(e);
    }
  },
  { label: "日期2:", prop: "key3", type: "datetimerange", span: 12 },
  { label: "处理状态:", prop: "key4", type: "radio", dic: [{ label: "测试", value: 1 }] },
  { label: "子站点:", prop: "key5", type: "checkbox", dic: [{ label: "测试", value: 1 }] },
  { label: "日期:", prop: "key6", type: "datetime" },
  { label: "省市:", prop: "key7", type: "cascader" },
  { label: "省市:", prop: "key8", type: "switch" },
  { label: "省市:", prop: "key9", type: "colorPicker" },
  { label: "关键词:", prop: "key10", type: "textarea", span: 24 }
];
export default {
    data() {
      return {
        form: { a: "" },
        formList: formItem,
      };
    }
  };
</scipt>`,
          showCode: false
        }
      ],
      attrList: [
        {
          name: "value / v-model",
          info: "绑定值",
          type: "string / number / boolean	",
          value: "-",
          default: "-"
        },
        {
          name: "option",
          info: "列表项数据",
          type: "array",
          value: "-",
          default: "-"
        },
        {
          name: "gutter",
          info: "基于 el-row 组件 的参数",
          type: "number",
          value: "-",
          default: "10"
        },
        {
          name: "span",
          info: "基于 el-col 组件的参数",
          type: "number",
          value: "-",
          default: "12"
        },
        {
          name: "lineSpace",
          info: "行间距",
          type: "string",
          value: "-",
          default: "15px"
        }
      ],
      slotList: [
        {
          name: "-",
          info: "基于option数据里prop的值作为name,参考基础用法里 [子站点] 项"
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