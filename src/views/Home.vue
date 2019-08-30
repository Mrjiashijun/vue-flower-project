<template>
  <div class="container">
    <div class="header">
      <div class="location">
        <van-button class="header-left-title" type="primary" @click="showPopup">
          {{regionalAddress}}
          <img src="../assets/icon/home-down.png" alt="地址" />
        </van-button>

        <van-popup v-model="show" class="popups">
          <div class="ui-dialog-cnt">
            <span class="ui-dialog-bd-top">
              <h4>请确认收货人所在城市</h4>
              <span>{{addrInfo}}</span>
            </span>
            <div class="ui-dialog-bd-bottom">
              <button @click="conceal">确定</button>
              <button @click="otherCities">其他城市</button>
            </div>
          </div>
        </van-popup>

        <van-area
          :area-list="areaList"
          value="110101"
          v-show="selectConceal"
          class="selected-town"
          @confirm="onAddrConfirm"
          @cancel="onAddrCancel"
        />
      </div>
      <div class="centre">
        <img src="../assets/imgs/home-logo.png" alt />
      </div>
      <div class="sort-by-flower-type">
        <router-link to="/sort">
          <img class="flower-type" src="../assets/icon/flower-sort.png" alt="鲜花列表" />
        </router-link>
      </div>
    </div>

    <div class="bannerimg"></div>
    <div class="bannering-title">
      <h2 class="banner-title">先花店 · 城关区分店</h2>
      <p>地址：兰州市城关区农民巷西部花市19-20号</p>
      <p class="phone">电话：13893116885</p>
    </div>

    <div class="table-nav">
      <ul>
        <li>
          <router-link to="/newproduct">
            <img src="../assets/imgs/newproduct.png" alt="新品上市" />
            <p>新品上市</p>
          </router-link>
        </li>
        <li>
          <router-link to="/optimizationrecommendations">
            <img src="../assets/imgs/recommendation.png" alt="优选推荐" />
            <p>优选推荐</p>
          </router-link>
        </li>
        <li>
          <router-link to="/familieswithflowers">
            <img src="../assets/imgs/familyuse.png" alt="家庭用花" />
            <img class="newproducts" src="../assets/imgs/newproducts.png" alt="新产品" />
            <p>家庭用花</p>
          </router-link>
        </li>
        <li>
          <router-link to="/attractions">
            <img src="../assets/imgs/hotgroupbuying.png" alt="热门团购" />
            <p>热门团购</p>
          </router-link>
        </li>
      </ul>
    </div>

    <div class="flash-sales">
      <router-link to="/flowerparticulars">
        <div class="preference-title">
          <span class="daily-rushed">每日疯抢</span>
          <span class="special">限时特惠</span>
          <span class="count-down">结束时间：2019-08-26 
            {{ leftTimeString}}
            </span>
        </div>
        <div class="flowercont">
          <div class="fimg">
            <img src="../assets/imgs/eternal.jpg" alt />
          </div>
          <div class="love-eternal-title">
            <p class="love-eternal">慈爱如阳光永恒</p>
            <s class="love-eternal-price">¥ 198.00</s>
            <div class="mitchie">
              <span class="price">¥ 176.00</span>
              <span class="gray">已抢0件 / 仅剩1件</span>
            </div>
          </div>
        </div>
      </router-link>
    </div>

    <div class="flower-type-title">
      <div class="titlove">
        <router-link to="/newproduct">
          <span>爱情鲜花</span>
          <span>· 相爱一生</span>
          <span class="lifetime-title">
            <img src="../assets/imgs/lifetime-title.png" alt />
          </span>
        </router-link>
      </div>
    </div>

    <!-- 鲜花分类列表 定义成一个组件 -->
    <Classification-of-Flowers />

    <!-- 版权部分 -->
    <div class="copyright">
      <div class="copyright-title">
        <p>
          <router-link to="http://www.miitbeian.gov.cn">粤ICP备07036976号-10</router-link>CopyRight 先花网
        </p>
        <p class="footer-copyright">
          版权所有
          <router-link to="home/newproduct">关于我们</router-link>
        </p>
      </div>
      <div class="copyright-img">
        <img
          src="../assets/imgs/industry-and-commerce.gif"
          alt="深圳市市场监督管理局企业主体身份公示"
          title="深圳市市场监督管理局企业主体身份公示"
        />
      </div>
    </div>

    <Vue-Flower-Footer :selected="'home'" />
  </div>
</template>

<script>
import AddressInfo from "../assets/js/arealist.js";
import ClassificationFlowers from "../components/ClassificationoFlowers.vue";
import VueFlowerFooter from "../common/Vue-Flower-Footer.vue";

