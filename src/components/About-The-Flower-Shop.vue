<template>
  <div class="container">
    <div class="flower-shop">
      <span @click="goback">
        <img src="../assets/icon/go-back.png" alt />
      </span>
      <h3>先花店</h3>
    </div>
    <h1 class="florist-is-introduced">花店介绍</h1>
    <div class="introduce-title">
      <p>这里，有你想要的素洁高雅，也有你喜欢的千娇百媚，姹紫嫣红的它们亦是蝴蝶的选择，也是你的选择！蝶恋花——欢迎你翩翩而来！蝶恋花诚征花店宣传标语，要求创作的作品语言简洁易懂，有创意，能起到宣传的效果！ 经过举办征集活动，小编特选摘了部分精彩应征......</p>
    </div>
    <van-swipe :autoplay="3000" indicator-color="white" class="swiper" :height = 200>
      <van-swipe-item class="swiper-class">
         <img src="../assets/swiper-images/swiper-blue-rose.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
          <img src="../assets/swiper-images/swiper-elegany-flowers.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
          <img src="../assets/swiper-images/swiper-flower-pomelo.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
          <img src="../assets/swiper-images/swiper-lotus.jpg" alt="">
      </van-swipe-item>
    </van-swipe>
    <div class="introduce-title">
        <p>
            这里，有你想要的素洁高雅，也有你喜欢的千娇百媚，姹紫嫣红的它们亦是蝴蝶的选择，也是你的选择！蝶恋花——欢迎你翩翩而来！蝶恋花诚征花店宣传标语，要求创作的作品语言简洁易懂，有创意，能起到宣传的效果！
        </p>
        <p>1、爱一个人，送一朵花——蝶恋花。</p>
        <p>2、爱你用尽一生——蝶恋花。</p>
        <p>3、花因蝶而美，蝶为花而醉。</p>
        <p>4、蝶恋花，给你最美的蝴蝶送上最美的鲜花。</p>
        <p>5、升华生活品质——蝶恋花。</p>
        <p>6、花语传达情意，一切尽在不言中。</p>
        <p>7、蝶恋花，温馨你我他。</p>
        <p>8、爱花好比蝶恋花。</p>
        <p>9、人生蝶恋花，芬芳常相伴。</p>
        <p>10、蝶恋花，给你温暖一个家！</p>
        <p>11、相看两不厌，只缘蝶恋花。</p>
        <p>12、把爱用花来表达——蝶恋花。</p>
        <p>13、蝶恋花起舞，爱随心飞扬。</p>
        <p>14、幽幽花香，岁岁常青。</p>
        <p>15、送什么给她，她能绽放心花，永远蝶恋花。</p>
        <p>16、蝶恋花，花香铺满家。</p>
        <p>17、来我花花世界，送君花好月圆！</p>
        <p>18、花开四季，蝶飞一度，蝶恋花，给你爱的机会！</p>
        <p>19、浪漫蝶恋花，美丽心连心！</p>
        <p>20、蝶恋花，芬芳人生的彩色封面。</p>
        <p>21、蝶中蝶，花中花——香飘花满蝶。</p>
        <p>22、蝶·舞心间，花·传真情。</p>
        <p>23、让花恋蝶，让蝶恋花！</p>
        <p>24、蝶恋花，传达你的爱。</p>
        <p>25、爱她，就从这里开始！</p>
        <p>26、蝶恋花开朵朵，爱恋情意浓浓。</p>
        <p>27、懂爱的蝴蝶都恋花——蝶恋花花店。</p>
        <p>28、彩蝶翩跹，花满世界。</p>
        <p>29、花香暗相许 浓淡两相知——蝶恋花，花恋蝶，</p>
        <p>30、山不可以无泉，花不可以无蝶。</p>
        <p>31、似水华年，留住春的颜色。</p>
        <p>32、蝶恋花，爱表达。</p>
        <p>33、前世的蝶，今生的花，想你，超越了前世今生。</p>
        <p>34、爱上蝶恋花，生活美如画。</p>
        <p>35、爱TA，犹如蝶恋花。</p>
        <p>36、浓情蜜意wWw.jINTang114.oRg蝶恋花！</p>
        <p>37、蝶恋花放飞梦想，新生活收获希望。</p>
        <p>38、爱花的人，爱花的蝶。</p>
        <p>39、与蝶同恋——蝶恋花。</p>
        <p>40、花香恋人看香，芯浓情更浓。</p>
        <p>41、蝶恋之花，真情为您表达！</p>
        <p>42、欲诉深情，蝶恋花坊；传递真情，孕育真爱。</p>
        <p>43、花开天下，美丽共赢。</p>
        <p>44、花香蝶语大于甜言蜜语！</p>
        <p>45、花之物语，为你绽放！</p>
        <p>46、爱花买花蝶恋花。</p>
        <p>47、蝶恋花枝头，我爱你之手！</p>
        <p>48、蝶蝶心意，恋恋情义。</p>
        <p>49、让生活如花儿一样漂亮——蝶恋花。</p>
        <p>50、蝶恋花，我恋你。</p>
        <p>51、蝴蝶恋上的花，送给你恋上的人。</p>
        <p>52、情深如，碟恋花。</p>
        <p>53、彩蝶蝶纷飞，花香满园。</p>
        <p>54、蝶恋花，我送情。</p>
        <p>55、蝶恋花花店，唯独只爱你。</p>
        <p>56、蝶恋花，心情浪漫，有你有我，舍我其谁！</p>
        <p>57、送给你蝴蝶的爱——蝶恋花。</p>
        <p>58、看蝶恋花儿传奇，讲人间真情故事！</p>
        <p>59、蝶恋花花店，365天的祝福。</p>
        <p>60、蝶恋伊人，香满人间。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-top",
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.container {
    background-color: #fff;
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
  left: 42%;
  font-size: 1rem;
}
.container > h1 {
  text-align: center;
  font-weight: normal;
  margin: 1rem 0;
}
.introduce-title > p {
  text-indent: 2rem;
}
.swiper{
    width: 23.4375rem;
}
.swiper-class{
    width: 100%;
}
.swiper-class img {
    width: 23.4375rem;
    background-size: 100% 100%;
}
</style>