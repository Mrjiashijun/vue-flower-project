<template>
  <div class="container">
    <div class="flower-shop">
      <router-link to="/home">
        <img src="../assets/icon/go-back.png" alt />
      </router-link>
      <h3>家庭用花</h3>
    </div>

    <van-tabs v-model="active" class="title-bar">
      <van-tab title="全部">
          <Sales-Flower/>
      </van-tab>
      <van-tab title="全国同款">
        <Price-Flower/>
      </van-tab>
      <van-tab title="分店定制">
        <NewestFlower/>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NewestFlower from "./NewestFlower.vue";
import SalesFlower from "./Sales-Flower.vue";
import PriceFlower from "./Price-Flower.vue";
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    "Sales-Flower": SalesFlower,
    "Price-Flower": PriceFlower,
    "NewestFlower": NewestFlower
  }
};
</script>

<style scoped>
.flower-shop {
  display: flex;
  line-height: 2.45rem;
  background-color: #ff4948;
  color: #fff;
}
.flower-shop > a > img {
  width: 0.6875rem;
  height: 1.1875rem;
  margin-left: 0.875rem;
  margin-top: 0.75rem;
}
.flower-shop > h3 {
  padding-top: 0.2rem;
  position: absolute;
  left: 42%;
  font-size: 1rem;
}
</style>