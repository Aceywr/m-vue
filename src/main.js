// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import 'lib-flexible'
import VueLazyload from 'vue-lazyload'

Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(VueLazyload, {
  error:'https://img3.doubanio.com/f/talion/326df52f00a7dd43b9d23e2bbc7b7d3de5b9fd9e/pics/card/loading_grey.gif',
  loading:'https://img3.doubanio.com/f/talion/326df52f00a7dd43b9d23e2bbc7b7d3de5b9fd9e/pics/card/loading_green.gif',
  attempt: 3,
  listenEvents: ['scroll']
})

Vue.config.productionTip = false

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  http: {
    headers: {
      Referer:'https://m.douban.com/'
    }
  }
})
