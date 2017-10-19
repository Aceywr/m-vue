import Vue from 'vue'
import mutations from './store'


const getData = function() {
    const Data = {
        movieData: {movie_showing:[], movie_free_stream:[], movie_latest:[]},
        bookData: {},
        musicData: {}
    }
    const urls = [
        'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items',
        'https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items',
        'https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items',
        'https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items',
        'https://m.douban.com/rexxar/api/v2/subject_collection/book_nonfiction/items',
        'https://m.douban.com/rexxar/api/v2/subject_collection/market_product_book_mobile_web/items',
        'https://m.douban.com/rexxar/api/v2/subject_collection/music_chinese/items',
        'https://m.douban.com/rexxar/api/v2/subject_collection/music_occident/items',
        'https://m.douban.com/rexxar/api/v2/subject_collection/music_japan_korea/items'
    ]
    urls.forEach(function(item){
        Vue.http.jsonp(
            item,
            {
                params: {
                    count:8
                }
            }
          ).then((res) => {
              if(res.body.subject_collection.id.substr(0, 5) == 'movie') {
                Data.movieData[res.body.subject_collection.id] = {
                    name: res.body.subject_collection.name,
                    items: res.body.subject_collection_items
                }
              }else if(res.body.subject_collection.id.substr(0, 4) == 'book' || res.body.subject_collection.id.substr(0, 6) == 'market') {
                Data.bookData[res.body.subject_collection.id] = {
                    name: res.body.subject_collection.name,
                    items: res.body.subject_collection_items
                }
              }else if(res.body.subject_collection.id.substr(0, 5) == 'music') {
                Data.musicData[res.body.subject_collection.id] = {
                    name: res.body.subject_collection.name,
                    items: res.body.subject_collection_items
                }
              }else {console.log("error: getData")}
            
          },(res) => {console.log('Error:',res)});   
    })
    return Data
}
function makeAction(type) {
    return ({ dispatch }, ...args) => dispatch(type, ...args);
}

export const getIndexData = function({ commit }, date = '') {
    const url = 'https://m.douban.com/rexxar/api/v2/recommend_feed'
    Vue.http.jsonp(
        url,
        {
            params: {
                next_date:date
            }
        }
    ).then((res) => {
        if(!date){
            commit('INIT_INDEX', res.body)
        }else{
            commit('NEXT_INDEX', res.body)
        }
        
    },(res) => {console.log('Error:',res)});  
}

export const getMovieData = function({commit}) {
    const urls = [
        'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items',
        'https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items',
        'https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items'
    ]

    urls.forEach(function(item){
        Vue.http.jsonp(
            item,
            {
                params: {
                    count: 8
                }
            }
        ).then((res) => {
            commit('INIT_MOVIE', res.body)
        },(res) => {console.log('Error:',res)})
    })
}

export const getBookData = function({commit}) {
    const urls = [
        'https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items',
        'https://m.douban.com/rexxar/api/v2/subject_collection/book_nonfiction/items',
        'https://m.douban.com/rexxar/api/v2/subject_collection/market_product_book_mobile_web/items'
    ]

    urls.forEach(function(item){
        Vue.http.jsonp(
            item,
            {
                params: {
                    count: 8
                }
            }
        ).then((res) => {
            commit('INIT_BOOK', res.body)
        },(res) => {console.log('Error:',res)})
    })
}
export const postBookInter = function({commit}) {
    const colors = ['#FF4055', '#FFAC2D','#4F9DED','#CC3344','#3BA94D','#2384E8','#FFC46C','#42BD56']
    const list1 = [{name:'小波看书', color:colors[Math.floor(Math.random()*8)]},{name:'村上春树周边', color:colors[Math.floor(Math.random()*8)]},{name:'我凭名字认定了你', color:colors[Math.floor(Math.random()*8)]},{name:'不可饶恕的女人们', color:colors[Math.floor(Math.random()*8)]}]
    const list2 = [{name:'爱欲书', color:colors[Math.floor(Math.random()*8)]},{name:'他们还写侦探小说', color:colors[Math.floor(Math.random()*8)]},{name:'人生识字始忧患', color:colors[Math.floor(Math.random()*8)]},{name:'诗歌书店', color:colors[Math.floor(Math.random()*8)]}]
    commit('INIT_BOOKINTER', {title:'发现好图书', list1:list1, list2:list2, types:['小说','爱情','历史','外国文学','青春','励志','随笔','传记','推理','旅行','奇幻','经管']})
}
export const postMovieInter = function({commit}) {
    const colors = ['#FF4055', '#FFAC2D','#4F9DED','#CC3344','#3BA94D','#2384E8','#FFC46C','#42BD56']
    const list1 = [{name:'同时入选IMDB250和豆瓣电影250的电影', color:colors[Math.floor(Math.random()*8)]},{name:'带你进入不正常的世界', color:colors[Math.floor(Math.random()*8)]},{name:'用电【影】来祭奠逝去的岁月', color:colors[Math.floor(Math.random()*8)]},{name:'女孩们的故事【电影】', color:colors[Math.floor(Math.random()*8)]}]
    const list2 = [{name:'科幻是未来的钥匙——科幻启示录【科幻题材】', color:colors[Math.floor(Math.random()*8)]},{name:'美国生活面面观', color:colors[Math.floor(Math.random()*8)]},{name:'2015终极期待', color:colors[Math.floor(Math.random()*8)]},{name:'经典韩国电影——收集100部', color:colors[Math.floor(Math.random()*8)]}]
    commit('INIT_MOVIEINTER', {title:'发现好电影', list1:list1, list2:list2,types:['经典','冷门佳片','豆瓣高分','动作','喜剧','爱情','悬疑','恐怖','科幻','治愈','文艺','成长','动画','华语','欧美','韩国','日本']})
}
export const getBroadData = function({ commit }) {
    const url = 'https://m.douban.com/rexxar/api/v2/status/anonymous_timeline'
    Vue.http.jsonp(
        url,
        {
        }
    ).then((res) => {
        commit('INIT_BROAD', res.body)
    },(res) => {console.log('Error:',res)});  
}
export const getGroupData = function({ commit }) {
    const url = 'https://m.douban.com/rexxar/api/v2/group/rec_groups_for_newbies'
    Vue.http.jsonp(
        url,
        {
        }
    ).then((res) => {
        commit('INIT_GROUP', res.body.rec_groups[0].classified_groups)
        console.log(res.body.rec_groups[0].classified_groups)
    },(res) => {console.log('Error:',res)});  
}

export const postIndex = ({dispatch}, date='') => {
   dispatch('getIndexData', date)
}

export const postMovie = makeAction('getMovieData')
export const postBook = makeAction('getBookData')
export const postBroad = makeAction('getBroadData')
export const postGroup = makeAction('getGroupData')

