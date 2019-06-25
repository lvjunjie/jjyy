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
      meta: {
        title: '登录'
      },
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
          meta: {
            title: '首页'
          },
          component: () => import('@/views/Home.vue')
        }, {
          path: '/index/messages',
          name: 'messages',
          meta: {
            title: '消息中心'
          },
          component: () => import('@/views/Messages.vue')
        }, {
          path: '/index/myCenter',
          name: 'myCenter',
          meta: {
            title: '我的'
          },
          component: () => import('@/views/MyCenter.vue')
        }, {
          path: '/index/hisRoute',
          name: 'hisRoute',
          meta: {
            title: '历史轨迹'
          },
          component: () => import('@/views/HistoricalRoute.vue')
        }, {
          path: '/index/dataDetail/:type',
          name: 'dataDetail',
          meta: {
            title: '健康数据'
          },
          component: () => import('@/views/DataDetail.vue')
        }, {
          path: '/index/about',
          name: 'about',
          meta: {
            title: '关于我们'
          },
          component: () => import('@/views/About.vue')
        }
      ]
    },
    { path: '*', redirect: '/login' }
  ]
})
