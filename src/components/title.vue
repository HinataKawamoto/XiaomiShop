<template>
  <div class="box">
    <div class="title">
      <img src="../assets/img/icon-小米归属.png" alt="" />
      <ul>
        <li
          v-for="(item, index) in navs"
          :key="index"
          @mouseenter="get(item.type)"
        >
          {{ item.value }}
        </li>
      </ul>
      <div>
        <input type="text" placeholder="输入想搜索的东西" />
      </div>
      <!-- <input type="text" name="" id="" placeholder="输入想搜索的东西" />
      <div class="search-div">
        <img src="../assets/img/搜索小.png" alt="" class="search" />
      </div> -->
    </div>
    <div class="list" v-if="show" @mouseleave="out">
      <hr />
      <div class="table" v-for="(item, index) in menusItemData" :key="index">
        <a :href="item.src"> <img :src="item.url" alt="" /></a>
        <div class="line"></div>
        <p class="name">{{ item.value }}</p>
        <p class="price">{{ item.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menusItemData: this.xiaomi,
      timer: "",
      navs: [
        { value: "小米手机", type: "xiaomi" },
        { value: "Redmi 红米", type: "redmi" },
        { value: "电视", type: "tv" },
        { value: "笔记本", type: "laptop" },
        { value: "家电", type: "household" },
        { value: "路由器", type: "router" },
        { value: "智能硬件", type: "hardware" },
        { value: "服务", url: "//www.mi.com/service/" },
        { value: "社区", url: "http://www.xiaomi.cn" },
      ],
      show: false,
      xiaomi: [
        {
          value: "小米CC9",
          price: "1799元起",
          sub: true,
          src: "https://www.mi.com/micc9/",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png",
        },
        {
          value: "小米CC9e",
          price: "1299元起",
          sub: true,
          src: "https://www.mi.com/micc9e/",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png",
        },
        {
          value: "小米CC9",
          price: "2599元起",
          sub: false,
          src: "https://www.mi.com/xiaomicc9mt/",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b02f50c9dd2e01c139a06a12502755ef.png",
        },
        {
          value: "小米9",
          price: "2599元起",
          sub: true,
          src: "https://www.mi.com/mi9/",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2c9307e9690dfbca39d8de770a7a8664.png",
        },
        {
          value: "小米MIX 3",
          price: "2599元起",
          sub: false,
          src: "https://item.mi.com/10000123.html",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3b5e5829fdf92d54c167f4681531b535.png",
        },
        {
          value: "小米MIX 2s",
          price: "1799元起",
          sub: true,
          src: "https://www.mi.com/mix2s/",
          url: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ae81fdc9f2ed286d135e16c2a5f6db33.png",
        },
      ],
      redmi: [
        {
          value: "Redmi K20 Pro",
          price: "2299",
          sub: true,
          src: "https://www.mi.com/redmik20pro/",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f69828396fcd1e05b932778f4fca4409.jpg",
        },
        {
          value: "Redmi K20",
          price: "1999",
          sub: true,
          src: "https://www.mi.com/redmik20/",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d4fbf37c6b51e510a3bac5e738f2f681.jpg",
        },
        {
          value: "Redmi Note7 Pro",
          price: "1399",
          sub: false,
          src: "https://www.mi.com/redminote7pro/",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b0e0c0fda4adf267012815127302f6de.jpg",
        },
        {
          value: "Redmi 7A",
          price: "579",
          sub: true,
          src: "https://www.mi.com/redmi7a/",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/031af981e77b41770cade39353021e33.jpg",
        },
        {
          value: "Redmi Note 7",
          price: "999",
          sub: true,
          src: "https://www.mi.com/redminote7/",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5352bd79f5304484f529da8a53145a20.png",
        },
        {
          value: "Redmi 7",
          price: "699",
          sub: true,
          src: "https://www.mi.com/redmi7/",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/536b98c95ecd4375bae21599e53aae53.png",
        },
      ],
      tv: [
        {
          value: "小米壁画电视 65英寸",
          price: "6999",
          sub: false,
          src: "https://www.mi.com/arttv/",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/00f597a8725eee9245e383c35cd4f7b6.jpg",
        },
        {
          value: "小米全面屏电视E55A",
          price: "1999",
          sub: false,
          src: "https://www.mi.com/mitvall-screen/e55a/",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a40904b6a053b73b631a152334388d0e.jpg",
        },
        {
          value: "小米电视4A 32英寸",
          price: "699",
          sub: false,
          src: "https://www.mi.com/mitv4A/32/",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e8f4e22f6d591825f8f150b3309c750b.png",
        },
        {
          value: "小米电视4A 55英寸",
          price: "1799",
          sub: false,
          src: "https://www.mi.com/mitv4A/55/",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bf72a3e9a6e799cb71ecfa7d80465351.jpg",
        },
        {
          value: "小米电视4A 65英寸",
          price: "2699",
          sub: false,
          src: "https://www.mi.com/mitv4A/65",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bd922870295a97a0972eaba5af92129e.jpg",
        },
        {
          value: "查看全部",
          type: "小米电视",
          sub: false,
          src: "https://www.mi.com/a/h/9819.html",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cd4dafd1461a006f161d00924bf692e9.png",
        },
      ],
      laptop: [
        {
          value: "RedmiBook 14 独显版",
          price: "3999",
          sub: true,
          src: "https://item.mi.com/10000153.html",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/be5ddca319f92a508a6e3b3bac4d5fb2.png",
        },
        {
          value: '小米笔记本Air 12.5"',
          price: "3599",
          sub: true,
          src: "https://item.mi.com/10000145.html",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/95c4329ce2c454e2a5fa1e0931528a46.png",
        },
        {
          value: '小米笔记本 Air 13.3"',
          price: "4999",
          sub: true,
          src: "https://item.mi.com/10000142.html",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/96108a8feee8e790389b09b8b949fa7d.png",
        },
        {
          value: '小米笔记本 15.6"',
          price: "3799",
          sub: true,
          src: "https://item.mi.com/10000141.html",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bb159dbe860ee434b52d8eed9e9fd424.png",
        },
        {
          value: '小米笔记本Pro 15.6"',
          price: "4999",
          sub: true,
          src: "https://item.mi.com/10000144.html",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d712f71b3c4a3b562601c2b956a660ad.png",
        },
        {
          value: "小米游戏本",
          price: "5999",
          sub: true,
          src: "https://item.mi.com/10000113.html",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/60b99f44108d4cf5967bb614cf1e8690.png",
        },
      ],
      household: [
        {
          value: "米家互联网空调C1（一级能效）",
          price: "2299",
          sub: false,
          src: "https://www.mi.com/airconditionc1/v1c1/",
          url: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03dc85cd792904ddc8027b2d781beed8.png",
        },
        {
          value: "米家互联网空调（一级能效）",
          price: "2199",
          sub: false,
          src: "https://www.mi.com/airenergy/",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e06b219c5bced9256467b17738a943c6.png",
        },
        {
          value: "Redmi全自动波轮洗衣机1A",
          price: "699",
          sub: false,
          src: "https://item.mi.com/9509.html",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c5d772b7c2a159c3ed7d4e31bd293f18.jpg",
        },
        {
          value: "米家互联网洗烘一体机10kg",
          price: "1899",
          sub: false,
          src: "https://www.mi.com/washer-dryer-10/",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/11b8bca444aba2994fe852993eac9203.png",
        },
        {
          value: "小米净水器",
          price: "1999",
          sub: false,
          src: "https://www.mi.com/water2",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/486a2a7359b6bda95b3dbd4e45b9c50a.jpg",
        },
        {
          value: "米家扫地机器人",
          price: "1499",
          sub: false,
          src: "https://www.mi.com/roomrobot/",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4ae019eebf10a55f8df2fee8d19b4e1f.jpg",
        },
      ],
      router: [
        {
          value: "小米路由器 Mesh",
          price: "999",
          sub: false,
          src: "https://www.mi.com/mesh/",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ec5be5f93ac0118aeec27b8df4337fc9.jpg",
        },
        {
          value: "小米路由器4A 千兆版",
          price: "149",
          sub: false,
          src: "https://www.mi.com/miwifi4ac/",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/026a28fc18eff2cfa4d26a799a2da9cc.jpg",
        },
        {
          value: "小米路由器 4C",
          price: "59",
          sub: false,
          src: "https://item.mi.com/8645.html",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/28efac56ef4c4942077dac7e30e8c624.jpg",
        },
        {
          value: "小米路由器 4A",
          price: "99",
          sub: false,
          src: "https://www.mi.com/miwifi4a/",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3c3e9f61cc72ccd2a37fc90fed215b66.jpg",
        },
        {
          value: "小米路由器 HD/Pro",
          price: "399",
          sub: false,
          src: "https://www.mi.com/miwifihd/",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5fc5ee374e5306aa5513be4f3b560531.png",
        },
        {
          value: "查看全部",
          type: "小米路由器",
          sub: false,
          src: "https://www.mi.com/a/h/8363.html",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2ddc6a2789c5f5ff78fa4ca1402417c8.png",
        },
      ],
      hardware: [
        {
          value: "小米米家智能摄像机云台版",
          price: "189",
          sub: false,
          src: "https://www.mi.com/camera-360/",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2a500be4264c692899b25d86c16403f7.jpg",
        },
        {
          value: "小米小爱老师",
          price: "489",
          sub: true,
          src: "https://www.mi.com/aiteacher-wifi/",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e3fb0886fdb13e5ae784b9713b9a0038.jpg",
        },
        {
          value: "小米米家智能门锁",
          price: "1299",
          sub: false,
          src: "https://www.mi.com/mj-smartlock/",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5630aa997c82409ee33b2814c7eb2244.jpg",
        },
        {
          value: "小米小爱触屏音箱",
          price: "299",
          sub: false,
          src: "https://www.mi.com/aispeaker-touch/",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f6e585a4bf5c0f744ca60f19ecd6fadf.jpg",
        },
        {
          value: "小爱万能遥控版",
          price: "179",
          sub: false,
          src: "https://www.mi.com/aispeaker-control/",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df136199221a23299bc5348f37230a86.jpg",
        },
        {
          value: "查看全部",
          type: "智能硬件",
          sub: false,
          src: "https://www.mi.com/p/3469.html?client_id=180100041086&masid=17409.0245",
          url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c1016ddffd2ac5808c4bebcdbefd413a.jpg",
        },
      ],
    };
  },
  methods: {
    get(type) {
      if (type) {
        this.menusItemData = this[type];
      }
      this.show = true;
    },
    out() {
      this.timer = setTimeout(() => {
        this.show = false;
      }, 300);
    },
  },
};
</script>

