
/*
 * @Author: web.王晓冬
 * @Date: 2020-06-04 14:39:12
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-06-10 16:37:45
 * @Description: form
*/
<template>
  <div class="mb50">
    <h1 class="f24 mt40">form 表单组件</h1>
    <p class="mt10 f14 e-text-gray">基于el-form和 e-form-item组件 增加了按钮功能和样式</p>
    <code-preview :data="compList">
      <template v-slot:comp="{row,index}">
        <template v-if="index==0">
          <el-button @click="visible=true">新增表单</el-button>
          <el-dialog title="新增表单内容" v-dialogDrag :visible.sync="visible">
            <e-form
              v-model="form"
              refs="form"
              size="small"
              label-width="80px"
              lineSpace="15px"
              :gutter="10"
              :span="12"
              :option="formList"
              @submit="submit"
            >
              <template v-slot:key5>
                根据options里的prop的值自定义元素
                <el-button>按钮</el-button>
              </template>
            </e-form>
          </el-dialog>
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
    <h2 class="f24 mt50 mb20">Event</h2>
    <el-table class="mb20" :data="eventList" border stripe>
      <el-table-column prop="name" width="120" label="name"></el-table-column>
      <el-table-column prop="info" label="说明"></el-table-column>
      <el-table-column prop="back" label="回调"></el-table-column>
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
  name: "eform",
  props: {},
  //import引入的组件需要注入到对象中才能使用
  components: { codePreview },
  data() {
    //这里存放数据
    return {
      visible: true,
      form: { a: "" },
      formList: formItem,
      compList: [
        {
          title: "基础用法",
          info:
            "会自动识别当前是否是在el-dialog组件里使用,适当调整底部按钮样式,底部按钮可自定义",
          code: ` <template v-if="index==0">
<el-button @click="visible=true">新增表单</el-button>
<el-dialog title="新增表单内容" v-dialogDrag :visible.sync="visible">
  <e-form
    v-model="form"
    refs="form"
    size="small"
    label-width="80px"
    lineSpace="15px"
    :gutter="10"
    :span="12"
    :option="formList"
    @submit="submit"
  >
    <template v-slot:key5>
      根据options里的prop的值自定义元素
      <el-button>按钮</el-button>
    </template>
  </e-form>
</el-dialog>
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
    },
    methods: {
      submit(form, done) {
        if (!form.key0) {
          return;
        }
        console.log("走了父级");
        form.a = "自定义参数";
        done(form);
    }
   },
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
          name: "api",
          info: "提交接口",
          type: "string",
          value: "-",
          default: "-"
        },
        {
          name: "label-position",
          info:
            "表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width",
          type: "string",
          value: "right/left/top",
          default: "right"
        },
        {
          name: "label-width",
          info:
            "表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。",
          type: "string",
          value: "-",
          default: "-"
        },
        {
          name: "label-suffix",
          info: "表单域标签的后缀",
          type: "string",
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
        },
        {
          name: "refs",
          info: "给表单设置ref,防止冲突使用refs",
          type: "string",
          value: "-",
          default: "-"
        },
        {
          name: "disabled",
          info:
            "是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效",
          type: "boolean",
          value: "-",
          default: "false"
        },
        {
          name: "btns",
          info:
            "表单按钮,包含打印按钮(print),submit(提交按钮),cancel(取消按钮)",
          type: "Array",
          value: "[print,submit,cancel,]",
          default: "[submit,cancel,]"
        }
      ],
      slotList: [
        {
          name: "-",
          info: "自定义e-form里所有内容"
        },
        {
          name: "-",
          info:
            "基于option数据里prop的值作为name,自定义某一项表单 参考基础用法里 [子站点] 项"
        },
        {
          name: "footer",
          info: "可自定义form底部操作内容"
        },
        {
          name: "insBtn",
          info: "保留form底部按钮的同时插入自定义内容"
        }
      ],
      eventList: [
        {
          name: "submit",
          info:
            "提交按钮事件. 根据api参数 自动进行保存 form 表单绑定的对象,done, 点击提交对form处理后执行done",
          back: "(form,done)"
        },
        {
          name: "cancel",
          info: "取消按钮事件. 如果不设置此按钮在dialog组件下下自动关闭dialog"
        },
        {
          name: "print",
          info: "自定义打印按钮"
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
    submit(form, done) {
      if (!form.key0) {
        return;
      }
      console.log("走了父级");
      form.a = "自定义参数";
      //这里也可以自定义接口 不走done
      done(form);
    }
  },
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