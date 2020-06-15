/*
 * @Author: web.王晓冬
 * @Date: 2020-06-10 11:02:13
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-06-12 15:05:31
 * @Description: 私有包发布到npm教程
*/
<template>
  <div>
    <h1 class="f24">e-web-basic发布到私有包</h1>
    <p class="mt10 f14 e-text-gray">快速发布到自己搭建的npm仓库</p>
    <fieldset class="e-fieldset mt20 pl10 pr10">
      <legend class="f20">npm publish</legend>
      <p class="mt20">
        私有包地址:
        <a
          href="http://svn.kinfe.net:8082/#browse/browse:easyliao-nmp-hosted"
          target="_blank"
          class="e-text-blue"
          rel="noopener noreferrer"
        >http://svn.kinfe.net:8082/#browse/browse:easyliao-nmp-hosted</a>
      </p>
      <p class="e-text-red">必须在dev分支下push后 才能使用npm run pub命令</p>
      <div v-highlight>
        <pre>
            <code>
//当前npm仓库切换到私有仓库
npm config set registry http://svn.kinfe.net:8082/repository/easyliao-npm-all/

//登陆npm账号 输入账号 密码 邮箱(邮箱随意)
npm adduser -registry  http://svn.kinfe.net:8082/repository/easyliao-nmp-hosted/

//切换到web_basic目录下
npm run pub  //自动打tag并且合并到master 发布
//或
npm publish //npm官方发布命令
            </code>
          </pre>
      </div>
    </fieldset>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "publish",
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