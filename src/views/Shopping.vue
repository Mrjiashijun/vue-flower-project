<template>
  <div>
      <Vue-Flower-Footer  :selected="'shopping'"/>
  </div>
</template>

<script>
import VueFlowerFooter from "../common/Vue-Flower-Footer.vue";
export default {
  
  name:"shopping",
  components:{
    "Vue-Flower-Footer": VueFlowerFooter
  }
}
</script>

<style scoped>
 
</style>