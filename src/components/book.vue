<template>
    <div class="page">
        <div class="card">
            <section class="book_fiction">
                <header>
                    <h2>最受关注图书｜虚构类</h2>
                    <a href="javascript:;">更多</a>
                </header>
                <div class="section-content" v-if="show">
                    <ul class="row items">
                        <li class="item item_book" v-for="item in getBook.book_fiction" :key="item.id">
                            <item :data="item"></item>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="book_nonfiction">
                <header>
                    <h2>最受关注图书｜非虚构类</h2>
                    <a href="javascript:;">更多</a>
                </header>
                <div class="section-content" v-if="show">
                    <ul class="row items">
                        <li class="item item_book" v-for="item in getBook.book_nonfiction" :key="item.id">
                            <item :data="item"></item>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="market_product_book_mobile_web">
                <div class="book_header">
                    <header>
                        <h2>豆瓣书店</h2>
                        <a href="javascript:;">更多</a>
                    </header>
                    <a href="javascript:;" class="promBook"  v-if="show">
                        <img :src="getBook.market_header.cover.url" :alt="getBook.market_header.title" class="cover">
                        <div class="content">
                            <div class="title">
                                <span class="price">{{"¥" + getBook.market_header.price}}</span>
                                <p class="name">{{getBook.market_header.title}}</p>
                            </div>
                            <p class="infoWithoutReviewer">{{getBook.market_header.info}}</p>
                        </div>
                    </a>
                </div>
                <div class="section-content"  v-if="show">
                    <ul class="row items">
                        <li class="item item_book" v-for="item in getBook.market_product_book_mobile_web" :key="item.id">
                            <item :data="item"></item>
                        </li>
                    </ul>
                </div>
            </section>
            <interests :data="getBookInt" v-if="show"></interests>
            <types :data="getBookInt" v-if="show"></types>
        </div>
        <download-app></download-app>
    </div>
</template>
<script>
import item from './item'
import interests from './interests'
import types from './types'
import downloadApp from './downloadApp'
import { mapGetters, mapActions } from 'vuex'
export default {
    name:'book',
    components: {
        item,
        interests,
        types,
        downloadApp
    },
    data() {
        return {
            show:false
        }
    },
    methods: {
        ...mapActions([
            'postBook',
            'getBookData',
            'postBookInter'
        ])
    },
    computed: {
        ...mapGetters([
            'getBook',
            'getBookInt'
        ])
    },
    mounted() {
        if(this.getBook.show != 1){
            this.postBook()
            this.postBookInter()
          
            this.$watch("getBook.show", function(){
                this.show = true
                console.log(this.getBook)
            }, {deep:true})
        }else{
            this.show = true
        }
    }
}
</script>

<style scoped>
    .promBook .info, .promBook .infoWithReviewer, .promBook .infoWithoutReviewer, .promBook .reviewer {
        font-size: 26px;
        font-weight: 300;
        line-height: 1.5;
        color: #9B9B9B;
    }   
    .promBook {
        display: block;
        overflow: hidden;
        margin: 30px 40px 0;
    }
    .promBook .cover {
        float: left;
        width: 200px;
        margin-right: 30px;
    }
    .promBook .content {
        overflow: hidden;
    }
    .promBook .title {
        margin: 20px 0;
    }
    .promBook .price {
        float: right;
        color: #e76648;
        font-size: 32px;
        line-height: 44px;
    }
    .promBook .name {
        font-size: 38px;
        color: #494949;
        margin-right: 80px;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
    }
    .promBook .infoWithoutReviewer {
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }
    @media(min-width:360px) {
        .promBook .infoWithoutReviewer {
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
        }
    }
</style>
