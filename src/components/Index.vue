<template>
  <div class="Indexmain">
    <div class="Indexcarousel">
      <el-carousel
        :interval="5000"
        arrow="always"
      >
        <el-carousel-item
          v-for="(item,index) in imgList"
          :key="index"
        >
          <el-image :src="item.img"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div style="display:flex;background-color: white;    border-top:2px solid black; border-bottom:2px solid black; ">
      <h3> <i class="el-icon-s-opportunity"></i>热门推荐</h3>
    </div>

    <div class="recommend">
      <el-row class="recommend-row">
        <el-col
          :span="6"
          v-for="(item, index) in recommendList"
          :key="index"
        >
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.img">
            <div>
              <div class="bottom clearfix">
                <el-button
                  type="text"
                  class="button"
                  @click="getDetail(item.id)"
                >{{item.title}}</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
import { get, post } from "../api/api";

export default {
  data() {
    return {
      indexlWidth: null,
      imgList: [
        {
          img:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg",
        },
        {
          img:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg",
        },
        {
          img:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg",
        },
      ],
      recommendList: [
        {
          id: "1",
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          title: "汉堡测试",
        },
        {
          id: "2",
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          title: "汉堡小程序",
        },
        {
          id: "3",

          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          title: "汉堡系统",
        },
        {
          id: "1",

          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          title: "汉堡APP",
        },
        {
          id: "1",

          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          title: "汉堡APP",
        },
      ],
      anu: "",
    };
  },
  mounted() {
    //初始化页面时获取导航列表
    get("/getindexlist").then((res) => {
      //获取跑马灯列表
      res.data = this.imgList;
    });
    get("/getidnex_recommendlist").then((res) => {
      //获取推荐列表
      res.data = this.recommendList;
    });
  },
  methods: {
    getDetail(id) {
      console.log(id);
      //id为查询标识，根据一个字段查询商品详情
      this.$router.push({
        path: "/Detail",
        query: { id: id },
      });
    },
  },
};
</script>

<style>
.Indexcarousel {
  margin: 0 auto;
  width: 500px;
  padding: 30px 0px;
}
.Indexmain {
  margin: 0 auto;
  background-color: aliceblue;
}
.imgTitle {
  background-color: antiquewhite;
  height: 20px;
}
.recommend {
  display: flex;
}
.recommend-row {
  width: 100%;
  background-color: #fff;
}
</style>