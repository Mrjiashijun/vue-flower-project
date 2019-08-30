<template>
  <div class="container">
    <div class="flower-shop">
      <span @click="goback">
        <img src="../assets/icon/go-back.png" alt />
      </span>
      <h3>详情</h3>
    </div>

    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white" class="swiper">
      <van-swipe-item></van-swipe-item>
      <van-swipe-item></van-swipe-item>
      <van-swipe-item></van-swipe-item>
      <van-swipe-item></van-swipe-item>
    </van-swipe>

    <div class="content">
      <div class="price">
        <p>
          <s>¥ 210.00</s>
        </p>
        <p>¥ 168.00</p>
      </div>
      <div class="info">
        <p>相伴一生——11朵红玫瑰花束</p>
        <p class="sendfrom">东城区 - 花店专人配送</p>
      </div>
      <div class="details">
        <p>11朵红玫瑰花束</p>
      </div>
      <div class="introduce-flower">
        <h5>花语</h5>
        <p
          class="gray"
        >我的思绪，恰如一曲《爱的罗曼史》，舒缓的三连音在均匀地流动，充满了诉说不完的情感，恰如无边的思绪缓缓地舒展。踏着音符仿佛回到从前，回到校园的青草地........</p>
      </div>
      <div class="introduce-flower zz-address">
        <h5>先花店 · {{regionalAddress}}分店</h5>
        <p class="gray">地址：兰州市城关区农民巷西部花市19-20号</p>
        <div class="call">
          <router-link to="tel:13893116885">
            <img class="telephone" src="../assets/imgs/phone.png" alt />
          </router-link>
        </div>
      </div>
      <div class="introduce-flower">
        <h5>鲜花养护</h5>
        <div class="maintenance">
          <img src="../assets/imgs/maintenance.jpg" alt />
        </div>
      </div>
    </div>

    <div class="toget">
      <div class="home-page-and-favorites">
        <div>
          <router-link to="/">
            <img class="magnitude back-homepage" src="../assets/icon/go-home.png" alt="返回首页">
            <p class="footer-title">首页</p>
          </router-link>
        </div>
        <div @click="toggle()">
            <span>
              <img class="magnitude" src="../assets/icon/collect-star.png" alt="添加收藏"  v-show="downIcon">
              <img class="magnitude" src="../assets/icon/collect-star-sel.png" alt="添加收藏" v-show="!downIcon">

              <p class="footer-title">收藏</p>
            </span>
        </div>
      </div>
      <div class="add-to-shopping-cart">
        <router-link to="/weixinlogin">加入购物车</router-link>
      </div>
      <div class="buy-immediately">
        <router-link to="/weixinlogin">立即购买</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "flower-particulars",
  data() {
    return {
      regionalAddress: "郑州",
      downIcon:true,
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    toggle(){
      this.downIcon = !this.downIcon
    },
  }
};
</script>

<style scoped>
.home-page-and-favorites{
  display: flex;
  justify-content: space-between;
  border-top: 0.05rem solid #ccc;
}
.home-page-and-favorites>div:nth-of-type(1){
  border-right: 0.05rem solid #ccc;
}
.home-page-and-favorites > div>a,.home-page-and-favorites > div>span{
  display: block;
  height: 100%;
  text-align: center;
  font-size: 0.75rem;
}
.magnitude{
  width: 1.25rem;
  margin-top: 0.6rem;
}
.back-homepage{
  margin-top: 0.4rem;
  width: 1.5rem;
}
.home-page-and-favorites > div {
  width: 50%;
  flex-wrap: nowrap;
  height: auto;
}
.footer-title{
  color: #00a5e0;
}
.toget {
  height: 3.5rem;
  display: flex;
  background-color: #fff;
  font-size: 0.875rem;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.toget > div {
  width: 33.3%;
}
.add-to-shopping-cart {
  background: #ff9630;
}
.buy-immediately {
  background: #ff4948;
}
.add-to-shopping-cart a,
.buy-immediately a {
  color: #fff;
}
.add-to-shopping-cart,
.buy-immediately {
  line-height: 3.5rem;
  text-align: center;
  font-weight: bold;
}
.maintenance {
  margin-top: 0.625rem;
}
.maintenance img {
  width: 100%;
}
.telephone {
  height: 3rem;
  width: 3rem;
  position: absolute;
  right: 0.625rem;
  top: 0.625rem;
}
.introduce-flower {
  padding: 0.75rem 0.9375rem;
  line-height: 1.375rem;
  color: #333;
  background: #fff;
  margin-top: 0.5rem;
  position: relative;
}
.introduce-flower > h5 {
  font-size: 0.875;
}
.introduce-flower .gray {
  color: #999999;
  font-size: 0.75rem;
}
.introduce-flower .phone {
  position: absolute;
  right: 0.625rem;
  top: 0.625rem;
  float: right;
}
.flower-shop {
  display: flex;
  line-height: 2.45rem;
  background-color: #ff4948;
  color: #fff;
}
.flower-shop > span > img {
  width: 0.6875rem;
  height: 1.1875rem;
  margin-left: 0.875rem;
  margin-top: 0.75rem;
}
.flower-shop > h3 {
  padding-top: 0.2rem;
  position: absolute;
  left: 46%;
  font-size: 1rem;
}
.van-swipe-item {
  width: 23.4375rem !important;
  height: 23.4375rem !important;
}
.van-swipe-item:nth-of-type(1) {
  background-image: url("../assets/imgs/particulars-swiper-one.jpg");
  background-size: contain;
}
.van-swipe-item:nth-of-type(2) {
  background-image: url("../assets/imgs/particulars-swiper-two.jpg");
  background-size: contain;
}
.van-swipe-item:nth-of-type(3) {
  background-image: url("../assets/imgs/particulars-swiper-three.jpg");
  background-size: contain;
}
.van-swipe-item:nth-of-type(4) {
  background-image: url("../assets/imgs/particulars-swiper-four.jpg");
  background-size: contain;
}
.content{
  margin-bottom: 4.3rem;
}
.content .price {
  height: 3.125rem;
  color: #fff;
  background: #ff4948;
}
.content .price p:nth-of-type(1) {
  font-size: 0.75rem;
}
.content .price p:nth-of-type(2) {
  font-size: 1.25rem;
  font-weight: bold;
}
.content .price p {
  padding-left: 1rem;
  padding-top: 0.15625rem;
}
.info,
.details {
  padding: 0.75rem 0.9375rem;
  border-bottom: 0.05rem solid #cccccc;
  background: #fff;
  line-height: 1.5rem;
}
.info {
  font-size: 1rem;
}
.info > p:nth-of-type(2) {
  font-size: 0.6875rem;
  line-height: 1.375rem;
  color: #999999;
}
.details {
  color: #999999;
  font-size: 0.6875rem;
}
</style>