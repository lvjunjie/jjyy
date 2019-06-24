import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import Login from './views/Login.vue'
// import MyCenter from './views/MyCenter.vue'
// import Messages from './views/Messages.vue'
// import HisRoute from './views/HistoricalRoute.vue'
// import DataDetail from './views/DataDetail.vue'
// import Index from './views/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/index.vue'),
      children: [
        {
          path: '/index/home',
          name: 'home',
          component: () => import('@/views/Home.vue')
        }, {
          path: '/index/messages',
          name: 'messages',
          component: () => import('@/views/Messages.vue')
        }, {
          path: '/index/myCenter',
          name: 'myCenter',
          component: () => import('@/views/MyCenter.vue')
        }
      ]
    },
    { path: '*', redirect: '/login' }
  ]
})
