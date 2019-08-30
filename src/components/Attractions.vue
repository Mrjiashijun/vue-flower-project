<template>
  <div class="container">
    <div class="flower-shop">
      <router-link to="/home">
        <img src="../assets/icon/go-back.png" alt="返回上一级" />
      </router-link>
      <h3>热门团购</h3>
    </div>

    <van-tabs v-model="active">
      <van-tab title="全部">
        <div class="container">
          <div class="content" v-for="(item, index) in 8" :key="index">
            <div class="groupimg">
              <img src="../assets/imgs/persistent.jpg" alt="挚爱之心，执子之手" />
            </div>
            <div class="priceeare">
              <div class="purchase">
                <p class="group">团购价</p>
                <div class="price">
                  <span>¥ 218.00</span>
                  <s class="group">原价 ¥272.00</s>
                </div>
              </div>
              <div class="account-paid group">82人已付款</div>
            </div>
            <div class="info">
              <p>挚爱之心，执子之手。（下单请勿必告知分店，主花使用颜色及款式）</p>
              <p>城关区 - 花店专人配送</p>
            </div>
          </div>
        </div>
      </van-tab>

      <van-tab title="伴手礼">
        <div class="container">
          <div class="content" v-for="(item, index) in 8" :key="index">
            <div class="groupimg">
              <img src="../assets/imgs/one-life.jpg" alt="挚爱之心，执子之手" />
            </div>
            <div class="priceeare">
              <div class="purchase">
                <p class="group">团购价</p>
                <div class="price">
                  <span>¥ 218.00</span>
                  <s class="group">原价 ¥272.00</s>
                </div>
              </div>
              <div class="account-paid group">82人已付款</div>
            </div>
            <div class="info">
              <p>挚爱之心，执子之手。（下单请勿必告知分店，主花使用颜色及款式）</p>
              <p>城关区 - 花店专人配送</p>
            </div>
          </div>
        </div>
      </van-tab>

      <van-tab title="十二生肖">
        <div class="container">
          <div class="content" v-for="(item, index) in 8" :key="index">
            <div class="groupimg">
              <img src="../assets/imgs/confessions.jpg" alt="挚爱之心，执子之手" />
            </div>
            <div class="priceeare">
              <div class="purchase">
                <p class="group">团购价</p>
                <div class="price">
                  <span>¥ 218.00</span>
                  <s class="group">原价 ¥272.00</s>
                </div>
              </div>
              <div class="account-paid group">82人已付款</div>
            </div>
            <div class="info">
              <p>挚爱之心，执子之手。（下单请勿必告知分店，主花使用颜色及款式）</p>
              <p>城关区 - 花店专人配送</p>
            </div>
          </div>
        </div>
      </van-tab>

      <van-tab title="康乃馨">
        <div class="container">
          <div class="content" v-for="(item, index) in 8" :key="index">
            <div class="groupimg">
              <img src="../assets/imgs/magic-aurora-borealis.jpg" alt="挚爱之心，执子之手" />
            </div>
            <div class="priceeare">
              <div class="purchase">
                <p class="group">团购价</p>
                <div class="price">
                  <span>¥ 218.00</span>
                  <s class="group">原价 ¥272.00</s>
                </div>
              </div>
              <div class="account-paid group">82人已付款</div>
            </div>
            <div class="info">
              <p>挚爱之心，执子之手。（下单请勿必告知分店，主花使用颜色及款式）</p>
              <p>城关区 - 花店专人配送</p>
            </div>
          </div>
        </div>
      </van-tab>

      <van-tab title="手提花篮">
        <div class="container">
          <div class="content" v-for="(item, index) in 8" :key="index">
            <div class="groupimg">
              <img src="../assets/imgs/i-love-your.jpg" alt="挚爱之心，执子之手" />
            </div>
            <div class="priceeare">
              <div class="purchase">
                <p class="group">团购价</p>
                <div class="price">
                  <span>¥ 218.00</span>
                  <s class="group">原价 ¥272.00</s>
                </div>
              </div>
              <div class="account-paid group">82人已付款</div>
            </div>
            <div class="info">
              <p>挚爱之心，执子之手。（下单请勿必告知分店，主花使用颜色及款式）</p>
              <p>城关区 - 花店专人配送</p>
            </div>
          </div>
        </div>
      </van-tab>

      <van-tab title="潘多拉">
        <div class="container">
          <div class="content" v-for="(item, index) in 8" :key="index">
            <div class="groupimg">
              <img src="../assets/imgs/never-changes.jpg" alt="挚爱之心，执子之手" />
            </div>
            <div class="priceeare">
              <div class="purchase">
                <p class="group">团购价</p>
                <div class="price">
                  <span>¥ 218.00</span>
                  <s class="group">原价 ¥272.00</s>
                </div>
              </div>
              <div class="account-paid group">82人已付款</div>
            </div>
            <div class="info">
              <p>挚爱之心，执子之手。（下单请勿必告知分店，主花使用颜色及款式）</p>
              <p>城关区 - 花店专人配送</p>
            </div>
          </div>
        </div>
      </van-tab>

      <van-tab title="精品礼盒">
        <div class="container">
          <div class="content" v-for="(item, index) in 8" :key="index">
            <div class="groupimg">
              <img src="../assets/imgs/the-greatest-happiness-of-this-lif.jpg" alt="挚爱之心，执子之手" />
            </div>
            <div class="priceeare">
              <div class="purchase">
                <p class="group">团购价</p>
                <div class="price">
                  <span>¥ 218.00</span>
                  <s class="group">原价 ¥272.00</s>
                </div>
              </div>
              <div class="account-paid group">82人已付款</div>
            </div>
            <div class="info">
              <p>挚爱之心，执子之手。（下单请勿必告知分店，主花使用颜色及款式）</p>
              <p>城关区 - 花店专人配送</p>
            </div>
          </div>
        </div>
      </van-tab>

      <van-tab title="精品花束">
        <div class="container">
          <div class="content" v-for="(item, index) in 8" :key="index">
            <div class="groupimg">
              <img src="../assets/imgs/good-time-flowers.jpg" alt="挚爱之心，执子之手" />
            </div>
            <div class="priceeare">
              <div class="purchase">
                <p class="group">团购价</p>
                <div class="price">
                  <span>¥ 218.00</span>
                  <s class="group">原价 ¥272.00</s>
                </div>
              </div>
              <div class="account-paid group">82人已付款</div>
            </div>
            <div class="info">
              <p>挚爱之心，执子之手。（下单请勿必告知分店，主花使用颜色及款式）</p>
              <p>城关区 - 花店专人配送</p>
            </div>
          </div>
        </div>
      </van-tab>

      <van-tab title="最新上传">
        <div class="container">
          <div class="content" v-for="(item, index) in 8" :key="index">
            <div class="groupimg">
              <img src="../assets/imgs/brilliant-story-flowers.jpg" alt="挚爱之心，执子之手" />
            </div>
            <div class="priceeare">
              <div class="purchase">
                <p class="group">团购价</p>
                <div class="price">
                  <span>¥ 218.00</span>
                  <s class="group">原价 ¥272.00</s>
                </div>
              </div>
              <div class="account-paid group">82人已付款</div>
            </div>
            <div class="info">
              <p>挚爱之心，执子之手。（下单请勿必告知分店，主花使用颜色及款式）</p>
              <p>城关区 - 花店专人配送</p>
            </div>
          </div>
        </div>
      </van-tab>

      <van-tab title="销量最高">
        <div class="container">
          <div class="content" v-for="(item, index) in 8" :key="index">
            <div class="groupimg">
              <img src="../assets/imgs/Loving-flowers.jpg" alt="挚爱之心，执子之手" />
            </div>
            <div class="priceeare">
              <div class="purchase">
                <p class="group">团购价</p>
                <div class="price">
                  <span>¥ 218.00</span>
                  <s class="group">原价 ¥272.00</s>
                </div>
              </div>
              <div class="account-paid group">82人已付款</div>
            </div>
            <div class="info">
              <p>挚爱之心，执子之手。（下单请勿必告知分店，主花使用颜色及款式）</p>
              <p>城关区 - 花店专人配送</p>
            </div>
          </div>
        </div>
      </van-tab>

      <van-tab title="价格最高">
        <div class="container">
          <div class="content" v-for="(item, index) in 8" :key="index">
            <div class="groupimg">
              <img src="../assets/imgs/loving-flowers.png" alt="挚爱之心，执子之手" />
            </div>
            <div class="priceeare">
              <div class="purchase">
                <p class="group">团购价</p>
                <div class="price">
                  <span>¥ 218.00</span>
                  <s class="group">原价 ¥272.00</s>
                </div>
              </div>
              <div class="account-paid group">82人已付款</div>
            </div>
            <div class="info">
              <p>挚爱之心，执子之手。（下单请勿必告知分店，主花使用颜色及款式）</p>
              <p>城关区 - 花店专人配送</p>
            </div>
          </div>
        </div>
      </van-tab>

      <van-tab title="价格最低">
        <div class="container">
          <div class="content" v-for="(item, index) in 8" :key="index">
            <div class="groupimg">
              <img src="../assets/imgs/asphyxiated-love.png" alt="挚爱之心，执子之手" />
            </div>
            <div class="priceeare">
              <div class="purchase">
                <p class="group">团购价</p>
                <div class="price">
                  <span>¥ 218.00</span>
                  <s class="group">原价 ¥272.00</s>
                </div>
              </div>
              <div class="account-paid group">82人已付款</div>
            </div>
            <div class="info">
              <p>挚爱之心，执子之手。（下单请勿必告知分店，主花使用颜色及款式）</p>
              <p>城关区 - 花店专人配送</p>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// import "../assets/css/attractions.css";

