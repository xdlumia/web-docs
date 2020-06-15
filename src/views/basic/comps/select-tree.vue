/*
 * @Author: web.王晓冬
 * @Date: 2020-03-26 11:16:23
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-06-10 16:47:39
 * @Description: breadcrumb
 */
<template>
  <div class="mb50">
    <h1 class="f24 mt40">树选择组件</h1>
    <p class="mt10 f14 e-text-gray">弥补el组件空缺</p>
    <code-preview :data="compList">
      <template v-slot:comp="{row,index}">
        <template v-if="index==0">
          <p>value1: {{value1}}</p>
          <e-select-tree defaultExpandAll v-model="value1" :data="treeData"></e-select-tree>
        </template>
        <template v-if="index==1">
          <p>value2: {{value2}}</p>
          <e-select-tree multiple defaultExpandAll v-model="value2" :data="treeData"></e-select-tree>
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
  name: "select-tree",
  props: {},
  //import引入的组件需要注入到对象中才能使用
  components: { codePreview },
  data() {
    //这里存放数据
    return {
      value1: "",
      value2: [],
      compList: [
        {
          title: "基础用法",
          info: "下拉树单选",
          code: `<template>
  <p>value1: {{value1}}</p>
  <e-select-tree multiple defaultExpandAll v-model="value1" :data="treeData"></e-select-tree>
</template>
<script>
export default {
    data() {
      return {
        value1: '',
        treeData: [
        {
          label: "一级 1",
          id: 1,
          children: [
            {
              label: "二级 1-1",
              id: 2,
              children: [
                {
                  id: 3,
                  children: null,
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        }
      ]
      };
    },
};
</scipt>`,
          showCode: false
        },
        {
          title: "下拉多选用法",
          info: "支持多选",
          code: `<template>
  <p>value1: {{value1}}</p>
  <e-select-tree defaultExpandAll v-model="value1" :data="treeData"></e-select-tree>
</template>
<script>
export default {
    data() {
      return {
        value2: [],
        treeData: [
        {
          label: "一级 1",
          id: 1,
          children: [
            {
              label: "二级 1-1",
              id: 2,
              children: [
                {
                  id: 3,
                  children: null,
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        }
      ]
      };
    },
};
</scipt>`,
          showCode: false
        }
      ],
      treeData: [
        {
          label: "一级 1",
          id: 1,
          children: [
            {
              label: "二级 1-1",
              id: 2,
              children: [
                {
                  id: 3,
                  children: null,
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        }
      ],
      attrList: [
        {
          name: "value / v-model",
          info: "绑定值",
          type: "string / number / Array	",
          value: "-",
          default: "-"
        },
        {
          name: "data",
          info: "树列表项数据",
          type: "array",
          value: "-",
          default: "-"
        },
        {
          name: "api",
          info: "获取数据接口,如果使用接口获取树列表项使用此参数",
          type: "string",
          value: "-",
          default: "-"
        },
        {
          name: "params",
          info: "接口请求参数",
          type: "Object",
          value: "-",
          default: "-"
        },
        {
          name: "collapse-tags",
          info:
            "多选时是否将选中值按文字的形式展示,同el-select下的collapse-tags参数",
          type: "boolean",
          value: "-",
          default: "false"
        },
        {
          name: "disabled",
          info: "是否禁用",
          type: "boolean",
          value: "-",
          default: "false"
        },
        {
          name: "multiple",
          info: "是否多选,同el-select下的multiple参数",
          type: "boolean",
          value: "-",
          default: "false"
        },
        {
          name: "size",
          info: "输入框尺寸",
          type: "string",
          value: "medium/small/mini",
          default: "-"
        },
        {
          name: "placeholder",
          info: "占位符",
          type: "string",
          value: "-",
          default: "请选择"
        },
        {
          name: "node-key",
          info: "每个树节点用来作为唯一标识的属性，整棵树应该是唯一的",
          type: "string/number",
          value: "-",
          default: "id"
        },
        {
          name: "defaultExpandAll",
          info: "是否默认展开所有树节点",
          type: "boolean",
          value: "-",
          default: "false"
        },
        {
          name: "props",
          info:
            "树列表配置,同el-tree下的props   https://element.eleme.cn/#/zh-CN/component/tree#props",
          type: "Object",
          value: "-",
          default: "-"
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