export default {
  name: "home",
  data() {
    return {
      show: false,
      areaList: AddressInfo,
      toggle: false,
      selectConceal: false,
      addrInfo: "河南省 郑州市 二七区",
      regionalAddress: "二七区",
      over: false, // 是否已结束
      leftTimeString: "",
      // 计算十个小时
      endTime: "2019/08/29 00:00:00", // 截止时间 时间格式: 2019/01/01 00:00:00, 用 - 连接会有兼容性问题(IE: ???), ememem... ios 也会有, 当然也可以用时间戳
      interval: 1000 // 默认时间间隔
    };
  },
   created () {
    this.init()
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    conceal() {
      this.show = false;
    },
    otherCities() {
      this.selectConceal = true;
      this.show = false;
    },
    onSelAddr() {
      //选择地区
      this.show = true;
    },
    onAddrConfirm(val) {
      //确定选择
      this.selectConceal = false;
      this.addrInfo = val[0].name + val[1].name + val[2].name;
      this.regionalAddress = val[2].name;
    },
    onAddrCancel() {
      //取消选择
      this.selectConceal = false;
    },
      // 初始化
    init () {
      const interval = this.interval || 1000

      // 初始化
      this.start()

      // 间隔 interval 执行一次
      const timer = setInterval(() => {
        if (this.over) clearInterval(timer)
        this.start()
      }, interval)
    },

    // 开始计时
    start () {
      let leftTimes = this.countDown()
      this.leftTimeString = `${leftTimes[1]}:${leftTimes[2]}:${leftTimes[3]}`
    },

    // 倒计时
    countDown () {
      // 如果截止时间为空
      if (!this.endTime) {
        this.over = true
        return ['00', '00', '00', '00']
      }

      // 截止时间
      const endTime = new Date(this.endTime)

      // 当前时间
      const nowTime = new Date()

      // 剩余时间 秒
      let leftTime = parseInt((endTime.getTime() - nowTime.getTime()) / 1000)

      // 如果截止时间已经过期
      if (leftTime <= 0) {
        this.over = true
        return ['00', '00', '00', '00']
      }

      // 取整
      let D = this.addPrefixZero(parseInt(leftTime / (24 * 60 * 60)))
      let H = this.addPrefixZero(parseInt((leftTime / (60 * 60)) % 24))
      let M = this.addPrefixZero(parseInt((leftTime / 60) % 60))
      let S = this.addPrefixZero(parseInt(leftTime % 60))

      return [D, H, M, S]
    },

    // 补前缀 0
    addPrefixZero (number) {
      if (number >= 10) return (number + '')
      return `0${number}`
    }
  },
  components: {
    "Classification-of-Flowers": ClassificationFlowers,
    "Vue-Flower-Footer": VueFlowerFooter
  }
};
</script>

