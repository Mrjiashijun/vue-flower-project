<template>
  <mt-tabbar v-model="currentTab" :fixed="true" class="vue-flower-footer">
    <mt-tab-item
      id="home"
      :class="{on: '/'===$route.path}"
      @click.native="$router.push({name:currentTab})"
    >
      <img slot="icon" src="../assets/imgs/home-selected.png" v-show="currentTab=='home'" />
      <img slot="icon" src="../assets/imgs/home.png" v-show="currentTab!='home'" />
      <span class="footer-title">首页</span>
    </mt-tab-item>

    <mt-tab-item
      id="sort"
      :class="{on: '/sort'===$route.path}"
      @click.native="$router.push({name:currentTab})"
    >
      <img slot="icon" src="../assets/imgs/fenlei-selected.png" v-show="currentTab=='sort'" />
      <img slot="icon" src="../assets/imgs/fenlei.png" v-show="currentTab!='sort'" />
      <span class="footer-title">鲜花分类</span>
    </mt-tab-item>

    <mt-tab-item
      id="weixinlogin"
      :class="{on: '/shopping'===$route.path}"
      @click.native="$router.push({name:currentTab})"
    >
      <img slot="icon" src="../assets/imgs/gouwuche.png" v-show="currentTab=='shopping'" />
      <img slot="icon" src="../assets/imgs/gouwuche.png" v-show="currentTab!='shopping'" />
      <span class="footer-title">购物车</span>
    </mt-tab-item>

    <mt-tab-item
      id="mine"
      :class="{on: '/mine'===$route.path}"
      @click.native="$router.push({name:currentTab})"
    >
      <img slot="icon" src="../assets/imgs/mine-selected.png" v-show="currentTab=='mine'" />
      <img slot="icon" src="../assets/imgs/mine.png" v-show="currentTab!='mine'" />
      <span class="footer-title">我的</span>
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  name: "vue-flower-footer",
  data(){
    return {
      currentTab: this.selected
    }
  },
  props: ["selected"]
};
</script>

<style>
.mint-tabbar {
  border-top: 0.04rem solid #ededed;
  background-color: #fff !important;
}
.vue-flower-footer {
  height: 2.9rem;
  position: fixed;
  z-index: 12;
  width: auto;
}
.mint-tab-item {
  padding: 0 !important;
  width: 20%;
}
.mint-tab-item-icon,
.mint-tab-item-icon img {
  margin-top: 0.4rem;
  width: 1.2rem !important;
  height: 1.2rem !important;
}

.footer-title {
  height: 0.8rem;
  display: block;
  color: #999;
  font-size: 0.7rem !important;
}
</style>
