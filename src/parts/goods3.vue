<template>
  <div>
    <div class="box">
      <p class="title">智能</p>
      <p class="hot" @mouseenter="hot()">热门</p>
      <p class="movie" @mouseenter="movie()">出行</p>
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
              <p class="newPrice">{{ item.newPrice }}元</p>
            </a>
          </div>
        </div>
      </div>
      <div>
        <a href="https://item.mi.com/10476.html"
          ><img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e2cf7dd837eb8d4690070d7dfa817d9.jpg?w=2452&h=240"
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
      promo: [
        {
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/45c23f5b9a927b2dc49c25277e07727c.jpg?w=468&h=600",
          url: "https://www.mi.com/camera-360/",
        },
        {
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a660ce095e8f553a9ed1515265f4e9fc.jpg?w=468&h=600",
          url: "https://item.mi.com/9285.html",
        },
      ],
      hots: [
        {
          value: "小米「小爱老师」",
          desc: "口袋里的英语外教",
          sub: true,
          newPrice: "499",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/011dd8493ad62f3793dbb63d9fbd3bc0.jpg",
          url: "https://www.mi.com/aiteacher-wifi/",
        },
        {
          value: "小米米家智能门锁 推拉式",
          desc: "一步推拉，高端智能门锁",
          sub: false,
          newPrice: "1599",
          oldPrice: "1699",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0baacf6e54cbf89cab2c543cc02344e9.jpg",
          url: "https://item.mi.com/10025.html",
        },
        {
          value: "小米小爱音箱 Play",
          desc: "听音乐、语音遥控家电",
          sub: false,
          newPrice: "99",
          oldPrice: "169",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e7c6e79433c883e1a022ec21402c1679.jpg",
          url: "https://www.mi.com/aispeaker-play/",
        },
        {
          value: "小爱音箱万能遥控版",
          desc: "传统家电秒变智能",
          sub: false,
          newPrice: "149",
          oldPrice: "199",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/44a30f0da2aacb66a0f896293ebc703f.jpg",
          url: "https://www.mi.com/aispeaker-control/",
        },
        {
          value: "米家电饭煲4L",
          desc: "890W 立体加热",
          sub: false,
          newPrice: "299",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b42e49c6c0208f2de5a2f7a491a3af46.jpg",
          url: "https://item.mi.com/9990.html",
        },
        {
          value: "小米手环4",
          desc: "大屏彩显，20天超长续航",
          sub: false,
          newPrice: "169",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e850fa029579ba886e3d5c81f00ae534.jpg",
          url: "https://www.mi.com/shouhuan4/",
        },
        {
          value: "米家九号平衡轮",
          desc: "能花式酷玩的“风火轮”",
          sub: false,
          newPrice: "999",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0c65d472682f0679e192dc7b4cd6e64c.jpg",
          url: "https://item.mi.com/10003.html",
        },
        {
          value: "小米体脂秤2",
          desc: "智能硬件产品小米体重秤",
          sub: false,
          newPrice: "99",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/550177d2e54387521bce9e78cb2949dd.jpg",
          url: "https://item.mi.com/9686.html",
        },
      ],
      trip: [
        {
          value: "小米米家电动滑板车",
          desc: "便携折叠，自由穿行",
          sub: false,
          newPrice: "1999",
          oldPrice: "",
          src: "https://i8.mifile.cn/v1/a1/768992ca-4136-92f1-244a-0194a81a6360.jpg",
          url: "https://www.mi.com/scooter2/",
        },
        {
          value: "米兔折叠婴儿推车",
          desc: "出发去向往的地方",
          sub: false,
          newPrice: "669",
          oldPrice: "699",
          src: "https://i8.mifile.cn/b2c-mimall-media/18a82e7cda6ecbc22ecee7ac927d6ff9.jpg",
          url: "https://www.mi.com/babyfoldingcar/",
        },
        {
          value: "米兔遥控小飞机",
          desc: "迷你酷玩具，溜到飞起",
          sub: false,
          newPrice: "399",
          oldPrice: "",
          src: "https://i8.mifile.cn/b2c-mimall-media/553b5c01820c844565abe64e50bba323.jpg",
          url: "https://www.mi.com/minidrone/",
        },
        {
          value: "米家车载空气净化器",
          desc: "高效净化车内空气",
          sub: false,
          newPrice: "449",
          oldPrice: "",
          src: "https://i8.mifile.cn/v1/a1/cdc5c77b-d7e9-5a42-f848-3ff1808a139a.jpg",
          url: "https://www.mi.com/carair/",
        },
        {
          value: "AMAZFIT 运动手表",
          desc: "扔掉手机去跑步",
          sub: false,
          newPrice: "769",
          oldPrice: "799",
          src: "https://i8.mifile.cn/v1/a1/aaa1593d-9ca7-2944-3b62-380cc3427d82.jpg",
          url: "https://www.mi.com/hmwatch/",
        },
        {
          value: "九号平衡车 Plus",
          desc: "一个形影不离的新伙伴",
          sub: false,
          newPrice: "3499",
          oldPrice: "",
          src: "https://i8.mifile.cn/v1/a1/877d3ce8-68ab-7506-2a78-55a8c0fba946.png",
          url: "https://www.mi.com/scooterplus/",
        },
        {
          value: "米家车载逆变器",
          desc: "双USB充电口，国际组合插孔",
          sub: false,
          newPrice: "199",
          oldPrice: "",
          src: "https://i8.mifile.cn/b2c-mimall-media/61472c3fcd181959055551e5c73aafec.jpg",
          url: "https://item.mi.com/7627.html",
        },
        {
          value: "米家充气宝",
          desc: "",
          sub: false,
          newPrice: "199",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0294e2f3997bf0cffb7bf48361d03588.jpg",
          url: "https://item.mi.com/9613.html",
        },
      ],
    };
  },
  methods: {
    hot() {
      this.table = this.hots;
    },
    movie() {
      this.table = this.trip;
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
  top: 850px;
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
  left: 1120px;
  top: 0px;
  font-size: 16px;
  top: -10px;
  cursor: pointer;
  // margin: 0 150px;
}
.movie {
  position: absolute;
  display: inline-block;
  left: 1180px;
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