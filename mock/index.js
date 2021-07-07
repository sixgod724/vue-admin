import Mock from 'mockjs'
import {
  Random
} from 'mockjs'

Mock.setup({
  timeout: 1000 //设置请求延时时间
})

Mock.mock('/user', () => {
  let datalist = [];
  for (let i = 0; i < 5; i++) {
    const o = {
      cjl: Random.natural(1,100),
      type: Random.province(),
      time: Random.time('HH:mm:ss'),
    }
    datalist.push(o);
  }
  return datalist
})

Mock.mock('/profit','get',() => {
  let data = [];
  for(let i=0; i<6; i++) {
    const o = {
      lr: Random.natural(1,100),
    }
    data.push(o);
  }
  return data;
})