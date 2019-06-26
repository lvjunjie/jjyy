import {
  Notify
} from 'vant'

import store from '@/store'

export function checkPhone (phone) {
  return (/^1[34578]\d{9}$/.test(phone))
}

export function notify (msg) {
  return Notify({
    message: msg,
    duration: 1000
  })
}

export function clearStore () {
  store.commit('clearState')
}

export function initToken (data) {
  const {
    accessToken,
    expireInSeconds
  } = data
  const endSeconds = Date.parse(new Date()) + expireInSeconds

  store.commit('updateState', {
    accessToken,
    expireInSeconds,
    endSeconds
  })
}

export function verifyTokenOvertime () {
  const curDate = Date.parse(new Date())
  const {
    endSeconds,
    expireInSeconds
  } = store.state

  if (curDate >= endSeconds) { // 超时
    return true
  } else { // 更新超时时间
    store.commit('updateState', {
      endSeconds: curDate + expireInSeconds
    })
    return false
  }
}
