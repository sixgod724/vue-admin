// 导入 axios
import axios from 'axios';
// 导入 element-ui 消息模块
import { Message } from 'element-ui';

// 创建 axios 实例
const service = axios.create({
  // baseURL: '' // 公共接口
  // 请求时间
  timeout:5000
})

// 请求拦截器
service.interceptors.request.use(config => {
  //发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
  config.data = JSON.stringify(config.data);
  config.headers = {
    'Content-Type':'application/x-www-form-urlencoded' //配置请求头
  }
  // 取 token 之前存一下
  // const token = getToken('TokenName');
  // if(token){
  //   config.params = {'token':token} // 如果要求携带在参数中
  //   config.headers.token = token; // 如果要求携带在请求头中
  // }
  // console.log(config)
  return config
},error => {
  console.log(error);
  return Promise.reject(error);
})

// 响应拦截器
service.interceptors.response.use(response => {
  // 接收到响应数据并成功后的一些共有处理
  return response;
},error => {
  /* 接收到异常响应的一些处理 */
  console.log('err'+error);
  Message({
    message: 'error.message',
    type: 'error',
    duration: 5 * 1000
  })
})

export default service