export default {
  data() {
    return {
      active: 0
    };
  },
  components: {}
};
</script>

<style scoped>
.flower-shop {
  display: flex;
  line-height: 2.45rem;
  background-color: #ff4948;
  color: #fff;
}
.flower-shop > a > img {
  width: 0.6875rem;
  height: 1.1875rem;
  margin-left: 0.875rem;
  margin-top: 0.75rem;
}
.flower-shop > h3 {
  padding-top: 0.2rem;
  position: absolute;
  left: 42%;
  font-size: 1rem;
}

.van-tabs--line .van-tabs__wrap {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid red !important;
}
.groupimg > img {
  width: 100%;
}
.priceeare {
  height: 3rem;
  display: flex;
  background: #ff4948;
  justify-content: space-between;
  border: 1px solid red;
  padding: 0.15625rem 0.9375rem 0;
  color: #fff;
}
.group {
  font-size: 0.75rem;
}
.purchase .price > span {
  font-weight: bold;
  font-size: 1.25rem;
  margin-right: 0.625rem;
}
.account-paid {
  position: relative;
  top: 0.3rem;
}
.info {
  padding: 0.75rem 0.9375rem;
  font-size: 1rem;
  line-height: 1.5rem;
  border-bottom: 0.05rem solid #cccccc;
  background: #fff;
}
.info > p:nth-of-type(2) {
  font-size: 0.6875rem;
  color: #999999;
}
.groupimg{
  /* 如果图片下方出现空白，可以把字体的大小设置成0 */
  font-size: 0;
}
</style>