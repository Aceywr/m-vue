import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './action'
import * as getters from './getter'

Vue.use(Vuex);

const state = {
    indexData: [],
    movieData: {show:false, count:0},
    bookData: {show:false, count:0, market_header:{}},
    getNum: null,
    movieInter:{},
    bookInter:{},
    broadcast:{show:false},
    group:{show:false}
};

const mutations = {
    INIT_INDEX(state, data) {
        state.indexData.push(data)
        state.getNum = 0
    },
    NEXT_INDEX(state, data) {
        state.indexData[++state.getNum] = data
    },
    INIT_MOVIE(state, data) {
        state.movieData[data.subject_collection.id] = data.subject_collection_items
        state.movieData.count++
        if(state.movieData.count == 3) {
            state.movieData.show = 1
        }
        
    },
    INIT_BOOK(state, data) {
        if(data.subject_collection.id == 'market_product_book_mobile_web') {
            state.bookData.market_header = data.header
        }
        state.bookData[data.subject_collection.id] = data.subject_collection_items
        state.bookData.count++
        if(state.bookData.count == 3) {
            state.bookData.show = 1
        }
        
    },
    INIT_BOOKINTER(state, data) {
        state.bookInter = data
    },
    INIT_MOVIEINTER(state, data) {
        state.movieInter = data
    },
    INIT_BROAD(state, data) {
        state.broadcast.items = data.items
        state.broadcast.show = true
    },
    INIT_GROUP(state, data) {
        state.group.items = data
        state.group.show = true
    }
    

};
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});