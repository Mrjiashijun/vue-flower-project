<template>
  <div class="wx-login">
    <div class="login">
      <span>
        <router-link to="/home">
          <img src="../assets/imgs/weixin.png" alt />
        </router-link>
      </span>
      <span>微信登录</span>
    </div>
  </div>
</template>

<script>
import VueFlowerFooter from "../common/Vue-Flower-Footer.vue";
export default {
  name: "shopping",
  components: {
    "Vue-Flower-Footer": VueFlowerFooter
  }
};
</script>

<style scoped>
.wx-login {
  width: auto;
  height: 100vh;
  background: url("../assets/imgs/lily-bgi.png");
}
.login{
  width: auto;
  height: 6.25rem;
  padding-top: 5rem;
  text-align: center;
}
.login>span:nth-last-child(1){
  font-size: 0.5rem;
  color: #ddd;
}
.login>span:nth-last-child(2){
  display: block;
}
.login>span>a>img{
  width: 4.5rem;
  height: 4.5rem;
}
</style>