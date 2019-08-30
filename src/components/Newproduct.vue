<template>
  <div class="container">
    <Header-Top />

    <Vue-Flower-Footer />

    <van-tabs v-model= active class="title-bar">
      <van-tab title="最新">
          <NewestFlower/>
      </van-tab>
      <van-tab title="销量">
          <Sales-Flower/>
      </van-tab>
      <van-tab title="价格">
          <Price-Flower/>
      </van-tab>
      <van-tab title="评价">
          <Evaluate-Flower/>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import VueFlowerFooter from "../common/Vue-Flower-Footer.vue";
import HeaderTop from "../common/Header-Top.vue";
import NewestFlower from "./NewestFlower.vue";
import SalesFlower from "./Sales-Flower.vue";
import PriceFlower from "./Price-Flower.vue";
import EvaluateFlower from "./Evaluate-Flower.vue"

export default {
  data() {
    return {
      active: 0,
    };
  },
  components: {
    "Vue-Flower-Footer": VueFlowerFooter,
    "Header-Top": HeaderTop,
    "NewestFlower": NewestFlower,
    "Sales-Flower":SalesFlower,
    "Price-Flower":PriceFlower,
    "Evaluate-Flower":EvaluateFlower,
  }
};
</script>

<style scoped>

</style>