/*
 * @Author: web.王晓冬
 * @Date: 2020-03-25 11:03:54
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-06-12 16:21:57
 * @Description: 基础包文档
 */
<template>
  <el-container>
    <el-aside width="200px">
      <ol class="side-nav mt20">
        <li v-for="(item,index) of catalogList" :key="index">
          <h4>
            <a
              :class="{active:activeIndex==item.id}"
              @click="jumpTarget($event)"
              :target="item.id"
            >{{index+1}}.{{item.label}}</a>
          </h4>
          <p v-for="(subItem,subIndex) of item.children" :key="subIndex">
            <a
              :class="{active:activeIndex==subItem.id}"
              @click="jumpTarget($event)"
              :target="subItem.id"
            >{{index+1}}-{{subIndex+1}}.{{subItem.label}}</a>
          </p>
        </li>
      </ol>
    </el-aside>
    <el-main class="main-content">
      <article class="entry-content">
        <!-- 接口返回参数说明 -->
        <section>
          <h1 id="toolInfo">工具库使用说明</h1>
          <el-table size="small" :data="toolInfoData" border style="width: 100%">
            <el-table-column prop="name" label="名称" width="180">
              <template slot-scope="{row}">
                <a :class="{'e-text-blue':row.link}" :href="row.link" target="_blank">{{row.name}}</a>
              </template>
            </el-table-column>
            <el-table-column prop="version" label="CDN版本" width="100">
              <template slot-scope="{row}">
                <el-popover v-if="row.cdn" placement="top-start" trigger="hover">
                  <p>{{row.cdn}}</p>
                  <el-button icon="el-icon-paperclip" @click="clipboard(row)">复制&lt;script>标签到剪切板</el-button>
                  <span slot="reference">{{row.version}}</span>
                </el-popover>
                <span slot="reference" v-else>-</span>
              </template>
            </el-table-column>
            <el-table-column prop="state" label="npm版本" width="142">
              <template slot-scope="{row}">
                <a :href="row.npmLink" target="_blank">
                  <img :src="row.state" alt />
                </a>
              </template>
            </el-table-column>
            <el-table-column prop="note" width="140" label="说明"></el-table-column>
            <el-table-column prop="cdn" label="CDN"></el-table-column>
          </el-table>
        </section>
        <section>
          <h1 id="vue">vue框架目录和文件说明</h1>
          <div v-highlight>
            <pre>
                    <code>
        |-- dist                             // build后目录
        |-- public                           
        |   |-- index.html                   // 入口html文件
        |-- src                              // 资源
        |   |-- api                          // api接口目录
        |       |-- index.js                 
        |-- style                          //共css文件
        |       |-- app.css              // 项目使用的css文件合集
        |       |-- common.css           // 公共css文件
        |   |-- assets                       // 公共资源文件
        |       |-- img                      // 图片文件目录
        |   |-- components                   // 公共组件目录
        |       |-- table.vue                  // 无权访问该页面提示组件
        |   |-- layout                      // 公共组件目录
        |       |-- 403.vue                  // 无权访问该页面提示组件
        |       |-- 404.vue                  // 该页面不存在提示组件
        |       |-- 500.vue                  // 服务器出错提示
        |       |-- login.vue                // 登录组件
        |       |-- layout.vue               // 框架组件
        |   |-- mixin                        // 全局mixin方法
        |       |-- index.js          
        |   |-- router                       // Vue 路由
        |       |-- index.js
        |   |-- store                        // Vuex Store文件
        |       |-- index.js       
        |   |-- util                         // 全局公用函数目录
        |       |-- directives.js            // vue自定义指令文件    
        |       |-- filter.js                // vue过滤器文件
        |       |-- verify.js                // 自定义验证
        |   |-- views                        // 项目所有页面文件目录
        |       |-- system                   // 系统管理目录(二级目录)            
        |           |-- role                 // 角色管理目录         
        |               |-- index.vue        // 角色管理入口文件      
        |               |-- role-list.vue    // 角色管理列表组件                        
        |   |-- App.vue                      // App入口文件
        |   |-- main.js                      // 程序入口文件，加载Vuex,Vue-router等插件
        |   |-- test                         // 测试目录，暂未使用
        |-- .gitignore                       // git ingnore
        |-- vue.config.js                    // cli配置文件
        |-- README.md                        // README
        |-- package.json                     // 项目及工具的依赖配置文件
                    </code>
                </pre>
          </div>
        </section>
        <section>
          <h1 id="flow">项目开发流程</h1>
          <ol>
            <li>前端人员熟悉原型 发现问题提前和产品对接</li>
            <li>和后台对接api接口</li>
            <li>
              前端⼈员搭建静态⻚页(根据后台提供的接口模拟数据)+写业务逻辑(建议后端使用swagger,前端搭建自己的easymock)
              <ul>
                <li>静态⻚页搭建完成,不不能有明显的样式错误</li>
                <li>查询,新增,修改,删除等相关操作</li>
                <li>输⼊入字段条件校验,如⼿手机号不不能超过11位或者 是汉字等相关明显性的验证</li>
              </ul>
            </li>
            <li>前后端联调</li>
          </ol>
        </section>
        <!-- HTML布局方式 -->
        <section>
          <h1 id="html">HTML布局方式</h1>
          <q>HTML作为描述网页结构的超文本标记语言，在百度一直有着广泛的应用。本文档的目标是使HTML代码风格保持一致，容易被理解和被维护。</q>
          <h2 id="htmlWarn" class="mb10">HTML注意事项</h2>
          <p class="force-use">[强制]页面中禁止直接写入变量值，任何时候都要如此，包括前后台联调之前</p>
          <p class="force-use">[强制]组件已满足要求的，必须使用组件，不得自行实现</p>
          <p class="force-use">[强制]base.css中定义样式能够满足的，禁止自己写样式</p>
          <p class="force-use">[强制]表单提交前必须先调用表单校验方法</p>
          <p class="force-use">[强制]查询/保存页面数据时，必须有遮罩层</p>
          <p class="force-use">[强制]所有按钮必须有权限控制</p>
          <p class="force-use">[强制]所有页面应支持响应式,最小分辨率为1200px</p>

          <!-- 命名 -->
          <h3>命名</h3>
          <p class="force-use">[强制] class 必须单词全字母小写，单词间以 - 分隔。</p>
          <p class="force-use">[强制] class 必须代表相应模块或部件的内容或功能，不得以样式信息进行命名。</p>示例:
          <div v-highlight>
            <pre><code class="lang-html">
