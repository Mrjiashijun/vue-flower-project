<template>
  <div class="container">
    <div class="flower-shop">
      <span @click="goback">
        <img src="../assets/icon/go-back.png" alt />
      </span>
      <h3>先花店</h3>
    </div>
  </div>
</template>

<script>
export default {
    name:"header-top",
    methods: {
    goback() {
      this.$router.go(-1);
    }
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
.flower-shop>span>img{
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
</style>