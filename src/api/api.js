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

export function GetCurUserInfo (params) {
  return axios({
    method: 'get',
    url: 'services/app/ElderExInfos/GetAll',
    params
  })
}

export function GetElderByContactorId (params) {
  return axios({
    method: 'get',
    url: 'services/app/User/GetElderByContactorId',
    params
  })
}

export function GetElderInfoWithSignByElderId (params) {
  return axios({
    method: 'get',
    url: 'services/app/ElderInfos/GetElderInfoWithSignByElderId',
    params
  })
}

export function GetAllMessages (params) {
  return axios({
    method: 'get',
    url: 'services/app/MessageTipses/GetAll',
    params
  })
}

export function GetSignRecordBySignCodeAndTimespan (params) {
  return axios({
    method: 'get',
    url: 'services/app/SignRecords/GetSignRecordBySignCodeAndTimespan',
    params
  })
}

export function GetUserForEdit (params) {
  return axios({
    method: 'get',
    url: 'services/app/User/GetUserForEdit',
    params
  })
}

export function GetlocationHistroiesByTimespanAndElderId (params) {
  return axios({
    method: 'get',
    url: 'services/app/LocationHistories/GetlocationHistroiesByTimespanAndElderId',
    params
  })
}
