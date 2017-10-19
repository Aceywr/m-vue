<template>
    <li class="main">
        <div>
            <div class="desc">
            <a href="javascript:;"><img :src="avatar" :alt="name"></a>
            <a href="javascript:;">
                <div class="user-info">
                    <strong>{{name}} <span>{{active}}</span></strong>
                    <div class="timestamp">{{time}}</div>
                </div>
            </a>
            </div>
            <a href="javascript:;">
                <div class="content">
                    <div>
                        {{text}}
                    </div>
                </div>
            </a>
        </div>
        <div class="feed-card" v-if="isCard()">
            <a href="javascript:;">
                <div class="title">{{card.title}}</div>
                <div class="detail" :class="card.image ? 'has-cover':''">
                    <div class="text">{{card.subtitle}}</div>
                    <div class="cover" v-if="card.image" :style="{backgroundImage: 'url('+card.image.normal.url+')'}"></div>
                </div>
            </a>
        </div>
        <div class="feed-image" v-else-if="images[0]">
                <div class="itemimg" v-for="item in images" :key="item.id"><img :src="item.normal.url" alt=""></div>
        </div>
        <div class="info">
            <div class="ic-btn ic-btn-like left"><span>{{like}}</span></div>
            <div class="ic-btn ic-btn-comment left"><span>{{comments}}</span></div>
            <div class="ic-btn ic-btn-retweet left"><span>{{reshares}}</span></div>
            <div class="ic-btn ic-btn-more right"></div>
        </div>
        

    </li>
</template>

<script>
export default {
    name: 'broadItem',
    props: ['data'],
    data() {
        return {
            avatar: this.data.status.author.avatar,
            name: this.data.status.author.name,
            active: this.data.status.activity,
            time: this.data.status.create_time,
            text: this.data.status.text,
            images: this.data.status.images,
            comments: this.data.status.comments_count,
            like: this.data.status.like_count,
            reshares: this.data.status.reshares_count,
            card: this.data.status.card,
            
        }
    },
    methods: {
        isCard() {
            if(this.card == null) {
                return false
            }else {
                return true
            }
        }
    },
    mounted() {

    }
}
</script>

<style lang="scss" scoped>
    .main {
        position: relative;
        padding-bottom: 40px;
        margin-top: 40px;
        margin-bottom: 40px;
        padding-left: 100px;
        .desc {
            
            display: flex;
            font-size: 0;
            line-height: normal;
            margin: 0 0 22px;
            color: #494949;
            position: relative;
            align-items: center;
            margin-left: -100px;
            img {
                width: 80px;
                height: 80px;
                margin-right: 20px;
                border-radius: 50%;
                vertical-align: text-top;
            }
            .user-info {
                flex: auto;
                strong {
                    font-size: 34px;
                    line-height: 1;
                    color: #494949;
                    display: inline-block;
                    vertical-align: text-top;
                    margin-top: 12px;
                    span {
                        color: #aaa;
                        font-weight: normal;
                    }
                }
                .timestamp {
                    font-size: 28px;
                    margin-top: 12px;
                    line-height: 1;
                    color: #aaa;
                }
            }
        }
        .content {
            font-size: 34px;
            padding-left: 0;
            margin-top: 20px;
            line-height: 44px;
            color: #494949;
            div {
                display: inline;
            }
        }
        .info {
            padding-left: 0;
            margin-top: 26px;
            margin-right: -40px;
            overflow: auto;
        }
    }
    .feed-image {
        margin-top: 30px;
        .itemimg {
            display: inline-block;
            overflow: hidden;
            position: relative;
            cursor: pointer;
            max-height: 600px;
            img {
                width: 557px;
                display: block;
            }
        }
    }
    .feed-card {
        padding: 30px;
        margin: 20px 0 40px;
        border-radius: 4px;
        background: #f9f9f9;
        .title {
            font-size: 34px;
            font-weight: 500;
            line-height: 1.4;
            color: #494949;
            margin-bottom: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .has-cover {
            height: 96px;
            padding-right: 180px;
            position: relative;
        }
        .detail {
            .cover {
                width: 150px;
                height: 96px;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                position: absolute;
                top: 0;
                right: 0;
            }
        }
        .text {
            font-size: 24px;
            line-height: 32px;
            color: #aaa;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }
    }

    .ic-btn {
        display: inline-block;
        margin-right: 40px;
        font-size: 28px;
        cursor: pointer;
        &.left {
            float: left;
        }
        &.right {
            float: right;
        }
        &::before {
            content: '';
            width: 40px;
            height: 40px;
            background-position: center;
            background-repeat: no-repeat;
            display: inline-block;
            margin-bottom: -4px;
            
        }
        &-like::before {
            background-image: url(https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg);
            
        }
        &-comment::before {
            background-image: url(https://img3.doubanio.com/f/talion/ac8a7e0d5f471480549c7abf45fc0fa4c3b4184f/pics/card/ic_comment.svg);            
        }
        &-retweet::before {
            background-image: url(https://img3.doubanio.com/f/talion/8604ef3950b947d55406e2a6f5cf6ca7f0b934e3/pics/card/ic_retweet_gray.svg);
        }
        &-more::before {
            background-image: url(https://img3.doubanio.com/f/talion/be268c0a1adb577c8dfdcfbe48c818af3983ed62/pics/card/more.svg);
        }
        span {
            color: #ccc;
            margin-left: 3px;
            position: relative;
            left: 0;
            top: -6px;
        }
    }
    
</style>
