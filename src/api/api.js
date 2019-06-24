import axios from './request'

export function getMarketing (id) { // 会验证token
  return axios({
    url: `marketing/${id}`,
    method: 'get'
  })
}