<style scoped>
/* 选择城市的样式 */
.selected-town {
  z-index: 100;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

/* *** */
.header {
  color: #fff;
  height: 2.8rem;
  line-height: 3.44rem;
  font-weight: bold;
  overflow: hidden;
  background: #ff4948;
  text-align: center;
}
.app {
  background: #ccc !important;
}
.container {
  margin-bottom: 2.9rem;
}
.location {
  height: 2.8rem;
  line-height: 2.8rem;
  left: 0.9rem;
  position: absolute;
  font-size: 0.95rem;
}

.header-left-title {
  color: #fff;
  font-weight: 200;
}

.location img {
  width: 0.75rem;
  margin-left: 0.4rem;
}

.centre img {
  height: 1.35rem;
  width: 4.2rem;
  vertical-align: middle;
  position: relative;
  left: 0.2rem;
  bottom: 0.4rem;
}

.sort-by-flower-type {
  position: absolute;
  right: 1.3rem;
  top: 0;
  height: auto;
}

.flower-type {
  width: 1.35rem;
  height: 1.1rem;
  position: relative;
  left: 0.4rem;
  bottom: 0.2rem;
}

.bannerimg,
.bannering-title {
  width: 100%;
  height: 8.2rem;
}

.bannerimg {
  background: url(../assets/imgs/home-banner-bgi.jpg) no-repeat;
  background-size: cover;
  color: #fff;
}

.bannering-title {
  position: absolute;
  top: 2.8rem;
  background: rgba(0, 0, 0, 0.65);
  color: #fff;
}

.bannering-title h2 {
  width: 100%;
  text-align: center;
  height: 4.4rem;
  line-height: 5.4rem;
  font-size: 1.2rem;
}

.bannering-title p {
  padding-left: 1.15rem;
  text-align: left;
  font-size: 0.5rem;
}

.bannering-title p:nth-of-type(2) {
  margin-top: 0.7rem;
}

/* table-nav的样式 */
.table-nav ul,
.table-nav {
  width: 100%;
  display: flex;
  height: 5.5rem;
  background: #fff;
}
.table-nav ul {
  padding-bottom: 0.5rem;
  background-color: rgb(233, 231, 231);
}
.table-nav ul li {
  background-color: #fff;
  width: 25%;
  text-align: center;
  position: relative;
}
.table-nav ul li img {
  margin-top: 0.5rem;
  width: 2.7rem;
}
.table-nav ul li p {
  font-size: 0.5rem;
  color: #696969;
  margin-top: 0.35rem;
}
.newproducts {
  width: 1.4rem !important;
  height: 0.8rem;
  position: absolute;
  right: 0.2rem;
  top: 0;
}
.flash-sales {
  width: auto;
  background: #fff;
  height: 10rem;
  display: block;
  overflow: hidden;
  margin-top: 0.5rem;
  padding: 0 1rem;
}
.flash-sales {
  display: block;
}
.preference-title {
  height: 3rem;
}
.daily-rushed {
  color: #ff4948;
  line-height: 3rem;
  font-weight: 700;
  font-size: 0.9rem;
}
.special {
  border: 1px solid red;
  font-size: 0.5rem;
  color: #ff5453;
  margin-left: 0.2rem;
  padding: 0 0.3rem;
  border-radius: 0.15rem;
}
.count-down {
  line-height: 3rem;
  float: right;
  font-size: 0.5rem;
  color: #999;
}
.flowercont {
  display: flex;
}
.fimg img {
  width: 5.95rem;
  height: 5.95rem;
}
.love-eternal-title {
  margin-left: 0.5rem;
  width: 100%;
}
.love-eternal {
  height: 2rem;
  line-height: 1.3rem;
  font-size: 0.8rem;
  margin-top: 0.05rem;
  color: #696969;
}
.love-eternal-price {
  display: block;
  margin-top: 0.7rem;
  font-size: 0.5rem;
  color: #999;
}
.mitchie {
  display: flex;
  justify-content: space-between;
}
.mitchie {
  margin-top: 1rem;
}
.mitchie .price {
  font-size: 0.9rem;
  font-weight: bold;
  color: #ff4948;
  margin-top: 0.05rem;
}
.mitchie .gray {
  font-size: 0.5rem;
  color: #999;
}
.flower-type-title {
  padding-top: 0.5rem;
  line-height: 2.7rem;
  background-color: #f3f3f3;
}
.titlove {
  padding: 0 1rem;
  background-color: #fff;
  border-bottom: 1px solid #ededed;
}
.titlove a {
  font-size: 0.9rem;
}
.titlove a span:nth-child(1) {
  color: red;
  font-weight: bold;
}
.lifetime-title {
  float: right;
}
.lifetime-title img {
  display: inline-block;
  width: 0.4rem;
  height: 0.8rem;
}
.copyright {
  height: 5rem;
  background-color: #f3f3f3;
  padding-top: 0.75rem;
  display: flex;
}
.copyright-title {
  width: 63%;
  padding: 0 3.75rem 0 1.125rem;
}
.copyright-title p,
.copyright-title a {
  color: #888;
  font-size: 0.75rem;
}
.footer-copyright {
  margin-top: 0.35rem;
}
.copyright-img img {
  width: 2.34375rem;
  height: 3.125rem;
}
.sale-flower {
  background-color: #fff;
}
.ui-dialog-cnt {
  color: #000;
  border-radius: 0.35rem !important;
  width: 18.5rem;
  font-weight: normal;
}
.popups {
  border-radius: 0.24rem;
}
.ui-dialog-bd-top {
  display: block;
  padding: 1rem 4.125rem;
  border-top: 0.25rem solid #12b7f5 !important;
  min-height: 2.875rem;
  text-align: left;
}
.ui-dialog-bd-top > h4 {
  line-height: 2rem;
  font-weight: normal;
}
.ui-dialog-bd-top > span {
  display: block;
  line-height: 1.375rem;
  font-size: 0.5rem;
}
.ui-dialog-bd-bottom > button {
  border: none;
  width: 50%;
  background-color: #fff;
  font-size: 1.125rem;
  border-top: 0.0625rem solid #ccc;
}
.ui-dialog-bd-bottom > button:nth-of-type(1) {
  border-right: 0.0625rem solid #ccc;
}
.header-left-title {
  background: rgb(255, 73, 72);
  border: none;
  padding: 0;
  font-size: 1rem;
}
</style>
