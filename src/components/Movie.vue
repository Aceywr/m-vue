<template>
    <div class="page">
        <div class="card">
            <section class="movie_showing">
                <header><h2>影院热映</h2><a href="">更多</a></header>
                <div class="section-content"  v-if="show">
                    <ul class="row items">
                        <li class="item" v-for="item in getMovie.movie_showing" :key="item.id">
                            <item :data="item"></item>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="movie_free_stream">
                <header><h2>免费在线观影</h2><a href="">更多</a></header>
                <div class="section-content"  v-if="show">
                    <ul class="row items">
                        <li class="item" v-for="item in getMovie.movie_free_stream" :key="item.id">
                            <item :data="item"></item>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="movie_latest">
                <header><h2>新片速递</h2><a href="">更多</a></header>
                <div class="section-content"  v-if="show">
                    <ul class="row items">
                        <li class="item" v-for="item in getMovie.movie_latest" :key="item.id">
                            <item :data="item"></item>
                        </li>
                    </ul>
                </div>
            </section>
            <interests :data="getMovieInt" v-if="show"></interests>
            <types :data="getMovieInt" v-if="show"></types>
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
    name:'movie',
    data() {
        return {
            show:false
        }
    },
    components: {
        item,
        interests,
        types,
        downloadApp
    },
    methods: {
        ...mapActions([
            'postMovie',
            'getMovieData',
            'postMovieInter'
        ])
    },
    computed: {
        ...mapGetters([
            'getMovie',
            'getMovieInt'
        ])
    },
    mounted() {
        if(this.getMovie.show != 1){
            this.postMovie()
            this.postMovieInter()
            
            this.$watch("getMovie.show", function(){
                this.show = true
            }, {deep:true})  
        }else{
            this.show = true
        }     
    }


}
</script>

<style scoped>
    
</style>
