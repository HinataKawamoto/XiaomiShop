<template>
  <div>
    <Head></Head>
    <Title></Title>
    <Index></Index>
    <Main></Main>
    <Goods></Goods>
    <Goods2></Goods2>
  </div>
</template>

<script>
import Head from "../components/head.vue";
import Title from "../components/title.vue";
import Index from "../components/index.vue";
import Main from "./main.vue";
import Goods from "./goods.vue";
import Goods2 from "./goods2.vue";
export default {
  components: {
    Head,
    Title,
    Index,
    Main,
    Goods,
    Goods2,
  },
};
</script>

<style>
</style>