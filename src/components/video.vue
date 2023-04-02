<template>
  <div>
    <div class="box">
      <p class="title">视频</p>
      <a href="https://www.mi.com/video"> <p class="movie">查看全部</p></a>
      <div class="big">
        <div class="big-box">
          <div
            class="big-box-a"
            v-for="(item, index) in videoData"
            :key="index"
          >
            <img :src="item.src" alt="" />
            <p class="value">{{ item.value }}</p>
            <p class="desc">{{ item.desc }}</p>

            <a
              href="javascript: void(0);"
              title="点击播放视频"
              @click="playVideo(item)"
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "../router/bus.js";
export default {
  data() {
    return {
      videoData: [
        {
          value: "Redmi Note 8 系列发布会",
          desc: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3a134c9f8fffb85a47ac397e7eeba7e8.jpg",
          videourl:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/df3dc1da003b7db992e902f653326476.mp4",
        },
        {
          value: "小米CC9",
          desc: "深蓝星球",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1541da85ac8b204056374641eee24726.jpg",
          videourl:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7a2e31bf18e8fb5abd2a32ea93f0d46b.mp4",
        },
        {
          value: "Redmi Note 7系列",
          desc: "镜花水月",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/af835147320dafa808331f156222223e.jpg",
          videourl:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0bfbd7781fc7531592994b82f2716006.mp4",
        },
        {
          value: "黑鲨游戏手机2 Pro",
          desc: "指尖主宰 发布会",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c2e9a7fc809f7aeac30bf538baf8f156.jpg",
          videourl:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5f51a274a73db915a9623ccdfd35f678.mp4",
        },
      ],
    };
  },
  methods: {
    playVideo(item) {
      bus.$emit("videoWindowEvent", item);
      console.log(item);
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  position: relative;
  top: 1650px;
  left: -60px;
  width: 1230px;
  height: 296px;
  // background-color: white;
  .title {
    position: absolute;
    display: flex;
    font-size: 23px;
    opacity: 0.8;
    top: -30px;
  }
}
// .big {
//   position: relative;
//   top: 0px;
//   width: 100%;
//   height: 615px;
//   background-color: wheat;
// }
.big-box {
  position: absolute;
  float: left;
  width: 100%;
}
.big-box-a {
  position: relative;
  // display: inline-block;
  float: left;
  width: 285px;
  height: 295px;
  margin-top: 20px;
  margin-right: 20px;
  margin-left: 2px;
  background-color: white;
  -webkit-transform: perspective(0.5px) translateZ(0);
  transform: perspective(0.5px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
  cursor: pointer;
}
img {
  width: 100%;
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

.movie {
  position: absolute;
  display: inline-block;
  left: 1150px;
  top: -25px;
  font-size: 16px;
  cursor: pointer;
  color: black;
}

.movie:hover {
  text-decoration: underline;
  color: rgb(255, 103, 9);
}
.value {
  margin-top: 30px;
  text-align: center;
}
.desc {
  text-align: center;
  color: rgb(176, 176, 176);
  margin-top: 10px;
  font-size: 12px;
}
</style>