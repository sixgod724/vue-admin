import request from '@/utils/request.js';

export function getList(qurer){
  return request({
    url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
    method: 'get',
    params: qurer
  })
}

export function postList(qurer){
  return request({
    // url: 'test/user',
    url: '/user',
    method: 'get',
    params: qurer
  })
}
