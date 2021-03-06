import axios from 'axios'
import router from '@/router'
import store from '@/store'
import {
  Toast
} from 'vant'
import { notify, verifyTokenOvertime } from '@/utils/common'

// const { NODE_ENV } = process.env

const API_PATH = 'http://api.99yiyang.com/api/'

axios.defaults.timeout = 20000 // 超时时间
axios.defaults.baseURL = API_PATH // 默认地址

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

axios.defaults.transformRequest = function (data) {
  return JSON.stringify(data)
}

axios.defaults.transformResponse = function (data) {
  return data
}

/*
 * request 拦截
 * */
axios.interceptors.request.use(
  config => {
    // token 超时验证
    const { accessToken } = store.state
    config.headers['Authorization'] = 'Bearer ' + accessToken

    if (accessToken && verifyTokenOvertime()) {
      notify('您已超时，请重新登录')
      return router.push('/login')
    } else {
      Toast.loading({
        duration: 0
      })
      return config
    }
  },
  error => {
    Toast.clear()
    return Promise.reject(error.response)
  })

/*
 * response 拦截
 * */

axios.interceptors.response.use(
  response => {
    Toast.clear()
    const data = JSON.parse(response.data)

    const {
      success,
      error,
      result
    } = data

    if (success) {
      return result
    } else {
      notify(error.message)
    }
  },
  error => {
    Toast.clear()
    if (error.response) {
      const data = JSON.parse(error.response.data)
      notify(data.error.message)
    }

    return Promise.reject(error.response)
  })

export default axios
