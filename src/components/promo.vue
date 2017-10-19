<template>
    <section class="promo_top_banner">
        <div class="banner_bg">
            <img src="https://img3.doubanio.com/f/talion/fbcb08987a36258354c6037211d94286bef9716c/pics/card/promotion_bg.jpg" alt="" class="img">
        </div>
        <div class="banner_wrapper">
            <div class="banner_inner">
                <div class="promo_title">
                    <span class="promo_title_text">{{data[0]}}</span>
                    <br>
                    <span class="promo_title_text">{{data[1]}}</span>                    
                </div>
                <div class="button_wrapper">
                    <a href="javascript:;" class="promo_button download_app">极速下载</a>
                    <a href="javascript:;" class="promo_button open_app">打开</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'promo',
    props: ['data']
}
</script>

<style scoped>
    .promo_top_banner {
        overflow: hidden;
        text-align: left;
        position: relative;
        display: block;
    }
    .promo_top_banner .banner_bg {
        font-size: 0;
        padding-bottom: 21.333%;
        position: relative;
    }
    .promo_top_banner .banner_bg .img {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    .promo_top_banner .banner_wrapper {
        position: absolute;
        left: 36px;
        top:0;
        bottom: 0;
        right: 20px;
    }
    .promo_top_banner .banner_wrapper .banner_inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }
    .promo_top_banner .banner_wrapper .banner_inner>* {
        vertical-align: middle;
    }
    .promo_top_banner .promo_title_text {
        font-size: 28px;
        font-weight: normal;
        line-height: 44px;
        color: #2CA532;
    }
    .promo_top_banner .button_wrapper {
        white-space: nowrap;
        font-size: 0;
        padding-left: 24px;
    }
    .promo_button {
        font-size: 26px;
        font-weight: bold;
        width: auto;
        padding: 0 28px;
        position: relative;
        display: inline-block;
        border-radius: 6px;
        line-height: 2;
    }
    .promo_button.download_app {
        color: #fff;
        border: 2px solid #42bd56;
        background-color: #42bd56;
    }
    .promo_button.open_app {
        margin-right: 4%;
        color: #42bd56;
        border: 2px solid #42bd56;
        margin-left: 16px;
    }
    .promo_top_banner .promo_button::after {
        content: '';
        position: absolute;
        left: -8px;
        right: -8px;
        top: -20px;
        bottom: -20px;
    }

</style>