<!-- good -->
&lt;div class="sidebar">&lt;/div>

&lt;!-- bad -->
&lt;div class="left">&lt;/div>

</code>
                </pre>
          </div>
          <!-- 标签 -->
          <h3>标签</h3>
          <p class="force-use">[强制]标签名必须使用小写字母</p>示例:
          <div v-highlight>
            <pre>
<code class="lang-html">
&lt;!-- good -->
&lt;p>Hello StyleGuide!&lt;/p>

&lt;!-- bad -->
&lt;P>Hello StyleGuide!&lt;/P>

</code>
                </pre>
          </div>

          <p class="force-use">[强制]对 HTML5 中规定允许省略的闭合标签，不允许省略闭合标签</p>示例:
          <div v-highlight>
            <pre>
<code class="lang-html">
&lt;!-- good -->
&lt;ul>
    &lt;li>first&lt;/li>
    &lt;li>second&lt;/li>
&lt;/ul>

&lt;!-- bad -->
&lt;ul>
    &lt;li>first
    &lt;li>second
&lt;/ul>

</code>
                </pre>
          </div>
          <p class="force-use">[强制]标签使用必须符合标签嵌套规则。</p>解释：
          <br />比如 div 不得置于 p 中，tbody 必须置于 table 中。
          <br />详细的标签嵌套规则参见
          <a href="http://www.softwhy.com/article-33-1.html" target="_blank">HTML DTD</a>
          中的 Elements 定义部分。
          <h3>公共css使用</h3>
          <p class="force-use">[强制] 常用样式必须使用公共css</p>
          <p>
            为了减少组件代码,合理布局规范,开发人员一定要非常熟悉base.css,合理使用公共css
            <br />参考:@assets/css/base.css
          </p>示例:
          <div v-highlight>
            <pre>