<style lang='less' scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.box {
  position: relative;
  width: 100%;
  height: auto;
  margin: 0 auto;
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
  position: absolute;
  display: flex;
  width: 100%;
  height: 150px;
  background-color: white;
  margin: -8px;
  min-width: 1800px;
  img {
    position: absolute;
    width: 3%;
    margin: 2.5% 16%;
  }
  li {
    float: left;
    // display: flex;
    font-size: 15px;
    height: 150px;
    line-height: 150px;
    overflow: hidden;
    margin: 0px 15px;
    user-select: none;
    cursor: pointer;
  }
  li:hover {
    color: rgb(#ff6700);
  }
  ul {
    margin: 0 400px;
  }
  input {
    position: relative;
    width: 200px;
    height: 40px;
    top: 50px;
    right: 260px;
  }
}
.search-div {
  position: absolute;
  float: right;
  width: 48px;
  height: 49px;
  background-color: white;
  margin-left: -10px;
  margin-right: 387px;
  margin-top: 50px;
  border: 1px solid black;
  cursor: pointer;
  img {
    width: 1.3%;
    position: absolute;
    margin-left: 8px;
    margin-top: 65px;
    top: 30px;
  }
}
.search-div:hover {
  background-color: #ff6700;
}
.list {
  position: absolute;
  top: 140px;
  width: 100%;
  height: 250px;
  background-color: white;
  margin: -8px;
  z-index: 10;
}
@keyframes move {
  50% {
    transform: translateY(10px);
  }
}
.list {
  animation: move 3s;
}
.table {
  position: relative;
  float: left;
  left: 10%;
  width: 180px;
  height: 100%;
  background-color: white;
  img {
    float: left;
    position: absolute;
    margin-top: 30px;
    width: 100%;
  }
  .line {
    // position: relative;
    background: #e7e7e7; /*背景色为浅灰色*/
    width: 0.6px; /*设置宽高*/
    height: 120px; /*调整位置*/
    margin-top: 30px;
    float: left; /*让此div与前面的并排显示*/
  }
  .name {
    font-size: 10px;
    margin-top: 170px;
    text-align: center;
  }
  .price {
    font-size: 5px;
    text-align: center;
    margin-top: 5px;
    color: #ff6700;
  }
}
</style>