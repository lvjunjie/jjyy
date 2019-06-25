import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import vant from 'vant'
import 'vant/lib/index.css'
import echarts from 'echarts'

import * as api from '@/api/api'
import * as filter from '@/utils/filter'

Vue.config.productionTip = false
Vue.use(vant, moment)

Vue.prototype.$http = api
Vue.prototype.$moment = moment
Vue.prototype.$echarts = echarts
Vue.prototype.$eventBus = new Vue()

// register global filters.
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