<code class="lang-html">
&lt;!-- good -->
&lt;div class="mr20">&lt;/div>

&lt;!-- bad -->
&lt;div style="margin-rigth:20px;">&lt;/div>


</code>
                </pre>
          </div>
          <!-- 布局规范 -->
          <h2 id="htmlLayout">布局规范</h2>
          <h3>Container 布局容器</h3>
          <q>适用于整个页面框架布局</q>
          <p class="force-use">
            [强制]页面的基本结构,必须使用element-ui的Container 布局容器布局
            参考:
            <a
              target="_blank"
              href="http://element.eleme.io/#/zh-CN/component/container"
            >Container 布局容器</a>
          </p>示例:
          <div v-highlight>
            <pre>
<code class="lang-html">
&lt;!-- 左侧固定宽度200.右侧自适应布局-->
&lt;el-container>
  &lt;el-aside width="200px">
  //添加滚动条
  <el-scrollbar>
      Aside
  </el-scrollbar>
  &lt;/el-aside>
  &lt;el-main>Main&lt;/el-main>
&lt;/el-container>
</code>
                </pre>
          </div>
          <h3>Layout 布局</h3>
          <q>适用于局部上下或者左右布局</q>
          <p class="force-use">
            [强制]局部布局,必须使用element-ui的Layout 布局
            参考:
            <a
              target="_blank"
              href="http://element.eleme.io/#/zh-CN/component/layout"
            >Layout 布局</a>
          </p>示例:
          <div v-highlight>
            <pre>
<code class="lang-html">
&lt;el-row :gutter="20">
  &lt;el-col :span="12">&lt;div class="grid-content bg-purple">左侧内容&lt;/div>&lt;/el-col>
  &lt;el-col :span="12">&lt;div class="grid-content bg-purple">右侧内容&lt;/div>&lt;/el-col>
&lt;/el-row>
</code>
                </pre>
          </div>
          <h3>Form表单</h3>
          <p class="force-use">
            [强制]表单里的每个字段必须添加prop属性,需要添加验证规则
            参考:
            <a
              target="_blank"
              href="http://element.eleme.io/#/zh-CN/component/form"
            >Form表单</a>
          </p>
          <p>解释:在使用 validate、resetFields 方法的情况下，该属性是必填的,避免在需求修改需要适用此方法的时候需要二次添加prop属性</p>示例:
          <div v-highlight>
            <pre>
<code class="lang-html">
&lt;el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px">
  &lt;el-form-item
    label="年龄"
    prop="age"
    :rules="[
      { required: true, message: '年龄不能为空'},
      { type: 'number', message: '年龄必须为数字值'}
    ]">
    &lt;el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off">&lt;/el-input>
  &lt;/el-form-item>
&lt;/el-form>
</code>
                </pre>
          </div>
          <p class="force-use">[强制]输入框的placeholder 提示语必须填写</p>
          <p class="force-use">[强制]表单提交前必须先调用表单校验方法</p>
          <p class="force-use">[强制]查询/保存表单数据时，必须有loading遮罩层，查询时，给用户加载提示，保存时，同时可避免用户多次点击</p>示例:
          <div v-highlight>
            <pre>
<code class="lang-javascript">
//form表单要有loading遮罩
&lt;el-form :model="numberValidateForm" v-loading="loading" ref="numberValidateForm" label-width="100px">
  &lt;el-form-item
    label="年龄"
    prop="age">
    &lt;el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off">&lt;/el-input>
  &lt;/el-form-item>
&lt;/el-form>

