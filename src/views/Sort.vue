<template class="container">
  <div>
    <div class="flower-tabbar">
      <span @click="goback">
        <img src="../assets/icon/go-back.png" alt />
      </span>
      <h3>鲜花分类</h3>
    </div>

    <div class="leftbar">
      <ul>
        <li
        class="li-tab"
        v-for="(item,index) in tabsParam"
        @click="toggleTabs(index)" :class="{active:index===nowIndex}" :key="index">{{item}}</li>
      </ul>
      <div class="bottombar object" v-show="nowIndex===0">
        <ul>
          <li>
            <router-link to="/newproduct">父母</router-link>
          </li>
          <li>
            <router-link to="/newproduct">老师</router-link>
          </li>
          <li>
            <router-link to="/newproduct">同事</router-link>
          </li>
          <li>
            <router-link to="/newproduct">客户</router-link>
          </li>
          <li>
            <router-link to="/newproduct">领导</router-link>
          </li>
          <li>
            <router-link to="/newproduct">朋友</router-link>
          </li>
          <li>
            <router-link to="/newproduct">恋人</router-link>
          </li>
          <li>
            <router-link to="/newproduct">长辈</router-link>
          </li>
        </ul>
      </div>

      <div class="bottombar purpose" v-show="nowIndex===1">
        <ul>
          <li>
            <router-link to="/newproduct">婚庆婚车</router-link>
          </li>
          <li>
            <router-link to="/newproduct">满月新生</router-link>
          </li>
          <li>
            <router-link to="/newproduct">生日鲜花</router-link>
          </li>
          <li>
            <router-link to="/newproduct">祝贺鲜花</router-link>
          </li>
          <li>
            <router-link to="/newproduct">探病慰问</router-link>
          </li>
          <li>
            <router-link to="/newproduct">祭奠哀思</router-link>
          </li>
          <li>
            <router-link to="/newproduct">开业庆典</router-link>
          </li>
          <li>
            <router-link to="/newproduct">会议/演讲化</router-link>
          </li>
          <li>
            <router-link to="/newproduct">亲情鲜花</router-link>
          </li>
          <li>
            <router-link to="/newproduct">友情鲜花</router-link>
          </li>
          <li>
            <router-link to="/newproduct">爱情鲜花</router-link>
          </li>
        </ul>
      </div>

      <div class="bottombar flowers" v-show="nowIndex===2">
        <ul>
          <li>
            <router-link to="/newproduct">其他玫瑰</router-link>
          </li>
          <li>
            <router-link to="/newproduct">扶郎花</router-link>
          </li>
          <li>
            <router-link to="/newproduct">向日葵</router-link>
          </li>
          <li>
            <router-link to="/newproduct">满天星</router-link>
          </li>
          <li>
            <router-link to="/newproduct">菊花</router-link>
          </li>
          <li>
            <router-link to="/newproduct">特殊花材</router-link>
          </li>
          <li>
            <router-link to="/newproduct">乒乓菊</router-link>
          </li>
          <li>
            <router-link to="/newproduct">桔梗</router-link>
          </li>
          <li>
            <router-link to="/newproduct">绣球</router-link>
          </li>
          <li>
            <router-link to="/newproduct">蓝玫瑰</router-link>
          </li>
          <li>
            <router-link to="/newproduct">黄玫瑰</router-link>
          </li>
          <li>
            <router-link to="/newproduct">百合花</router-link>
          </li>
          <li>
            <router-link to="/newproduct">康乃馨</router-link>
          </li>
          <li>
            <router-link to="/newproduct">巧克力</router-link>
          </li>
          <li>
            <router-link to="/newproduct">粉玫瑰</router-link>
          </li>
          <li>
            <router-link to="/newproduct">香槟玫瑰</router-link>
          </li>
          <li>
            <router-link to="/newproduct">白玫瑰</router-link>
          </li>
          <li>
            <router-link to="/newproduct">紫玫瑰</router-link>
          </li>
          <li>
            <router-link to="/newproduct">红玫瑰</router-link>
          </li>
        </ul>
      </div>

      <div class="bottombar festival" v-show="nowIndex===3">
        <ul>
          <li>
            <router-link to="/newproduct">春节</router-link>
          </li>
          <li>
            <router-link to="/newproduct">六一儿童节</router-link>
          </li>
          <li>
            <router-link to="/newproduct">毕业季</router-link>
          </li>
          <li>
            <router-link to="/newproduct">母亲节</router-link>
          </li>
          <li>
            <router-link to="/newproduct">父亲节</router-link>
          </li>
          <li>
            <router-link to="/newproduct">元旦</router-link>
          </li>
          <li>
            <router-link to="/newproduct">圣诞节</router-link>
          </li>
          <li>
            <router-link to="/newproduct">七夕节</router-link>
          </li>
          <li>
            <router-link to="/newproduct">教师节</router-link>
          </li>
          <li>
            <router-link to="/newproduct">520情人节</router-link>
          </li>
          <li>
            <router-link to="/newproduct">三八女神节</router-link>
          </li>
          <li>
            <router-link to="/newproduct">国庆节</router-link>
          </li>
          <li>
            <router-link to="/newproduct">中秋节</router-link>
          </li>
          <li>
            <router-link to="/newproduct">重阳节</router-link>
          </li>
          <li>
            <router-link to="/newproduct">清明节</router-link>
          </li>
        </ul>
      </div>

      <div class="bottombar classs" v-show="nowIndex===4">
        <ul>
          <li>
            <router-link to="/newproduct">小魔盒</router-link>
          </li>
          <li>
            <router-link to="/newproduct">大魔盒</router-link>
          </li>
          <li>
            <router-link to="/newproduct">干花</router-link>
          </li>
          <li>
            <router-link to="/newproduct">仿真花</router-link>
          </li>
          <li>
            <router-link to="/newproduct">仿真花</router-link>
          </li>
          <li>
            <router-link to="/newproduct">花瓶</router-link>
          </li>
          <li>
            <router-link to="/newproduct">卡通花束</router-link>
          </li>
          <li>
            <router-link to="/newproduct">盆花</router-link>
          </li>
          <li>
            <router-link to="/newproduct">巧克力</router-link>
          </li>
          <li>
            <router-link to="/newproduct">绿植</router-link>
          </li>
        </ul>
      </div>
    </div>
    <Vue-Flower-Footer :selected="'sort'" />
  </div>
