import axios from 'axios'
import router from '@/router'
import store from '@/store'

const { NODE_ENV } = process.env

const API_PATH = ''

axios.defaults.timeout = 5000 // 超时时间
axios.defaults.baseURL = API_PATH // 默认地址

const token = store.getters.getToken
axios.defaults.headers.common['Authorization'] = token

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

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
    return config
  },
  error => {
    return Promise.reject(error.response)
  })

/*
* response 拦截
* */

axios.interceptors.response.use(
  response => {
    const errorInfo = JSON.parse(response.data).error

    if (errorInfo) {
      console.log('error')
    } else {
      return JSON.parse(response.data).data
    }
  },
  error => {
    if (error.response) {

    }

    return Promise.reject(error.response) // 返回接口返回的错误信息
  })

export default axios
