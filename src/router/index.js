import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'

Vue.use(Vuex)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
  ]
})
