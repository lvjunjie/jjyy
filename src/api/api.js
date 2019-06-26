import axios from './request'

export function AuthenticateByPhone (params) {
  return axios({
    url: 'TokenAuth/AuthenticateByPhone',
    method: 'post',
    data: params
  })
}

export function Authenticate (params) {
  return axios({
    method: 'post',
    url: 'TokenAuth/Authenticate',
    data: params
  })
}
