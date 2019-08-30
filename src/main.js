import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tabbar, TabItem } from "mint-ui";
import SelfRem from "./assets/js/self-rem"

Vue.config.productionTip = false

// 导入mint-ui的核心脚本和样式，在所有组件中就可以使用了。
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 导入vant的核心脚本和样式，在所有组件中就可以使用了
import Vant from 'vant';
import {Area, Popup,Swipe, SwipeItem } from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)
Vue.use(Area);
Vue.use(Popup);
Vue.use(Swipe).use(SwipeItem);

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

new Vue({
  router,
  store,
  SelfRem,
  render: h => h(App)
}).$mount('#app')