</code>
                </pre>
          </div>
        </section>
        <section>
          <h1 id="vuejs">VueJS开发规范</h1>
          <q>
            基于组件化开发, js书写规范参考
            <a href="http://www.css88.com/archives/8345#events" target="_blank">
              Airbnb JavaScript
              编码规范(涵盖 ECMAScript 6+)
            </a>
          </q>
          <h2 id="vueWarn" class="mb10">vue开发注意事项</h2>
          <p class="force-use">[强制]禁止出现flag1,flag2这样的无意义命名</p>
          <p class="force-use">[强制]状态标识的，在引入状态时，必须注释各个状态的意义</p>
          <p class="force-use">[强制]所有文件夹，文件名，变量必须遵循命名规范</p>
          <p class="force-use">[强制]复杂的业务逻辑,必须有注释说明</p>

          <h2 id="vueComp">基于组件化开发理解</h2>
          <h3>组件化的好处</h3>
          <ol>
            <li>提高开发效率</li>
            <li>方便重复使用</li>
            <li>简化调试步骤</li>
            <li>提升整个项目的可维护性</li>
            <li>便于协同开发</li>
            <li>使其高内聚，低耦合，达到分治与复用的目的</li>
          </ol>
          <h3>Vue组件化开发</h3>
          <ol>
            单文件系统，样式局部作用域
            <br />基本组成结构：&lt;template/> &lt;script/> &lt;style scoped/>
            <br />组件注册方式：1.公共组件全局注册 2.其余组件局部注册
          </ol>

          <h2 id="vueRename">命名规范</h2>
          <q>命名要简洁并附有语义化,需要多个单词命名的需要 名词+动词 方式命名</q>

          <h3>文件夹命名命名</h3>
          <p class="force-use">[强制]views 下面的文件夹代表着模块的名字，由名词组成，并且尽量使用单个名词</p>
          <p class="force-use">[强制]多个单词的,用驼峰的方式命名</p>示例:
          <br />
          <img src="@/assets/img/folder.png" alt />

          <h3>文件命名</h3>
          <p class="force-use">[强制]除了index.vue外,所有文件名至少两个单词(名词-动词),以中划线区分,</p>示例:
          <br />
          <img src="@/assets/img/file.png" alt />

          <h3>代码命名</h3>
          <p class="force-use">[强制]变量名遵循驼峰命名法，其单词必须是与上下文关系的有意义的且前缀应当是名词，循环标记除外。</p>
          <p class="force-use">[强制]方法遵循驼峰命名法，前缀应当是动词，代表了方法要执行的基本逻辑动作,(建议后端也使用这种方式.保持前后端统一)</p>示例:
          <div v-highlight>
            <pre class="js">
    <code>
    init:代表初始化
    is:代表是否
    set:代表设置
    get:代表获取
    load:代表加载
    del:代表删除
    save:代表保存
    update:代表编辑更新
    add:代表新增
   
    方式示例:
    //添加部门
    addDept(){...}
    //保存部门
    saveDept(){...}
    
</code>
                </pre>
          </div>

          <h2 id="vueStr">结构化规范</h2>

          <h3>Vue文件基本结构</h3>示例:
          <div v-highlight>
            <pre>
<code>
&lt;template>
 &lt;div class>&lt;/div>
&lt;/template>

