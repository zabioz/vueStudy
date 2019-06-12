import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Read from '@/components/Read'
import Create from '@/components/Create'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Read',
      component: Read
    },

    {
      path: '/create',
      name: 'create',
      component: Create
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }

    
  ]
})
