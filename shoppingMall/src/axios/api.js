// 对请求接口进行封装

// 引入封装好的axios实例
import requests from './axios.js';

let getType = (params={})=>{
  return requests.get('/type',params)
}
let getSales = (params={})=>{
  return requests.post('/sales',params)
}
let getPic = (params={})=>{
  return requests.post('/pic',params)
}
let getgirlfriend = (params={})=>{
  return requests.post('/girlfriend',params)
}
export default {getType,getSales,getPic,getgirlfriend}