&lt;script>
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "",
  components: {},
  props: {},
  //import引入的组件需要注入到对象中才能使用
  data() {
    //这里存放数据
    return {};
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  beforeCreate() {}, //生命周期 - 创建之前
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  beforeMount() {}, //生命周期 - 挂载之前
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
&lt;/script>
&lt;style lang='scss' scoped>
//@import url(); 引入公共css类
&lt;/style>
</code>
                </pre>
          </div>
          <h3>Vue文件方法声明顺序</h3>
          <div v-highlight>
            <pre>
    <code>
    name
    components
    props
    data,
    beforeCreate
    created
    beforeMount
    mounted
    beforeUpdate
    updated
    computed
    watch
    methods
    beforeDestroy
    destroyed
    activated
    </code>
                </pre>
          </div>
          <h2 id="vueNoting">注释规范</h2>
          <q>代码注释在一个项目的后期维护中显的尤为重要，所以我们要为每一个被复用的组件编写组件使用说明，为组件中每一个方法编写方法说明。以下情况，务必添加注释</q>

          <ol>
            <li>
              公共组件使用说明注释
              <div v-highlight>
                <pre>
    <code>
/*
 * @Author: web.王晓冬
 * @Date: 2020-03-25 18:12:38
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-06-04 11:39:27
 * @Description: 面包屑组件 #显示当前页面的路径，快速返回之前的任意页面。
 * @axample=1 &title=基本用法 &info=默认获取router里mate对象里的title字段文本 
 &lt;e-breadcrumb>&lt;/e-breadcrumb>
 */
    </code>
                        </pre>
              </div>
            </li>
            <li>
              各组件中重要函数或者类说明
              <div v-highlight>
                <pre>
    <code>
    /**
     * @description 统一 GET 请求
     * @param url
     * @param params --> GET 请求参数
     */
    </code>
                </pre>
              </div>
            </li>
            <li>
              复杂的业务逻辑处理说明
              <div v-highlight>
                <pre>
    <code>
    /**
     * @description 统一 GET 请求
     * 业务逻辑实现说明
     */
    </code>
                        </pre>
              </div>
            </li>
            <li>特殊情况的代码处理说明,对于代码中特殊用途的变量、存在临界值、函数中使用的hack、使用了某种算法或思路等需要进行注释描述</li>
            <li>注释块必须以/**（至少两个星号）开头**/；</li>
            <li>单行注释使用//；</li>
          </ol>

          <h2 id="vueCode">编码规范</h2>
          <br />
          <div v-highlight>
            <pre class="js">
<code>
    1.使用ES6风格编码源码
        定义变量使用let ,定义常量使用const
        使用export ，import 模块化
    2.组件 props 原子化
        提供默认值
        使用 type 属性校验类型
        使用 props 之前先检查该 prop 是否存在
    3.避免 this.$parent
    4.谨慎使用 this.$refs
    5.无需将 this 赋值给 component 变量
    6.调试信息console.log() debugger 使用完及时删除
</code>
                </pre>
          </div>
        </section>

        <!-- ajax数据请求 -->
        <section>
          <h1 id="ajax">ajax数据请求</h1>
          <br />
          <h2 id="ajaxWarn" class="mb10">数据请求注意事项</h2>
          <p class="force-use">[强制]所有访问请求使用$api.xxxxService或者window.g.ApiUrl，禁止vue文件中直接写访问地址</p>
          <p class="force-use">[强制]涉及多个接口的复杂页面，必须在《前端实现设计文档 》中描述清楚</p>
          <p class="force-use">[强制]开发页面初期，就必须使用API接口</p>
          <p class="force-use">[强制]请求回来的数据必须做数据错误处理 ||</p>示例:
          <div v-highlight>
            <pre>
<code class="lang-javascript">
    //必须使用$api.xxxxService.getxxx)(params) 方式请求
    this.$api.getUserInfo(this.baseRoomId)
    .then(res => {
        //必须做数据错误处理
        //如果是数据是对象
        this.obj = res.data || {}; 
        //如果是数据是数组
        this.array = res.data || []; 
        //如果是数据是字符串
        this.string = res.data || ''; 
    })
</code>
                </pre>
          </div>
        </section>
      </article>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: "index",
  components: {},
  data() {
    return {
      activeIndex: "#toolInfo",
      catalogList: [
        {
          label: "工具库使用说明",
          id: "#toolInfo"
        },
        {
          label: "项目开发流程",
          id: "#flow"
        },
        {
          label: "HTML规范",
          id: "#html",
          children: [
            {
              label: "HTML注意事项",
              id: "#htmlWarn"
            },
            {
              label: "布局规范",
              id: "#htmlLayout"
            }
          ]
        },
        {
          label: "VueJS开发规范",
          id: "#vuejs",
          children: [
            {
              label: "vue开发注意事项",
              id: "#vueWarn"
            },
            {
              label: "基于组件化开发理解",
              id: "#vueComp"
            },
            {
              label: "命名规范",
              id: "#vueRename"
            },
            {
              label: "结构化规范",
              id: "#vueStr"
            },
            {
              label: "注释规范",
              id: "#vueNoting"
            },
            {
              label: "编码规范",
              id: "#vueCode"
            }
          ]
        },
        {
          label: "ajax数据请求",
          id: "#ajax",
          children: [
            {
              label: "ajax注意事项",
              id: "#ajaxWarn"
            }
          ]
        }
      ],
      // 工具库使用说明
      toolInfoData: [
        {
          name: "省市二级联动",
          version: "1.0",
          note: "cityTwo",
          state: "",
          cdn: "http://statics.easyliao.com/web/dictionary-library/cityThree.js"
        },
        {
          name: "省市区三级联动",
          version: "1.0",
          note: "cityThree",
          cdn:
            "http://statics.easyliao.com/web/dictionary-library/municipalityCityThree.js"
        },
        {
          name: "vue",
          version: "2.6.11",
          note: "Vue",
          state: "https://img.shields.io/npm/v/vue.svg",
          cdn: "http://statics.easyliao.com/web/vue/vue/2.6.11/vue.min.js",
          link: "https://cn.vuejs.org/",
          npmLink: "https://www.npmjs.com/package/vue"
        },
        {
          name: "vue-cli",
          version: "4.x",
          note: "vue脚手架",
          state: "https://img.shields.io/npm/v/@vue/cli.svg",
          cdn: "",
          link: "https://cli.vuejs.org/zh/",
          npmLink: "https://npmjs.com/package/@vue/cli"
        },
        {
          name: "vuex",
          version: "3.1.2",
          note: "vuex",
          state: "https://img.shields.io/npm/v/vuex.svg",
          cdn: "http://statics.easyliao.com/web/vue/vuex/3.1.2/vuex.min.js",
          link: "https://vuex.vuejs.org/zh/",
          npmLink: "https://npmjs.com/package/vuex"
        },
        {
          name: "vue-router",
          version: "3.1.5",
          note: "vue-router",
          cdn:
            "http://statics.easyliao.com/web/vue/vue-router/3.1.5/vue-router.min.js",
          state: "https://img.shields.io/npm/v/vue-router.svg",
          link: "https://router.vuejs.org/zh/",
          npmLink: "https://npmjs.com/package/vue-router"
        },
        {
          name: "element-ui",
          version: "2.13.1",
          note: "UI框架",
          cdn:
            "http://statics.easyliao.com/vue/element-ui/2.13.1/index.js,http://statics.easyliao.com/vue/element-ui/2.13.1/theme-chalk/index.css",
          state: "https://img.shields.io/npm/v/element-ui.svg",
          link: "https://element.eleme.cn/#/zh-CN/",
          npmLink: "https://npmjs.com/package/vue-router"
        },
        {
          name: "axios",
          version: "0.18.0",
          note: "数据请求",
          cdn: "",
          state: "https://img.shields.io/npm/v/axios.svg",
          link: "https://github.com/axios/axios",
          npmLink: "https://npmjs.com/package/axios"
        },
        {
          name: "fingerprintjs2",
          version: "2.x",
          note: "浏览器指纹获取",
          cdn: "",
          state: "https://img.shields.io/npm/v/fingerprintjs2.svg",
          link: "https://github.com/Valve/fingerprintjs2",
          npmLink: "https://www.npmjs.com/package/fingerprintjs2"
        },
        {
          name: "js-base64",
          version: "2.x",
          note: "base64加密",
          cdn: "",
          state: "https://img.shields.io/npm/v/js-base64.svg",
          link: "https://github.com/dankogai/js-base64",
          npmLink: "https://www.npmjs.com/package/js-base64"
        },
        {
          name: "moment",
          version: "2.x",
          note: "日期处理类库",
          cdn: "",
          state: "https://img.shields.io/npm/v/moment.svg",
          link: "http://momentjs.cn/",
          npmLink: "https://www.npmjs.com/package/moment"
        },
        {
          name: "vuedraggable",
          version: "2.x",
          note: "拖拽工具",
          cdn: "",
          state: "https://img.shields.io/npm/v/vuedraggable.svg",
          link: "https://sortablejs.github.io/Vue.Draggable/",
          npmLink: "https://www.npmjs.com/package/vuedraggable"
        },
        {
          name: "vue-baidu-map",
          version: "0.21",
          note: "百度地图vue版",
          cdn: "",
          state: "https://img.shields.io/npm/v/vue-baidu-map.svg",
          link: "https://github.com/Dafrok/vue-baidu-map#readme",
          npmLink: "https://www.npmjs.com/package/vue-baidu-map"
        },
        {
          name: "vue-video-player",
          version: "5.x",
          note: "播放器插件",
          cdn: "",
          state: "https://img.shields.io/npm/v/vue-video-player.svg",
          link: "https://github.com/surmon-china/vue-video-player#readme",
          npmLink: "https://www.npmjs.com/package/vue-video-player"
        },
        {
          name: "echarts",
          version: "4.x",
          note: "echarts图表基础库",
          cdn: "",
          state: "https://img.shields.io/npm/v/echarts.svg",
          link: "https://echarts.apache.org/zh/index.html",
          npmLink: "https://www.npmjs.com/package/echarts"
        },
        {
          name: "vue-echarts",
          version: "5.x",
          note: "百度图表库,使用此库必须有echarts",
          cdn: "",
          state: "https://img.shields.io/npm/v/vue-echarts.svg",
          link: "https://github.com/ecomfe/vue-echarts",
          npmLink: "https://www.npmjs.com/package/vue-echarts"
        }
      ]
    };
  },
  watch: {},
  created() {},
  mounted() {
    this.onScroll();
  },
  methods: {
    jumpTarget(e) {
      let id = e.target.getAttribute("target");
      this.activeIndex = id;
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    },
    clipboard(row) {
      let url = "";
      if (row.name == "element-ui") {
        let datas = row.cdn.split(",");
        url = `<link rel="stylesheet" href="${datas[1]}><scrip${""}t src="${
          datas[0]
        }"></scrip${""}t>`;
      } else {
        url = row.cdn;
      }
      let oInput = document.createElement("input");
      oInput.value = url;
      document.body.appendChild(oInput);
      oInput.select(); // 选择对象;
      document.execCommand("Copy"); // 执行浏览器复制命令
      document.body.removeChild(oInput);
      this.$message({
        message: "已复制到剪切板",
        type: "success"
      });
    },
    onScroll() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        let baseEl = document.querySelector(".main-content");
        const flatArray = arr => {
          return arr.reduce(
            (pre, cur) =>
              pre.concat(
                Array.isArray(cur.children) ? flatArray(cur.children) : cur
              ),
            []
          );
        };
        let elArr = flatArray(this.catalogList).map(v => ({
          dom: document.querySelector(v.id),
          id: v.id
        }));
        baseEl.onscroll = () => {
          elArr.forEach(item => {
            if (
              item.dom.getBoundingClientRect().top > 0 &&
              item.dom.getBoundingClientRect().top < 50
            ) {
              this.activeIndex = item.id;
            }
          });
        };
      }, 300);
    }
  }
};
</script>
<style lang="scss" scoped>
.side-nav li p {
  color: #999;
  font-size: 14px;
  margin-left: 20px;
}
section h1 {
  font-size: 25px;
  font-weight: 500;
  margin: 30px 0 30px 0;
}
.entry-content {
  padding: 10px;
}
.entry-content ul,
.entry-content ol {
  margin: 0 0 1.5em 3em;
}
.entry-content ol li {
  list-style: decimal;
  color: #666;
}
.entry-content p.force-use {
  color: #ef4e00;
}
.entry-content h3 {
  margin-top: 20px;
  line-height: 30px;
  font-size: 20px;
  color: #333;
}
</style>
