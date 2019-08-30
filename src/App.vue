<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name:"app",
  components:{
    
  }
}
</script>

<style>
/* 在vue全局中清除默认样式 */
*{
  margin: 0;
  padding:0;
}
a{
  text-decoration: none;
  color: #000;
}
li,ul{
  list-style: none;
}
</style>
