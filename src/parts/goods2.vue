<template>
  <div>
    <div class="box">
      <p class="title">家电</p>
      <p class="hot" @mouseenter="hot()">热门</p>
      <p class="movie" @mouseenter="movie()">电视音影</p>
      <div class="big">
        <div class="big-box">
          <div class="big-box-a" v-for="(item, index) in promo" :key="index">
            <img :src="item.src" alt="" />
          </div>
        </div>
        <div class="big-left">
          <div class="little-box" v-for="(item, index) in table" :key="index">
            <a :href="item.url">
              <img :src="item.src" alt="" />
              <p class="value">{{ item.value }}</p>
              <p class="desc">{{ item.desc }}</p>
              <p class="newPrice">
                {{ item.newPrice }}元<span class="oldPrice"
                  >{{ item.oldPrice }}元</span
                >
              </p>
            </a>
          </div>
        </div>
      </div>
      <div>
        <a href="https://www.mi.com/a/h/11544.html"
          ><img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7606bb66991f59e15b5b35e917b1a907.jpg?w=2452&h=240"
            alt=""
            class="ad"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      table: this.hots,
      isHot: true,
      vertical: false,
      tabList: [
        { value: "热门", type: "hots", url: "https://www.mi.com/p/3469.html" },
        {
          value: "电视音影",
          type: "television",
          url: "https://www.mi.com/a/h/9819.html",
        },
      ],
      promo: [
        {
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/221f2c4adfda2fc3827ce3a5dcb4850a.jpg?w=468&h=600",
          url: "https://item.mi.com/9614.html",
        },
        {
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b67de5a8ce9025fb5d8bac66e019d1c3.jpg?w=468&h=600",
          url: "https://item.mi.com/9527.html",
        },
      ],
      hots: [
        {
          value: "米家互联网空调C1（一级能效）",
          desc: "变频节能省电，自清洁",
          sub: false,
          newPrice: "2599",
          oldPrice: "2799",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ce424d6fe93dfb74733b5838140b7ee.jpg",
          url: "https://www.mi.com/airconditionc1/v1c1/",
        },
        {
          value: "米家空调",
          desc: "出众静音，快速制冷热",
          sub: false,
          newPrice: "1699",
          oldPrice: "1799",
          src: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg",
          url: "https://www.mi.com/aircondition/f3w1/",
        },
        {
          value: "米家互联网洗烘一体机 Pro 10kg",
          desc: "智能洗烘，省心省力",
          sub: false,
          newPrice: "2999",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec20453216dcd42f982cffe5fdbc3115.jpg",
          url: "https://item.mi.com/9963.html",
        },
        {
          value: "小米电视4A 32英寸",
          desc: "人工智能系统，高清液晶屏",
          sub: false,
          newPrice: "699",
          oldPrice: "799",
          src: "https://i8.mifile.cn/v1/a1/ef617fac-7489-436d-b74e-c43582f09633.jpg",
          url: "https://www.mi.com/mitv4A/32/",
        },
        {
          value: "Redmi全自动波轮洗衣机1A 8kg",
          desc: "一键操作，父母都爱用",
          sub: false,
          newPrice: "799",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8c63a2024528fe5410ebe669b7d2407.jpg",
          url: "https://item.mi.com/9509.html",
        },
        {
          value: "小米全面屏电视E55A",
          desc: "全面屏设计，人工智能语音",
          sub: false,
          newPrice: "1999",
          oldPrice: "2099",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg",
          url: "https://www.mi.com/mitvall-screen/e55a/",
        },
        {
          value: '15.6" 四核i7 16G 独显 512G',
          desc: "全面均衡的国民轻薄本",
          sub: false,
          newPrice: "4899",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd2aa2dcad6440b469c22e27db9b6236.jpg",
          url: "https://item.mi.com/10253.html",
        },
        {
          value: 'Air 13.3" 2019款 ',
          desc: "全面性价比超高的国民轻薄本",
          sub: true,
          newPrice: "4699",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74e573c4c0d89048392d14831cc507d5.jpg",
          url: "https://item.mi.com/10000142.html",
        },
      ],
      television: [
        {
          value: "小米电视4A 32英寸",
          desc: "人工智能系统，高清液晶屏",
          sub: false,
          newPrice: "699",
          oldPrice: "799",
          src: "https://i8.mifile.cn/v1/a1/ef617fac-7489-436d-b74e-c43582f09633.jpg",
          url: "https://www.mi.com/mitv4A/32/",
        },
        {
          value: "小米全面屏电视E55A",
          desc: "全面屏设计，人工智能语音",
          sub: false,
          newPrice: "1999",
          oldPrice: "2099",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg",
          url: "https://www.mi.com/mitvall-screen/e55a/",
        },
        {
          value: "小米全面屏电视E65A",
          desc: "全面屏设计，人工智能语音",
          sub: false,
          newPrice: "2999",
          oldPrice: "3999",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3317a291b112aa4712059ad93263668.jpg",
          url: "https://www.mi.com/mitvall-screen/e65a/",
        },
        {
          value: "小米电视4X 43英寸",
          desc: "FHD全高清屏，人工智能语音",
          sub: false,
          newPrice: "1299",
          oldPrice: "1499",
          src: "https://i8.mifile.cn/b2c-mimall-media/ede227c1f0e3472fb8dcfae980d1e43f.jpg",
          url: "https://www.mi.com/mitv4x/43/",
        },
        {
          value: "小米电视4C 55英寸",
          desc: "4K HDR，人工智能系统",
          sub: false,
          newPrice: "1699",
          oldPrice: "1799",
          src: "https://i8.mifile.cn/v1/a1/cef8a9c0-2386-5b66-9ed2-6b1d4e4490bf.jpg",
          url: "https://www.mi.com/mitv4c/55/",
        },
        {
          value: "小米电视4A 65英寸",
          desc: "4K HDR，人工智能语音系统",
          sub: false,
          newPrice: "2699",
          oldPrice: "2999",
          src: "https://i8.mifile.cn/b2c-mimall-media/91b59cc6474e0cd777445b15adb13980.jpg",
          url: "https://www.mi.com/mitv4A/65",
        },
        {
          value: "小米壁画电视 65英寸",
          desc: "壁画外观，全面屏，远场语音",
          sub: false,
          newPrice: "6999",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e7eee530e4a103f2f5a0937a14bed53.jpg",
          url: "https://www.mi.com/arttv/",
        },
        {
          value: "小米盒子4",
          desc: "搭载了HDMI 2.0接口，可以连接、拓展更多配件",
          sub: false,
          newPrice: "299",
          oldPrice: "",
          src: "https://i8.mifile.cn/b2c-mimall-media/aa8a6ce3b2b1201d74d0197482f3403b.jpg",
          url: "https://www.mi.com/mibox4",
        },
      ],
    };
  },
  methods: {
    hot() {
      this.table = this.hots;
    },
    movie() {
      this.table = this.television;
    },
  },
  mounted() {
    this.table = this.hots;
    // console.log(this.table);
  },
};
</script>

