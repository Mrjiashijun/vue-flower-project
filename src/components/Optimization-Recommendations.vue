<template>
  <div class="container">
    <div class="flower-shop">
      <router-link to="/home">
        <img src="../assets/icon/go-back.png" alt />
      </router-link>
      <h3>优选推荐</h3>
    </div>

    <NewestFlower/>
  </div>
</template>

<script>
import NewestFlower from "../components/NewestFlower.vue"
export default {
    name:"optimizationrecommendations",
    components:{
        "NewestFlower":NewestFlower,
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
.flower-shop>a>img{
    width: 0.6875rem;
    height: 1.1875rem;
    margin-left: 0.875rem;
    margin-top: 0.75rem;
}
.flower-shop>h3{
    padding-top: 0.2rem; 
    position: absolute;
    left: 42%;
    font-size: 1rem;
}
.sale-flower{
    margin: 0.5rem 0 0.5rem 0 !important;
}
</style>