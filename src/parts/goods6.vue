<template>
  <div>
    <div class="box">
      <p class="title">周边</p>
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
        <a href="https://item.mi.com/9836.html"
          ><img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88e35cffc82cd98cd53172460067af17.jpg?w=2452&h=240"
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
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/99f1f43d9df484572bd81138f45dfc0f.jpg?w=468&h=600",
          url: "https://item.mi.com/10578.html",
        },
        {
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e0b8cffcbdaa88e2a314f0a372ca75dd.jpg?w=468&h=600",
          url: "https://item.mi.com/8621.html",
        },
      ],
      hots: [
        {
          value: "米家飞行员太阳镜 Pro",
          desc: "尼龙偏光，轻巧佩戴",
          sub: false,
          newPrice: "199",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cccac948e1b8ffb47f1fecde67692e60.jpg",
          url: "https://item.mi.com/9732.html",
        },
        {
          value: "小米巨能写中性笔10支装",
          desc: "一支顶4支，超长顺滑书写",
          sub: false,
          newPrice: "9.9",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/57433a4b991b2a2ddc889f2d8d434655.jpg",
          url: "https://item.mi.com/9836.html",
        },
        {
          value: "小米旅行箱 20英寸 布朗熊限量版",
          desc: "“国际巨星” LINE FRIENDS布朗熊",
          sub: false,
          newPrice: "399",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c149537ebb0c2cdb977ddd93200074f4.jpg",
          url: "https://item.mi.com/10007.html",
        },
        {
          value: "米家迷你保温杯",
          desc: "可以随身携带的温度",
          sub: false,
          newPrice: "49",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03d94ee6059481a6adcb6c4c5c572fb4.jpg",
          url: "https://item.mi.com/10480.html",
        },
        {
          value: "米家驱蚊器基础版 3个装",
          desc: "3个装 长效驱蚊",
          sub: false,
          newPrice: "99",
          oldPrice: "129",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/41e6890f9d6b7fdb4275c986dc3644e8.jpg",
          url: "https://item.mi.com/9723.html",
        },
        {
          value: "3卷装抽绳式垃圾袋",
          desc: "让清洁更简单",
          sub: false,
          newPrice: "14.9",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/38748fefeef78183ac01356a23dbc5c5.jpg",
          url: "https://item.mi.com/9938.html",
        },
        {
          value: "贝医生巴氏牙刷 四色装",
          desc: "进口刷毛，好品质",
          sub: false,
          newPrice: "39.9",
          oldPrice: "",
          src: "https://i8.mifile.cn/v1/a1/413f5e2f-53e7-0879-119c-8b4466feea53.jpg",
          url: "https://www.mi.com/toothbrush-set/",
        },
        {
          value: "8H 乳胶弹簧静音床垫 M3",
          desc: "好睡觉",
          sub: true,
          newPrice: "1499",
          oldPrice: "",
          src: "https://i8.mifile.cn/v1/a1/eaa7c8e5-2a8c-0d2c-6de7-a6db2068b192.jpg",
          url: "https://item.mi.com/6512.html",
        },
      ],
      trip: [
        {
          value: "90分框体旅行箱",
          desc: "专利轻量合金中框，轻盈坚固 ",
          sub: true,
          newPrice: "599",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d26d3a80dd1ab0c6a657f13cb234dade.jpg",
          url: "https://item.mi.com/10000147.html",
        },
        {
          value: "小米商旅多功能双肩包 2",
          desc: "商务旅行多场景，切换无压力",
          sub: false,
          newPrice: "199",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/47ecc65d37065fde1e71b1b34326e741.jpg",
          url: "https://item.mi.com/10181.html",
        },
        {
          value: "米家飞行员太阳镜 Pro",
          desc: "尼龙偏光，轻巧佩戴",
          sub: false,
          newPrice: "199",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cccac948e1b8ffb47f1fecde67692e60.jpg",
          url: "https://item.mi.com/9732.html",
        },
        {
          value: "小米小背包",
          desc: "小身材大容量， 更精彩！",
          sub: false,
          newPrice: "29",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f5f4677730c6be3ecab615795fb0e9c7.jpg",
          url: "https://item.mi.com/8621.html",
        },
        {
          value: "Free Tie 真皮板鞋 米家定制",
          desc: "做一双简单的板鞋",
          sub: false,
          newPrice: "129",
          oldPrice: "199",
          src: "https://i8.mifile.cn/v1/a1/e2775107-da04-6611-3580-82227ffec369.png",
          url: "https://www.mi.com/plateshoes/",
        },
        {
          value: "自动折叠伞",
          desc: "防泼水伞布，轻盈拒水",
          sub: false,
          newPrice: "94",
          oldPrice: "99",
          src: "https://i8.mifile.cn/v1/a1/43549b8e-c8cd-0464-17ba-6be26f395ef0.jpg",
          url: "https://www.mi.com/umbrella/",
        },
        {
          value: "最生活毛巾•青春系列",
          desc: "3秒吸水，杀菌无刺激",
          sub: false,
          newPrice: "19.9",
          oldPrice: "",
          src: "https://i8.mifile.cn/b2c-mimall-media/1f4c867b5ccb878b43054f640636c872.jpg",
          url: "https://item.mi.com/4917.html",
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
  top: 1450px;
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