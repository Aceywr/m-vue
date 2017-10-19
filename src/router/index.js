import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import movie from '@/components/Movie'
import book from '@/components/book'
import broadcast from '@/components/broadcast'
import group from '@/components/group'
import note from '@/components/note'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/movie',
      name: 'movie',
      component: movie
    },
    {
      path: '/book',
      name: 'book',
      component: book
    },
    {
      path: '/broadcast',
      name: 'broadcast',
      component: broadcast
    },
    {
      path: '/group',
      name: 'group',
      component: group
    },
    {
      path: '/note',
      name: 'note',
      component: note
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
