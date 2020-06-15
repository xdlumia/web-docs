/*
 * @Author: web.王晓冬
 * @Date: 2020-06-04 18:17:16
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-06-10 10:19:03
 * @Description: sidebar
*/
<template>
  <div class="mb50">
    <h1 class="f24 mt40">e-side-bar 侧边栏组件</h1>
    <p class="mt10 f14 e-text-gray">快速实现侧边栏详情内容,</p>
    <code-preview :data="compList">
      <template v-slot:comp="{row,index}">
        <template v-if="index==0">
          <p class="mt20 mb20">
            组件有两种显示模式分别是
            <el-tag class="mr5">ver</el-tag>
            <el-tag class="mr5">hor</el-tag>,
            默认以
            <el-tag class="mr5">hor</el-tag>模式显示.
            组件内默认包含
            <el-tag class="mr5">访客对话</el-tag>
            <el-tag class="mr5">访客留言</el-tag>
            <el-tag class="mr5">详细信息</el-tag>三个tab页,
            可通过
            <el-tag class="mr5">show</el-tag>参数 对组件显示位置排序,添加自定义组件,替换自定义组件
          </p>
          <el-radio-group v-model="form.mode">
            <el-radio label="hor">水平模式</el-radio>
            <el-radio label="ver">垂直模式</el-radio>
          </el-radio-group>
          <el-container>
            <el-main>
              <e-table ref="table" border api="mockGetUser" :params="{}" style="height:300px">
                <el-table-column type="selection" width="60"></el-table-column>
                <el-table-column label="姓名" prop="name">
                  <template slot-scope="{row,$index}">
                    <div class="e-text-blue e-pointer" @click="click(row,$index)">{{row.name}}</div>
                  </template>
                </el-table-column>
                <el-table-column label="城市" prop="city"></el-table-column>
                <el-table-column label="文本" prop="ctitle"></el-table-column>
                <el-table-column label="email" prop="email"></el-table-column>
              </e-table>
            </el-main>
            <e-side-bar
              :mode="form.mode"
              id="10"
              :visible.sync="visible"
              :show="show"
              width="400px"
              height="300px"
            ></e-side-bar>
          </el-container>
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
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
import codePreview from "@/components/code-preview";
export default {
  name: "side-bar",
  props: {},
  //import引入的组件需要注入到对象中才能使用
  components: { codePreview },
  data() {
    //这里存放数据
    return {
      visible: false,
      show: [
        "访客留言",
        "详细信息",
        { label: "访客对话", props: { bubble: true, avatar: true } },
        {
          label: "自定义",
          comp: codePreview,
          props: {
            data: [
              {
                title: "基础用法"
              }
            ]
          }
        }
      ],
      form: {
        mode: "hor"
      },
      compList: [
        {
          title: "基础用法",
          info: "必须基于el-container 布局容器使用",
          code: `<template>
  <el-container>
    <el-main>
      <e-table ref="table" border api="mockGetUser" :params="{}" style="height:200px">
        <el-table-column type="selection" width="60"></el-table-column>
        <el-table-column label="姓名" prop="name">
          <template slot-scope="{row,$index}">
            <div class="e-text-blue e-pointer" @click="click(row,$index)">{{row.name}}</div>
          </template>
        </el-table-column>
        <el-table-column label="城市" prop="city"></el-table-column>
        <el-table-column label="文本" prop="ctitle"></el-table-column>
        <el-table-column label="email" prop="email"></el-table-column>
      </e-table>
    </el-main>
    <e-side-bar
      :mode="form.mode"
      id="10"
      :visible.sync="visible"
      :show="show"
      width="400px"
      height="200px"
    ></e-side-bar>
  </el-container>
</template>
<script>
export default {
    data() {
      return {
        form: {
          visible: false,
        },
      };
    },
    methods: {
    click(item, index) {
      this.visible = true;
      if (index == 0) {
        this.$message.success("点我 侧边栏 展示访客对话和自定义组件");
        this.show = [
          //label: tab名, comp: 自定义组件,  prop:当前引用组件的props参数,icon:当组件图标  mode 为 ver(垂直模式)才生效
          {
            label: "访客对话",
            props: { bubble: true, avatar: true, icon: "el-icon-arrow-left" }
          },
          {
            label: "自定义",
            comp: codePreview,
            props: {
              data: [ { title: "基础用法"} ]
            }
          }
        ];
      } else if (index == 1) {
        this.$message.success("点我 侧边栏 展示 访客留言 和 详细信息");
        this.show = ["访客留言", "详细信息"];
      } else if (index == 2) {
        this.$message.success("点我 侧边栏 显示默认组件");
        this.show = false;
      }
    }
  },
  };
</scipt>`,
          showCode: false
        }
      ],
      attrList: [
        {
          name: "mode",
          info: "显示模式,支持两种显示模式 水平模式和垂直模式",
          type: "string",
          value: "ver/hor",
          default: "hor"
        },
        {
          name: "id",
          info: "根据api接口请求的参数",
          type: "string/number",
          value: "-",
          default: ""
        },
        {
          name: "show",
          info:
            "默认包含 访客对话/访客留言/详细信息 三个模块,通过此参数对显示位置排序,添加自定义组件,替换自定义组件",
          type: "array",
          value: "-",
          default: "['访客对话','访客留言','详细信息']"
        },
        {
          name: "width",
          info: "组件宽度",
          type: "string",
          value: "-",
          default: "460px"
        },
        {
          name: "height",
          info: "组件高度",
          type: "string", 
          value: "-",
          default: "100%"
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
    click(item, index) {
      this.visible = true;
      if (index == 0) {
        this.$message.success("点我 侧边栏 展示访客对话和自定义组件");
        this.show = [
          //label: tab名, comp: 自定义组件,  prop:当前引用组件的props参数,icon:当组件mode 为 ver(垂直模式)才生效
          {
            label: "访客对话",
            props: { bubble: true, avatar: true, icon: "el-icon-arrow-left" }
          },
          {
            label: "自定义",
            comp: codePreview,
            props: {
              data: [
                {
                  title: "基础用法"
                }
              ]
            }
          }
        ];
      } else if (index == 1) {
        this.$message.success("点我 侧边栏 展示 访客留言 和 详细信息");
        this.show = ["访客留言", "详细信息"];
      } else if (index == 2) {
        this.$message.success("点我 侧边栏 显示默认组件");
        this.show = false;
      }
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