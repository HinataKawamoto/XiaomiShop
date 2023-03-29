<template>
  <div>
    <div class="title">
      <ul class="ul-left">
        <li><a href="">小米商城</a></li>
        <li><a href="">MIUI</a></li>
        <li><a href="">loT</a></li>
        <li><a href="">云服务</a></li>
        <li><a href="">金融</a></li>
        <li><a href="">有品</a></li>
        <li><a href="">小爱开放平台</a></li>
        <li><a href="">企业团购</a></li>
        <li><a href="">资质证照</a></li>
        <li><a href="">协议规则</a></li>
        <li><a href="">下载app</a></li>
      </ul>
      <ul class="ul-right">
        <li><a href="">登陆</a></li>
        <li><a href="">注册</a></li>
        <li><a href="">消息通知</a></li>
      </ul>
      <div class="shop" @mouseenter="getShow" @mouseout="hidden">
        <a href=""
          ><img
            src="../assets/img/购物车.png"
            alt=""
            class="img-shop"
            @mouseenter="getShow"
          />
          <p class="pgwc" @mouseenter="getShow">购物车({{ num }})</p></a
        >
      </div>
    </div>
    <div class="list" v-if="show">
      <p class="gwc">购物车还没有商品，赶紧选购吧</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: "0",
      show: false,
    };
  },
  methods: {
    getShow() {
      this.show = true;
    },
    hidden() {
      this.show = false;
    },
  },
};
</script>

<style  scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.clear {
  position: absolute;
  top: 200px;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}

.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}
.title {
  position: relative;
  display: flex;
  width: 100%;
  height: 60px;
  background-color: rgb(51, 51, 51);
  margin: -8px;
}
li {
  float: left;
  color: rgb(176, 176, 148);
  font-size: 10px;
  line-height: 50px;
  padding: 0px 5px;
}
.ul-left {
  margin-left: 15%;
}
.ul-right {
  margin-left: 20%;
}
a {
  color: rgb(176, 176, 176);
}
a:hover {
  color: white;
}
.shop {
  height: 50px;
  width: 130px;
  background-color: rgb(66, 66, 66);
  margin-left: 20px;
}
.img-shop {
  position: absolute;
  width: 1%;
  margin-top: 15px;
  margin-left: 20px;
}
.pgwc {
  color: rgb(176, 176, 176);
  font-size: 10px;
  margin-left: 50px;
  margin-top: 15px;
}
.pgwc:hover {
  color: rgb(255, 103, 0);
}
.shop:hover {
  background-color: white;
}
.list {
  position: absolute;
  width: 260px;
  height: 80px;
  box-shadow: 0 0 5px -1px #ccc;
  background-color: white;
  top: 50px;
  right: 425px;
  z-index: 10;
}
.gwc {
  font-size: 10px;
  color: black;
  text-align: center;
  margin-top: 35px;
}
</style>