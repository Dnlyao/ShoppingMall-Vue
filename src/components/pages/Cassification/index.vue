<template>
  <div
    class="ClassIndex"
    style="min-width:500px"
  >
    <div
      class="classShow"
      v-for="(item,index) in this.goodslist "
    >
      <dvi class="ClassIndex-left">
        <div class="classImg">
          <el-image :src="item.img"></el-image>
        </div>
      </dvi>
      <dvi class="ClassIndex-right">
        <div class="classTitle">
          <h2>{{item.title}}</h2>
        </div>
        <div class="classDetail">
          <p>{{item.detail}}</p>
        </div>
        <span class="Classprice">
          <span class="yhh-price-tag">¥</span>
          {{item.price}}
        </span>
      </dvi>
    </div>
  </div>
</template>

<script>
import { get, post } from "../../../api/api";

export default {
  data() {
    return {
      goodslist: [
        {
          type: "weixin",
          id: "1",
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          title: "汉堡测试",
          detail: "asdasd",
          price: "123",
        },
        {
          id: "2",
          type: "weixin",
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          title: "汉堡小程序",
          detail: "",
        },
        {
          id: "3",
          type: "system",
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          title: "汉堡系统",
          detail: "",
        },
        {
          id: "4",
          type: "app",
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          title: "汉堡APP",
          detail: "",
        },
        {
          id: "3",
          type: "app",
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          title: "汉堡APP",
          detail: "",
        },
      ],
    };
  },
  mounted() {
    this.getDetail();
    this.getWidth();
  },
  methods: {
    async getDetail() {
      //获取详情
      let type = this.$route.query.name; //获取query，根据tyep查找商品
      get("/getgoodslist", { type: type }).then((res) => {
        this.goodslist = res.data;
      });
    },
    getWidth() {
      this.indexlWidth = document.body.clientWidth - 500;
      console.log(this.indexlWidth);
    },
  },
};
</script>

<style>
.ClassIndex-left {
  float: left;
}
.classShow {
  min-height: 250px;
}
.Classprice {
  display: block;
  color: #f50;
  font-size: 20px;
  padding: 0px 20px;
}
</style>