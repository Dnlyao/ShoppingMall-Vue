<template>
  <div>
    <bar-Nav />
    <el-main :style="'width:'+this.indexlWidth+'px'">
      <router-view />
    </el-main>
    <el-footer>Footer</el-footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  components: {
    "bar-Nav": NavBar,
  },
  data() {
    return { indexlWidth: null };
  },
  mounted() {
    this.getWidth();
  },
  methods: {
    getWidth() {
      //导航栏长度
      this.indexlWidth = document.body.clientWidth - 200;
      console.log(this.indexlWidth);
    },
  },
};
</script>

<style >
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  text-align: center;
  padding: 0;
  margin: 0 auto;
  min-height: 500px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