<style lang="less" scoped>
.box {
  position: relative;
  top: 650px;
  left: -60px;
  width: 1220px;
  height: 715px;
  .title {
    position: absolute;
    display: flex;
    font-size: 23px;
    opacity: 0.8;
    top: -30px;
  }
}
.big {
  position: relative;
  top: 30px;
  width: 100%;
  height: 615px;
}
.big-box {
  position: absolute;
  width: 234px;
  .big-box-a {
    position: relative;
    display: inline-block;
    width: 234px;
    height: 300px;
    margin-top: 5px;
    // background-color: white;
    -webkit-transform: perspective(0.5px) translateZ(0);
    transform: perspective(0.5px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: box-shadow, transform;
    transition-property: box-shadow, transform;
  }
  img {
    width: 100%;
  }
}
.big-left {
  position: absolute;
  left: 234px;
  width: 986px;
  height: 100%;
  // background-color: wheat;
}
.little-box {
  position: relative;
  display: inline-block;
  top: 0px;
  width: 234px;
  height: 300px;
  margin: 5px 6px;
  background-color: white;
  -webkit-transform: perspective(0.5px) translateZ(0);
  transform: perspective(0.5px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
  img {
    margin: 10px 25px;
    width: 80%;
  }

  .value {
    text-align: center;
    font-size: 13px;
  }
  .desc {
    text-align: center;
    font-size: 12px;
    color: rgb(176, 176, 176);
  }
  .newPrice {
    margin-top: 10px;
    text-align: center;
    color: rgb(255, 103, 9);
    font-size: 13px;
  }
  .oldPrice {
    color: rgb(176, 176, 176);
    font-size: 12px;
    text-decoration: line-through;
  }
  a {
    color: black;
  }
}
.big-box-a:hover {
  box-shadow: 10px 10px 10px -10px rgba(0, 0, 0.5, 0.5);
  -webkit-transform: scale(1.1);
  transform: scale(1.03);
}
.little-box:hover {
  box-shadow: 10px 10px 10px -10px rgba(0, 0, 0.5, 0.5);
  -webkit-transform: scale(1.1);
  transform: scale(1.03);
}
.ad {
  position: absolute;
  top: 700px;
  left: 0px;
  width: 100%;
}
.hot {
  position: absolute;
  left: 1070px;
  top: 0px;
  font-size: 16px;
  top: -10px;
  cursor: pointer;
}
.movie {
  position: absolute;
  display: inline-block;
  left: 1130px;
  top: -10px;
  font-size: 16px;
  cursor: pointer;
}
.hot:hover {
  text-decoration: underline;
  color: rgb(255, 103, 9);
}
.movie:hover {
  text-decoration: underline;
  color: rgb(255, 103, 9);
}
</style>