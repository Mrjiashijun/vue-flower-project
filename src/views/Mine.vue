<template>
  <div class="container">
    <div class="tbar">
      <div class="tbar-header-img">
        <img src="../assets/icon/message.png" alt />
      </div>
      <h3>我的</h3>
      <div class="set-address">
        <router-link to="/weixinlogin">设置收货地址</router-link>
      </div>
    </div>

    <div class="mycont">
      <dir class="userimg">
        <router-link to="/login">
          <img src="../assets/imgs/login-img.png" alt="">
        </router-link>
      </dir>
      <div class="ncount">
        <router-link to="/login">
          <p class="logging-status">未登录</p>
        </router-link>
        <p>免费注册可享受会员专属优惠折扣哦</p>
      </div>
    </div>

    <div class="orderstatus">
      <p>我的订单</p>
      <div>
        <router-link to="/weixinlogin">
          <span>
            查看全部订单 
            <img src="../assets/icon/over-order.png" alt="">
          </span>
        </router-link>
      </div>
    </div>

    <div class="my-status">
      <ul>
        <li>
          <routerLink to="/weixinlogin">
            <img src="../assets/imgs/obligation.png" alt="待付款">
            <p>待付款</p>
          </routerLink>
        </li>
        <li>
          <routerLink to="/weixinlogin">
            <img src="../assets/imgs/toshipped.png" alt="待发货">
            <p>待发货</p>
          </routerLink>
        </li>
        <li>
          <routerLink to="/weixinlogin">
            <img src="../assets/imgs/distribution .png" alt="配送中">
            <p>配送中</p>
          </routerLink>
        </li>
        <li>
          <routerLink to="/weixinlogin">
            <img src="../assets/imgs/toevaluated.png" alt="待评价">
            <p>待评价</p>
          </routerLink>
        </li>
      </ul>
    </div>

    <div class="my-shopping-record">
      <ul>
        <li>
          <routerLink to="/weixinlogin">
            <span>我的购物记录</span>
            <span>
              <img src="../assets/icon/over-order.png" alt="我的购物记录">
            </span>
          </routerLink>
        </li>
        <li>
          <routerLink to="/weixinlogin">
            <span>
              我的收藏
            </span>
            <span>
               <img src="../assets/icon/over-order.png" alt="我的收藏">
            </span>
          </routerLink>
        </li>
        <li>
          <routerLink to="/mine">
            <span>
              退出个人中心
            </span>
            <span>
               <img src="../assets/icon/over-order.png" alt="退出个人中心">
            </span>
          </routerLink>
        </li>
      </ul>
    </div>

    <Vue-Flower-Footer :selected="'mine'"/>
  </div>
</template>

<script>
import VueFlowerFooter from "../common/Vue-Flower-Footer.vue";

export default {
  name: "mine",
  components:{
    "Vue-Flower-Footer": VueFlowerFooter,
  }
  
};
</script>

<style lang="css">
.tbar {
  height: 2.75rem;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  background: #ff4948;
  color: #fff;
  line-height: 2.75rem;
  font-weight: 500;
}
.tbar-header-img > img {
  width: 1.375rem;
  height: 1rem;
  margin-top: 0.75rem;
}
/* 使用兄弟选择器 */
.tbar-header-img ~ h3 {
  position: relative;
  left: 2rem;
  font-size: 1rem;
}
.set-address a {
  color: #fff;
  font-size: 0.875rem;
}
.mycont{
  height: 4.0625rem;
  display: flex;
  background-color: #ff4948;
  color: #fff;
  padding: 1.25rem 1.25rem 0 1.25rem;
}
.userimg>a>img{
  width: 2.625rem;
}
.ncount{
  padding-left:0.75rem; 
}
.logging-status{
  font-size: 0.875rem;
  line-height: 1.4375rem;
}
.ncount>a{
  color: #fff;
}
.ncount>p{
  font-size: 0.6rem;
  line-height: 1.55rem;
}
.orderstatus{
  display: flex;
  justify-content: space-between;
  line-height: 2.5rem;
  padding: 0 1rem;
  margin-top: 0.5rem;
  background-color: #fff;
}
.orderstatus>p{
  font-size: 0.875rem;
  color: #524943;
}
.orderstatus>div>a>span{
  font-size: 0.5rem;
  color: #999;
}
.orderstatus>div>a>span>img{
  height: 0.75rem;
  width: 0.375rem;
  /* 让图片和文字垂直对齐 */
  vertical-align: middle;
  position: relative;
  bottom: 0.08rem;
}
.my-status{
  background: #fff;
}
.my-status ul{
  height: 5rem;
  display: flex;
}
.my-status>ul>li{
  width: 25%;
  text-align: center;
}
.my-status>ul>li>a>img{
  width: 2.1875rem;
  height: 1.875rem;
  margin-top: 0.5rem;
}
.my-status>ul>li>a>p{
  color: #524943;
  font-size: 0.75rem;
  margin-top: 0.4rem;
}
.my-shopping-record{
  margin-top: 0.5rem;
}
.my-shopping-record>ul>li>a {
  display: block;
  width: auto;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  line-height: 2.875rem;
  font-size: 0.875rem;
  border-bottom: 0.005rem solid #ebebeb;
  background-color: #fff;
}
.my-shopping-record>ul>li>a>span>img{
  width: 0.375rem;
  height: 0.75rem;
}
</style>