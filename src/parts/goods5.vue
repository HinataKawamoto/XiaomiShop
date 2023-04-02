<template>
  <div>
    <div class="box">
      <p class="title">搭配</p>
      <p class="hot" @mouseenter="hot()">配件</p>
      <p class="movie" @mouseenter="movie()">保护套</p>
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
        <a href="https://item.mi.com/10327.html"
          ><img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/10fb0086cb21120c53248a3d8cc56dc5.jpg?w=2452&h=240"
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
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/739ebd8abfc2b1be8866a2c1ad87e709.jpg?w=468&h=600",
          url: "https://item.mi.com/9016.html",
        },
        {
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ffe4182f1d9a5befdf2380ec90ae1620.jpg?w=468&h=600",
          url: "https://www.mi.com/dispenser/",
        },
      ],
      hots: [
        {
          value: "小米9 SE 街头风保护壳",
          desc: "简约时尚，多彩三色",
          sub: false,
          newPrice: "49",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c19fad90ad73f91e13c97cce2b15d82.jpg",
          url: "https://item.mi.com/9355.html",
        },
        {
          value: "小米CC9e 高透果冻保护壳",
          desc: "更薄更清透",
          sub: false,
          newPrice: "49",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9dd5ef3ab726a9b9b9cd39587a1d0e86.jpg",
          url: "https://item.mi.com/10173.html",
        },
        {
          value: "Redmi K20 / K20 Pro 怪力魔王保护壳",
          desc: "怪力魔王专属定制",
          sub: false,
          newPrice: "39",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8fb7f3be403cfcbe98576bee28c7cc25.jpg",
          url: "https://item.mi.com/9889.html",
        },
        {
          value: "小米MIX 3 獬豸神兽保护壳",
          desc: "因为独特而备受瞩目",
          sub: false,
          newPrice: "32.9",
          oldPrice: "69",
          src: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/20bb12392d70e3b7158c252e9c34d0b0.jpg",
          url: "https://item.mi.com/9133.html",
        },
        {
          value: "小米 USB充电器（4口）",
          desc: "化繁为简，以一敌四",
          sub: false,
          newPrice: "59",
          oldPrice: "69",
          src: "https://i8.mifile.cn/v1/a1/T1C__gBmYv1RXrhCrK.jpg",
          url: "https://www.mi.com/chongdianqi4kou",
        },
        {
          value: "米家LED随身灯",
          desc: "小巧轻便 5级亮度调节",
          sub: false,
          newPrice: "16.9",
          oldPrice: "19.9",
          src: "https://i8.mifile.cn/v1/a1/b0ded71f-b235-8f99-ba1c-20f80c3a4231.jpg",
          url: "https://item.mi.com/4053.html",
        },
        {
          value: "小米USB-C数据线 编织线版",
          desc: "高强度纤维编制线体",
          sub: true,
          newPrice: "18.9",
          oldPrice: "",
          src: "https://i8.mifile.cn/b2c-mimall-media/4132366589e457f407b918fe48c89cb1.jpg",
          url: "https://item.mi.com/10000124.html",
        },
        {
          value: "USB Type-C 转接头",
          desc: "普普通通转接头",
          sub: false,
          newPrice: "5",
          oldPrice: "",
          src: "https://i8.mifile.cn/v1/a1/T1hvC_BQdT1RXrhCrK.jpg",
          url: "https://item.mi.com/3751.html",
        },
      ],
      protective: [
        {
          value: "小米CC9美图定制版 标准高透贴膜",
          desc: "高清透亮，耐磨性强",
          sub: false,
          newPrice: "19",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5c200476bc9336d171931cb7ee2e4549.jpg",
          url: "https://item.mi.com/10171.html",
        },
        {
          value: "小米CC9e 标准高透贴膜",
          desc: "高清透亮，耐磨性强",
          sub: false,
          newPrice: "19",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/24f8b0547a798b69be1b868872ddd80f.jpg",
          url: "https://item.mi.com/10172.html",
        },
        {
          value: "Redmi 7A标准高透贴膜",
          desc: "高清高透，精彩清晰可见",
          sub: false,
          newPrice: "19",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/958e872fe9930838e90de8acc9fffc28.jpg",
          url: "https://item.mi.com/9891.html",
        },
        {
          value: "小仙女心愿手链保护壳",
          desc: "手链绕于指尖，仙气满满",
          sub: false,
          newPrice: "199",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e5599ccd40bab44fb0f1722d150fe43f.jpg",
          url: "https://item.mi.com/10177.html",
        },
        {
          value: "小米CC9 荧光色高透果冻保护壳",
          desc: "玩转多彩青春色",
          sub: false,
          newPrice: "49",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0d8a74ade6b1b5fbd0c88b9679c63832.jpg",
          url: "https://item.mi.com/10168.html",
        },
        {
          value: "Redmi K20 / K20 Pro 怪力魔王保护壳",
          desc: "怪力魔王专属定制",
          sub: false,
          newPrice: "39",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8fb7f3be403cfcbe98576bee28c7cc25.jpg",
          url: "https://item.mi.com/9889.html",
        },
        {
          value: "小米9 ARE U OK保护壳",
          desc: "一个与众不同的保护壳",
          sub: false,
          newPrice: "39",
          oldPrice: "49",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/39a5445afe8c48d9b92b2bf9d6d88a26.jpg",
          url: "https://item.mi.com/9720.html",
        },
        {
          value: "小米9 RUOK保护壳",
          desc: "一个与众相同的保护壳",
          sub: false,
          newPrice: "39",
          oldPrice: "",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/913e51883bf91da95c2f84b0776b95cf.jpg",
          url: "https://item.mi.com/9721.html",
        },
      ],
    };
  },
  methods: {
    hot() {
      this.table = this.hots;
    },
    movie() {
      this.table = this.protective;
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
  top: 1250px;
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
  left: 1170px;
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