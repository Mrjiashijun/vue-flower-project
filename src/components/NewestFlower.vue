<template>
    <div class="sale-flower">
        <ul>
            <li v-for="(someFlower, index) in 8" :key="index">
                <routerLink to="/flowerparticulars">
                    <div class="flower-img">
                        <img src="../assets/imgs/flowering-in-flowering-year.jpg" alt="">
                    </div>
                    <div class="flower-title">
                        <p>流年花开</p>
                        <p>粉雪山，苏醒，芍药，银叶菊，尤加利，桔梗，雏菊，韩式包装</p>
                        <p>¥ 688.00</p>
                    </div>
                </routerLink>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            someFlower:[],
        }
    },
}
</script>

<style scoped>
    .sale-flower{
        margin: 0.5rem 0 3.5rem 0;
    }
    .sale-flower ul {
        display: flex;
        flex-wrap: wrap;
        background-color: #fff;
    }
    .sale-flower ul li  {
        width: 48.9% !important; 
        border-bottom: 0.0625rem solid #ccc;
        border-right: 0.0625rem solid #ccc;
        padding: 0.6rem 0;
        text-align: center;
    }
    .flower-img img {
        width: 9.375rem;
        height: 9.375rem;
    }
    .flower-title {
        text-align: left;
        padding-left: 0.9375rem;
    }
    .flower-title p:nth-of-type(1) {
        margin-top: 0.3125rem;
        font-size: 0.8125rem;
    }
    .flower-title p:nth-of-type(2){
        overflow: hidden;
        color: #999999;
        font-size: 0.5rem;
        width: 85%;
        margin: 0.5rem 0;
        height: 2rem;
    }
    .flower-title p:nth-of-type(3){
        color: #ff4948;
        font-size: 0.875rem;
    }
</style>