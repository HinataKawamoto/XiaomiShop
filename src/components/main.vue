<template>
  <div class="box">
    <div>
      <p class="shangou">小米闪购</p>
      <div class="flash">
        <p class="four">24:00场</p>
        <img src="../assets/image/flash.jpg" alt="" />
        <p class="end">距离结束还有</p>
        <div class="hour">
          <p>{{ hour }}</p>
        </div>
        <span class="maohao">:</span>
        <div class="minute">
          <p>{{ minute }}</p>
        </div>
        <span class="mao">:</span>
        <div class="second">
          <p>{{ second }}</p>
        </div>
      </div>
    </div>
    <div class="goods">
      <div v-for="(item, index) in slideItems" :key="index">
        <a :href="item.url"> <img :src="item.src" alt="" /></a>
        <p class="name">
          {{ item.value }}
        </p>
        <p class="desc">{{ item.desc }}</p>
        <p class="newPrice">
          {{ item.newPrice }}元<span class="oldPrice"
            >{{ item.oldPrice }}元</span
          >
        </p>
      </div>
    </div>
    <div class="img-box">
      <a href="https://www.mi.com/redminote7pro/"
        ><img
          class="red"
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a2f39c9fe0804ace1d3707574c7c86f.jpg?w=2452&h=240"
          alt=""
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: "", //倒计时
      seconds: 21966, // 10天的秒数
      day: "",
      hour: "",
      minute: "",
      second: "",
      slideItems: [
        {
          value: "高品质多功能头戴耳机",
          desc: "我的私人KTV",
          newPrice: "199",
          oldPrice: "249",
          topColor: "#ffac13",
          src: "https://i8.mifile.cn/a1/pms_1551343984.14546114.jpg",
          url: "https://www.mi.com/seckill/",
        },
        {
          value: "Yeelight LED灯泡 彩光版",
          desc: "亮度自由调节",
          newPrice: "1",
          oldPrice: "99",
          topColor: "#83c44e",
          src: "https://i8.mifile.cn/v1/a1/T1HPZgBTAv1RXrhCrK.jpg",
          url: "https://www.mi.com/seckill/",
        },
        {
          value: "飞利浦智睿筒灯 可调色温版 白色",
          desc: "冷暖随心调",
          newPrice: "1",
          oldPrice: "59",
          topColor: "#2196f3",
          src: "https://i8.mifile.cn/a1/pms_1524452958.92865446.jpg",
          url: "https://www.mi.com/seckill/",
        },
        {
          value: "小米AI音箱",
          desc: "听音乐、语音遥控家电",
          newPrice: "249",
          oldPrice: "299",
          topColor: "#e53935",
          src: "https://i8.mifile.cn/b2c-mimall-media/e277547c6e3329303dd2c20a327424c4.jpg",
          url: "https://www.mi.com/seckill/",
        },
      ],
    };
  },
  mounted() {
    this.Time(); //调用定时器
  },
  methods: {
    // 天 时 分 秒 格式化函数
    countDown() {
      let d = parseInt(this.seconds / (24 * 60 * 60));
      d = d < 10 ? "0" + d : d;
      let h = parseInt((this.seconds / (60 * 60)) % 24);
      h = h < 10 ? "0" + h : h;
      let m = parseInt((this.seconds / 60) % 60);
      m = m < 10 ? "0" + m : m;
      let s = parseInt(this.seconds % 60);
      s = s < 10 ? "0" + s : s;
      this.count = d + "天" + h + "时" + m + "分" + s + "秒";
      this.hour = h;
      this.minute = m;
      this.second = s;
    },
    //定时器没过1秒参数减1
    Time() {
      setInterval(() => {
        this.seconds -= 1;
        this.countDown();
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  // display: flex;
  position: relative;
  float: left;
  top: 90%;
  margin: -150px 0px;
  width: 100%;
  height: 3000px;
  background-color: rgb(245, 245, 245);
  overflow: auto;
  clear: both;
  .flash {
    position: relative;
    width: 240px;
    height: 340px;
    background-color: rgb(241, 237, 237);
    top: 30px;
    left: 275px;
    .four {
      font-size: 23px;
      color: red;
      text-align: center;
      padding-top: 40px;
      font-family: "Times New Roman", Georgia, Serif;
    }
    img {
      position: relative;
      // top: 15px;
      margin: 30px 100px;
    }
    .end {
      position: relative;
      top: -20px;
      text-align: center;
      font-size: 15px;
      color: rgb(111, 109, 109);
    }
  }
}
.shangou {
  position: relative;
  font-size: 23px;
  left: 280px;
  top: 10px;
  opacity: 0.8;
}
.hour {
  width: 50px;
  height: 50px;
  background-color: rgb(96, 87, 81);
  margin-left: 20px;
  p {
    color: white;
    font-size: 25px;
    text-align: center;
    line-height: 50px;
  }
}
.minute {
  float: left;
  position: relative;
  width: 50px;
  height: 50px;
  background-color: rgb(96, 87, 81);
  margin-left: 95px;
  top: -50px;
  p {
    color: white;
    font-size: 25px;
    text-align: center;
    line-height: 50px;
  }
}
.second {
  float: left;
  position: relative;
  width: 50px;
  height: 50px;
  background-color: rgb(96, 87, 81);
  margin-left: 21px;
  top: -50px;
  p {
    color: white;
    font-size: 25px;
    text-align: center;
    line-height: 50px;
  }
}
.maohao {
  position: absolute;
  float: left;
  font-size: 35px;
  left: 76px;
  top: 203px;
  color: rgb(96, 87, 81);
  // padding-left: ;
}
.mao {
  position: absolute;
  float: right;
  font-size: 35px;
  color: rgb(96, 87, 81);
  right: 83px;
  top: 203px;
}
.goods {
  position: absolute;
  // float: left;
  left: 530px;
  display: flex;
  top: 60px;
  width: 955px;
  height: 340px;

  div {
    width: 230px;
    height: 100%;
    background-color: #fff;
    margin: 0 5px;
    // padding: auto;
    img {
      position: relative;
      float: left;
      width: 90%;
      margin-left: 10px;
    }
    .name {
      margin-top: 220px;
      font-size: 12px;
      // color: rgb(170, 170, 170);
      text-align: center;
    }
    .desc {
      font-size: 12px;
      text-align: center;
      margin-top: 10px;
      color: rgb(170, 170, 170);
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
  }
  // .red {
  //   position: absolute;
  //   top: 100px;
  //   width: 50%;
  // }
}
.red {
  position: absolute;
  top: 420px;
  left: 275px;
  width: 64%;
}
</style>