<template>
  <div class="Navmain">
    <div
      class="nav"
      :style="'width:'+this.NavWidth+'px'"
    >
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        :router='true'
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item>图标</el-menu-item>
        <template v-for="(item,index) in navList">
          <el-submenu
            v-if="item.children"
            :index="item.index"
          >
            <template slot="title">{{item.name}}</template>
            <el-menu-item
              v-for="(c,index) in item.children"
              :key="index"
              :index="c.index"
            >{{c.name}}</el-menu-item>
          </el-submenu>
          <el-menu-item
            v-else
            :index='item.index'
          >{{ item.name }}</el-menu-item>
        </template>
      </el-menu>

    </div>
    <div class="login">
      <el-button
        type="primary"
        plain
        icon="el-icon-user"
      >登录</el-button>
      <el-button
        type="success"
        plain
        icon="el-icon-user"
      >注册</el-button>
    </div>
  </div>
</template>

<script>
import { get, post } from "../api/api";
export default {
  data() {
    return {
      NavWidth: null,
      activeIndex: "/",
      navList: [
        { index: "/", name: "首页" },
        {
          index: "2",
          name: "分类",
          children: [
            { index: "/class?name=weixin", name: "小程序" },
            { index: "/class?name=system", name: "系统" },
            { index: "/class?name=app", name: "APP" },
          ],
        },
        { index: "coupon", name: "特价优惠" },
      ],
    };
  },
  mounted() {
    //初始化页面时获取导航列表
    get("/getnavlist").then((res) => {
      res.data = this.navList;
    });
    this.getWidth();
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    getWidth() {
      //导航栏长度
      this.NavWidth = document.body.clientWidth - 200;
      console.log(this.NavWidth);
    },
  },
};
</script>


<style>
.Navmain {
  background-color: #545c64;
  display: flex;
  text-align: center;
}

.login {
  margin: 0% auto;
  padding-top: 10px;
}
</style>

<style scoped>
.el-menu.el-menu--horizontal {
  border-bottom: 0px;
}
</style>
