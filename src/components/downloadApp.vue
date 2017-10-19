<template>
    <div class="download-app">
        <div class="info">
            <img src="https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png">
            <div class="info-content"><strong>豆瓣</strong><div>我们的精神角落</div></div>    
        </div>
        <a href="javascript:;">去 App Store 免费下载 iOS 客户端</a>
    </div>
</template>


<script>
export default {
  
}
</script>

<style scoped>
    .download-app {
        padding: 0 0 40px 0;
        margin-top: 100px;
        margin-bottom: 60px;
        text-align: center;
        font-size: 30px;
    }

    .download-app .info {
        margin: 0 auto 30px;
        overflow: hidden;
        text-align: left;
        font-size: 28px;
        display: inline-block;
        color: #111;
    }
    .download-app .info img{
        float: left;
        margin-right: 24px;
        width: 96px;
    }
    .download-app .info-content {
        overflow: hidden;
    }

    .download-app .info strong {
        font-size: 48px;
        font-weight: normal;
        line-height: 56px;
    }
    .download-app .info .info-content div {
        white-space: pre;
        line-height: 40px;
    }
    .download-app .info+a {
        display: block;
    }
</style>
