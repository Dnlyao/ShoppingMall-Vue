<template>
  <div class="DetaiMain">
    <dvi class="DetailIndex">
      <div class="DetailImgs">
        <el-image :src="this.detailList.img"></el-image>
      </div>
      <div class="DetailText">
        <h2 class="DetaiTitle">{{this.detailList.title}}</h2>
        <p class="DetaiDetai">{{this.detailList.detail}}</p>
        <span class="Detailprice">
          <span class="yhh-price-tag">¥</span>
          {{this.detailList.price}}
        </span>
        <el-button type="success">购买</el-button>
      </div>
    </dvi>
    <div class="DetailIntroduction">
      <p>{{this.detailList.introduction}}</p>
    </div>
  </div>
</template>
<script>
import { get, post } from "../../../api/api";

export default {
  data() {
    return {
      detailList: {
        title: "测试名称", //名称
        detail: "主要功能，介绍", //简介
        img:
          "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png", //图片
        price: "123", //价格
        introduction: "asdasdasdasdsd", //详细介绍
      },
      indexlWidth: null,
    };
  },
  mounted() {
    this.getDetail();
    this.getWidth();
  },
  methods: {
    async getDetail() {
      //获取详情
      let id = this.$route.query.id;
      console.log(id);
      get("/getdetail", { id: id }).then((res) => {
        this.detailList = res.data;
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
.DetailIndex {
  display: flex;
  border: 2px solid black;
}
.DetailIntroduction {
  text-align: center;
}
.DetailImgs {
  padding: 0px 30px;
  width: 600px;
}
.DetaiTitle {
  padding: 0px 20px;
  text-align: left;
  font-size: 24px;
  font-weight: 400;
  margin-top: 15px;
  margin-bottom: 18px;
}
.DetaiDetai {
  padding: 0px 20px;
  text-align: left;
}
.DetailText {
  background-color: white;
  width: 100%;
}
.Detailprice {
  display: block;
  color: #f50;
  font-size: 20px;
  text-align: left;
  padding: 0px 20px;
}
.DetailOrter {
  width: 100%;
}
</style>