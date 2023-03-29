<template>
  <div>
    <div class="box">
      <p class="title">手机</p>
      <div class="big">
        <div class="big-box">
          <a href="https://www.mi.com/mix2s/">
            <img
              class="big-img"
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/79ed6663b57e30554a5d1f0653c68b78.jpg?w=468&h=1228"
              alt=""
          /></a>
        </div>
        <div class="big-left">
          <div class="little-box" v-for="(item, index) in goods" :key="index">
            <a :href="item.url">
              <img :src="item.src" alt="" />
              <p class="value">{{ item.value }}</p>
              <p class="desc">{{ item.desc }}</p>
              <p class="newPrice">
                {{ item.newPrice }}元<span class="oldPrice"
                  >{{ item.oldPrice }}元</span
                >
              </p></a
            >
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e64bcac4e4b7c2ceb94f277bbc57ad45.jpg?w=2452&h=240"
          alt=""
          class="ad"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: [
        {
          value: "Redmi Note 8 Pro",
          desc: "6400万全场景四摄",
          sub: true,
          newPrice: "1399",
          oldPrice: "1499",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg",
          url: "http://www.mi.com/redminote8pro",
        },
        {
          value: "Redmi Note 8",
          desc: "千元4800万四摄",
          sub: true,
          newPrice: "999",
          oldPrice: "1199",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg",
          url: "http://www.mi.com/redminote8",
        },
        {
          value: "Redmi K20 Pro 6GB+128GB",
          desc: "骁龙855， 弹出全面屏",
          sub: false,
          newPrice: "2299",
          oldPrice: "2599",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/beee478168e5c4fd0d66369386fddbbe.jpg",
          url: "https://www.mi.com/redmik20pro/",
        },
        {
          value: "Redmi Note 7",
          desc: "4800万拍照千元机",
          sub: false,
          newPrice: "1099",
          oldPrice: "1399",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ce61b71e2f81df62bd0c05aaa901d22.jpg",
          url: "https://www.mi.com/redminote7/",
        },
        {
          value: "Redmi 7",
          desc: "4000mAh超长续航",
          sub: true,
          newPrice: "699",
          oldPrice: "799",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9aab8a7fa9005ef918c9aa2d5f17c806.jpg",
          url: "https://www.mi.com/redmi7/",
        },
        {
          value: "小米MIX 3 8GB+128GB",
          desc: "DxO百分拍照手机",
          sub: false,
          newPrice: "2599",
          oldPrice: "3599",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/411d540271f6efbdd882fa33daee0de3.jpg",
          url: "https://www.mi.com/mix3/",
        },
        {
          value: "小米CC9",
          desc: "3200万自拍，4800万三摄",
          sub: true,
          newPrice: "1699",
          oldPrice: "1799",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bd25cc614a670f4d5546fe82e239ef86.jpg",
          url: "https://www.mi.com/micc9/",
        },
        {
          value: "小米9 SE",
          desc: "索尼4800万三摄，骁龙712",
          sub: true,
          newPrice: "1599",
          oldPrice: "1999",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/134efaa5dec3267ce29e36bad3ec26c9.jpg",
          url: "https://www.mi.com/mi9se/",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.box {
  position: relative;
  top: 460px;
  left: -60px;
  width: 1220px;
  height: 715px;
  .title {
    position: relative;
    display: flex;
    font-size: 23px;
    left: 0px;
    top: 10px;
    opacity: 0.8;
  }
}
.big {
  position: relative;
  top: 30px;
  width: 100%;
  height: 615px;
  // background-color: white;
}
.big-box {
  display: flex;
  position: absolute;
  width: 234px;
  height: 100%;
  // background-color: pink;
  -webkit-transform: perspective(0.5px) translateZ(0);
  transform: perspective(0.5px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
  .big-img {
    position: relative;
    width: 100%;
    max-width: 100%;
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
.big-box:hover {
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
</style>