</template>

<script>
import "../assets/css/sort.css";
import VueFlowerFooter from "../common/Vue-Flower-Footer.vue";
export default {
  name: "sort",
  data() {
    return {
      tabsParam: ["对象", "用途", "花材", "节日","类目"],
      nowIndex: 0,
      isShow: false
    };
  },
  components: {
    "Vue-Flower-Footer": VueFlowerFooter
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    //切换tab项
    toggleTabs(index) {
      this.nowIndex = index;
    }
  }
};
</script>

<style scoped>
.flower-tabbar {
  width: auto;
  height: 2.75rem;
  background: #ff4948;
  color: #fff;
  line-height: 2.75rem;
  text-align: center;
}
.flower-tabbar span {
  display: block !important;
  position: absolute;
}
.flower-tabbar span img {
  width: 0.6875rem;
  height: 1.1875rem;
  margin-top: 0.75rem;
  margin-left: 0.875rem;
}
.flower-tabbar h3 {
  font-weight: 500;
  font-size: 1.05rem;
  display: inline-block;
}
.leftbar {
  display: flex;
}
.leftbar > ul {
  width: 24.2%;
}
.leftbar > ul > li {
  line-height: 3.75rem;
  text-align: center;
  font-size: 0.8125rem;
  background-color: #f3f3f3;
}
.bottombar {
  width: 75.5%;
  position: absolute;
  left: 5.7rem;
  background-color: #fff;
}
.bottombar > ul {
  display: flex;
  flex-wrap: wrap;
}
.bottombar > ul > li {
  height: 2.652rem;
  width: 6.375rem;
  margin: 0.9375rem 0 0 1.5625rem;
  border: 0.04rem solid #ddd;
  font-size: 0.8125rem;
  text-align: center;
  line-height: 2.652rem;
}
.bottombar > ul > li:last-child {
  margin-bottom: 4.1rem;
}

/* 控制鲜花分类的显示隐藏 */
/* .object {
  display: none;
}
.purpose {
  display: none;
}
.flowers {
  display: none;
}
.festival {
  display: none;
}
.classs {
  display: none;
} */
.li-tab {
  border-left: 0.2rem solid #f3f3f3;
}
.active {
  border-color: #ff4948;
  color: #ff4948;
  background: #fff !important;
}
/*  */
</style>