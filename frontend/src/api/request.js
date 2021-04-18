// 封装 ajax模块
import axios from "axios";
import { message } from "antd";
import {ip} from '../config'
axios.defaults.baseURL = ip // 这里可以不用配置了，因为设置了代理
/*
* 优化点1：请求出错时，可以在这里直接全局拦截
* 优化点2：异步得到的结果是 response.data 就只含有后台返回的数据了
* */
export default function request(url, data = {}, method = 'GET') {
    return new Promise((resolve, reject) => {
        let promise
        if (method === 'GET') {
            promise = axios.get(url, {params: data})
        } else {
            promise = axios.post(url, data)
        }
        promise.then(resp => {
            resolve(resp.data)
        }).catch(err => {
            message.error(err.response.data.message) // 全局错误处理，这里就不能 reject 了
        })
    })
}
