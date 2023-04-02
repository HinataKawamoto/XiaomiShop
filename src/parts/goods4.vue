<template>
  <div>
    <div class="box">
      <p class="title">搭配</p>
      <p class="hot" @mouseenter="hot()">热门</p>
      <p class="movie" @mouseenter="movie()">耳机音箱</p>
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
        <a href="https://www.mi.com/airenergy/"
          ><img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/89c2a209b742fce9b10d9d196149d634.jpg?w=2452&h=240"
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
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6874615b3c50e837ffe532eb6ea4ef1a.jpg?w=468&h=600",
          url: "https://www.mi.com/scooter/",
        },
        {
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e4e456617d58227cc70d682b42fe90e3.jpg?w=468&h=600",
          url: "https://www.mi.com/mj-electricshaver/",
        },
      ],
      hots: [
        {
          value: "Redmi充电宝 10000mAh 标准版 白色",
          desc: "10000mAh大电量",
          sub: false,
          newPrice: "59",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea8e42faebf7d76a4cb42b8930cf9e46.jpg",
          url: "https://item.mi.com/10317.html",
        },
        {
          value: "Redmi充电宝 20000mAh 快充版",
          desc: "大容量，	可上飞机 ",
          sub: false,
          newPrice: "99",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eaf70e0e9905de6452f07b1f48fcc386.jpg",
          url: "https://item.mi.com/10318.html",
        },
        {
          value: "小米二合一数据线",
          desc: "两种接口，支持多种设备",
          sub: false,
          newPrice: "19.9",
          oldPrice: "",
          src: "https://i8.mifile.cn/v1/a1/287594eb-b765-8db1-3255-0a05c4c07440.jpg",
          url: "https://item.mi.com/4833.html",
        },
        {
          value: "小米插线板 5孔位",
          desc: "多重安全保护",
          sub: false,
          newPrice: "39",
          oldPrice: "",
          src: "https://i8.mifile.cn/v1/a1/5dd69c0a-8f4a-b42f-d840-6c5a47f2cd03.jpg",
          url: "https://item.mi.com/5857.html",
        },
        {
          value: "小米无线充电器",
          desc: "快速充电，轻巧便携",
          sub: false,
          newPrice: "99",
          oldPrice: "",
          src: "https://i8.mifile.cn/b2c-mimall-media/d7fd9ecdca3959beae3fb5db59aa9aff.jpg",
          url: "https://item.mi.com/9009.html",
        },
        {
          value: "小米蓝牙耳机AirDots青春版",
          desc: "雅致简约，收纳充电盒",
          sub: false,
          newPrice: "199",
          oldPrice: "",
          src: "https://i8.mifile.cn/b2c-mimall-media/92af1f21293fabfbf2a112892b864925.jpg",
          url: "https://item.mi.com/9016.html",
        },
        {
          value: "小米小爱蓝牙音箱 随身版",
          desc: "小巧便携，一键唤醒小爱",
          sub: false,
          newPrice: "49",
          oldPrice: "",
          src: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/321610e787393c42e5cb2e5730a7681d.jpg",
          url: "https://www.mi.com/sound-carry/",
        },
        {
          value: "小米小爱触屏音箱",
          desc: "小爱触屏音箱内置海量影视资源",
          sub: false,
          newPrice: "249",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9946e252a7c49662376c056ced004a20.jpg",
          url: "https://www.mi.com/aispeaker-touch/",
        },
      ],
      earphone: [
        {
          value: "小米双单元半入耳式耳机",
          desc: "半入耳式舒适佩戴",
          sub: false,
          newPrice: "69",
          oldPrice: "",
          src: "https://i8.mifile.cn/b2c-mimall-media/ddf317f34e47eed06d910ee0ffd6b2fc.jpg",
          url: "https://www.mi.com/half-in-ear/",
        },
        {
          value: "小米蓝牙项圈耳机",
          desc: "挂在脖子上的好耳机",
          sub: false,
          newPrice: "299",
          oldPrice: "",
          src: "https://i8.mifile.cn/b2c-mimall-media/838ba427ef55317d8c4911b02c95bb79.jpg",
          url: "https://www.mi.com/bluetooth-collar/",
        },
        {
          value: "小米圈铁耳机2",
          desc: "全面升级，让声音更有质感",
          sub: false,
          newPrice: "99",
          oldPrice: "",
          src: "https://i8.mifile.cn/b2c-mimall-media/a0e1b48582e68cecf4b3e32dd1b5549d.jpg",
          url: "https://www.mi.com/quantie2/",
        },
        {
          value: "小米随身蓝牙音箱",
          desc: "全金属外壳，内置麦克风",
          sub: false,
          newPrice: "69",
          oldPrice: "",
          src: "https://i8.mifile.cn/v1/a1/T1hVY_BTdv1RXrhCrK.jpg",
          url: "https://www.mi.com/littleaudio/",
        },
        {
          value: "小米蓝牙耳机青春版",
          desc: "6.5 克轻巧，高清通话音质",
          sub: false,
          newPrice: "59",
          oldPrice: "",
          src: "https://i8.mifile.cn/v1/a1/e4c0f21c-3bd4-323e-673b-a9c1c1c6e294.jpg",
          url: "https://www.mi.com/bluetooth-earphone/",
        },
        {
          value: "小米运动蓝牙耳机mini",
          desc: "迷你机身, 小如蚕豆",
          sub: false,
          newPrice: "169",
          oldPrice: "",
          src: "https://i8.mifile.cn/v1/a1/852c3872-7aca-e565-b8fb-37aa3ce88979.jpg",
          url: "https://www.mi.com/sportearphone-mini/",
        },
        {
          value: "小米蓝牙耳机AirDots青春版",
          desc: "雅致简约，收纳充电盒",
          sub: false,
          newPrice: "199",
          oldPrice: "",
          src: "https://i8.mifile.cn/b2c-mimall-media/92af1f21293fabfbf2a112892b864925.jpg",
          url: "https://item.mi.com/9016.html",
        },
        {
          value: "小米小爱触屏音箱",
          desc: "小爱触屏音箱内置海量影视资源",
          sub: false,
          newPrice: "249",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9946e252a7c49662376c056ced004a20.jpg",
          url: "https://www.mi.com/aispeaker-touch/",
        },
      ],
    };
  },
  methods: {
    hot() {
      this.table = this.hots;
    },
    movie() {
      this.table = this.earphone;
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
  top: 1050px;
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
  // margin: 0 150px;
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