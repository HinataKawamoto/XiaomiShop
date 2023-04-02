<template>
  <div>
    <Head></Head>
    <Title></Title>
    <Index></Index>
    <Main></Main>
    <Goods></Goods>
    <Goods2></Goods2>
    <Goods3></Goods3>
    <Goods4></Goods4>
    <Goods5></Goods5>
    <Goods6></Goods6>
    <Video></Video>
    <Footer></Footer>
    <Tail></Tail>
  </div>
</template>

<script>
import Head from "../components/head.vue";
import Title from "../components/title.vue";
import Index from "../components/index.vue";
import Main from "./main.vue";
import Goods from "./goods.vue";
import Goods2 from "../parts/goods2.vue";
import Goods3 from "../parts/goods3.vue";
import Goods4 from "../parts/goods4.vue";
import Goods5 from "../parts/goods5.vue";
import Goods6 from "../parts/goods6.vue";
import Video from "./video.vue";
import Footer from "./footer.vue";
import Tail from "./tail.vue";
export default {
  components: {
    Head,
    Title,
    Index,
    Main,
    Goods,
    Goods2,
    Goods3,
    Goods4,
    Goods5,
    Goods6,
    Video,
    Footer,
    Tail,
  },
};
</script>

<style>
</style>