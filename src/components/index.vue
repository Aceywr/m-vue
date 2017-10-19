<template>
    <div class="page">
        <div class="card">
            <ul class="quick-nav">
                <li><a href="javascript:;">影院热映</a></li>
                <li><a href="javascript:;">欧美新碟榜</a></li>
                <li><a href="javascript:;">豆瓣时间</a></li>
                <li><a href="javascript:;">使用豆瓣App</a></li>
            </ul>
            <section class="recommend-feed">
                <div v-if="get">
                    <div v-for="item in getIndex" :key="item.id">
                        <div class="item-date" v-if="getToday(item.date)">{{item.date}}</div>
                        <div v-for="i in item.recommend_feeds" :key = "i.id" class="feed">
                            <indexItem :indexdata="i"></indexItem>
                        </div>
                    </div>
                    <div v-show="load" class="loadImg"><img src="https://img3.doubanio.com/f/talion/bf2ef8c5c1a8c84dddfd1135656857e73582c5d8/pics/card/loading_grey.gif" alt="loading"></div>
                </div>
                <div v-else class="loading"><img src="https://img3.doubanio.com/f/talion/326df52f00a7dd43b9d23e2bbc7b7d3de5b9fd9e/pics/card/loading_green.gif" alt="loading"></div>
            </section>
        </div>
    </div>
</template>
<script>
import indexItem from './indexItem'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'index',
  data() {
      return {
          get:false,
          load:false,
          sw:true
      }
  },
  components: {
      indexItem
  },
  computed: {
      ...mapGetters([
          'getIndex',
          'getCount'
      ])
  },
    methods: {
    ...mapActions([
      'postIndex',
      'getIndexData'
    ]),
    getTime(offset = 0) {
      let now = new Date()
      let nowTime = now.getTime()
      let time = nowTime - (offset*86400000)
      let needTime = new Date(time) 
      let need = needTime.getFullYear()+'-'+(needTime.getMonth()+1)+'-'+needTime.getDate()
      return need
    },
    getToday(date) {
        let d = new Date()
        let day = ''
        if(d.getDate() <= 9){
            day = "0" + d.getDate()
        }else {
            day = d.getDate()
        }
        return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+day != date
    }
    },
    mounted() {
        if(this.getCount == null){
            this.postIndex()
        }else{
            this.get = true
        }
        let that = this
        let count = 0
        this.$watch("getCount", function(){
            this.get = true
            this.load = false
            this.sw = true
            }, {deep:true})       
        // console.log(this.getIndex)
       
        window.addEventListener('scroll', function(){
            let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            if(scrollTop + window.innerHeight >= (document.documentElement.offsetHeight-5)) {
                if(that.sw) {
                that.sw = false
                that.load = true
                let date = that.getTime(count)
                that.postIndex(date)
                count++
                }
            }
        })
    }
  
}
</script>

<style scoped>

    .card {
        margin: 0 36px;
    }
    .quick-nav {
        overflow: hidden;
        margin: 40px 0 0 0;
        padding-top: 12px;
    }
    .quick-nav>li {
        float: left;
        width: 50%;
        padding: 6px;
        font-size: 30px;
    }
    .quick-nav>li>a {
        background-color: #f6f6f6;
        color: #494949;
        display: block;
        text-align: center;
        line-height: 40px;
        padding: 24px 0;
        border-radius: 4px;
        overflow: hidden;
    }
    .loading {
        width: 100px;
        height: 100px;
        margin: 200px auto;
    }
    .loading>img {
        width: 100%;
    }
    .feed ~ .feed {
        position: relative;
    }
    .feed ~ .feed::before,  .item-date::before{
        left: 0;
        top: 0;
        width: 100%;
        height: 2px;
        background: #e3e3e3;
        content: '';
        position: absolute;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
    }
    .loadImg {
        width: 60px;
        height: 60px;
        margin: 20px auto;
    }
    .loadImg>img {
        width: 100%;
    }
    .item-date {
        padding: 30px 36px 30px 0;
        text-align: center;
        position: relative;
        font-size: 36px;
        margin: 0 0 30px;
    }
    .item-date::after{
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: #e3e3e3;
        content: '';
        position: absolute;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
    }
</style>
