import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Sort from './views/Sort.vue'
import Shopping from './views/Shopping.vue'
import Mine from './views/Mine.vue'
import WxLogin from "./common/WxLogin.vue"
import Newproduct from "./components/Newproduct.vue";
import OptimizationRecommendations from "./components/Optimization-Recommendations.vue";
import FamiliesWithFlowers from "./components/Families-With-Flowers.vue";
import Attractions from "./components/Attractions.vue"
import FlowerParticulars from "./components/Flower-Particulars.vue"
import Login from "./components/login/Login.vue"
import AboutTheFlowerShop from "./components/About-The-Flower-Shop.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/sort',
      name: 'sort',
      component: Sort
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: Shopping
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/weixinlogin',
      name: 'weixinlogin',
      component: WxLogin
    },
    {
      path: '/newproduct',
      name: 'newproduct',
      component: Newproduct
    },
    {
      path: '/optimizationrecommendations',
      name: 'optimizationrecommendations',
      component: OptimizationRecommendations
    },
    {
      path: '/familieswithflowers',
      name: 'familieswithflowers',
      component: FamiliesWithFlowers
    },
    {
      path: '/attractions',
      name: 'attractions',
      component: Attractions
    },
    {
      path: '/flowerparticulars',
      name: 'flowerparticulars',
      component: FlowerParticulars
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/abouttheflowershop',
      name: 'abouttheflowershop',
      component: AboutTheFlowerShop
    },
  ]
})
