<template>
    <router-link to="/note">
    <a href="" class="feed-item">
        <div class="feed-content" v-if="layoutShow()">
            <div class="cover" v-lazy:background-image="img" v-if="indexdata.target.cover_url"><div style="padding-top:100%;"></div></div>
            <h3>{{title}}</h3>
            <p>{{content}}</p>
        </div>
        <div class="feed-content" v-else>
            <div class="photos">
                <div class="main" v-lazy:background-image="img"></div>
                <div class="aside">
                    <div class="aside-pic"><div v-lazy:background-image="morePic[0]"><div style="padding-top:100%;"></div></div></div>
                    <div class="aside-pic"><div v-lazy:background-image="morePic[1]"><div style="padding-top:100%;"></div></div><div class="more-pic"><span>{{leftPic+"+"}}</span></div></div>
                </div>
            </div>
        </div>
        <div class="author">by&nbsp;<span>{{author}}</span></div>
        <span class="feed-label">{{source}}</span>
    </a>
    </router-link>
</template>
<script>
export default {
    name: 'indexItem',
    props:['indexdata'],
    data() {
        return {
            img: this.indexdata.target.cover_url,
            title:this.indexdata.title,
            content:this.indexdata.target.desc,
            author:this.indexdata.target.author.name,
            source:this.indexdata.source_cn.replace('：', ' '),
            layout:this.indexdata.layout,
            morePic:[
                  this.indexdata.target.more_pic_urls[0],
                  this.indexdata.target.more_pic_urls[1]
            ],
            leftPic:this.indexdata.target.photos_count - 3
        }
    },
    methods: {
        layoutShow() {
            if(this.layout == 5) {
                return false
            }else{
                return true
            }   
            
        }
    },
    mounted() {
      console.log(this.indexdata)
    }
}
</script>
<style scoped>
    .feed-item {
        display: block;
        padding: 50px 0 50px 0;
        position: relative;
        color: #494949;
    }
    .feed-content {
        overflow: hidden;
        margin-bottom: 20px;
    }
    .author {
        font-size: 24px;
        color: #ccc;
    }
    .feed-label {
        position: absolute;
        bottom: 50px;
        right: 0;
        font-size: 24px;
        color: #ccc;
    }
    .cover {
        position: relative;
        width: 25.6%;
        margin-left: 50px;
        float: right;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
}
    .feed-content h3 {
        text-align: justify;
        font-size: 34px;
        font-weight: 500;
        line-height: 1.41;
        color: #494949;
        margin-bottom: 12px;
    }
    .feed-content p {
        text-align: justify;
        color: #aaa;
        font-size: 24px;
        line-height: 1.5;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }
    .photos {
        display: flex;
        margin-bottom: 20px;
    }
    .main {
        flex: 3.2;
        margin-right: 8px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    .aside {
        display: flex;
        flex: 1;
        flex-direction: column;
        

    }
    
    .aside-pic {
        position: relative;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    .feed-content .photos .aside .aside-pic ~ .aside-pic {
        margin-top: 4px;
    }

    .photos .aside-pic .more-pic {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .4);
        color: #fff;
        text-align: center;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }
    .photos .aside-pic .more-pic span {
        width: 100%;
    }
</style>
