import request from "./request";
import jsonp from 'jsonp'
import {message} from "antd";
// 登录
export const reqLogin = (params) => request('/login', params,'POST')

// 添加用户
export const reqAddUser = (params) => request('/user/add',params,'POST')

export const reqWeather = (city) => {
 return new Promise((resolve,reject)=>{
     let url = `https://v0.yiketianqi.com/api?version=v61&city=${city}&appid=23764888&appsecret=khb8ICSg`
     jsonp(url,{}, (err,data)=>{
         if(!err){
             const { wea,wea_img } = data
             resolve({wea,wea_img})
         }else{
             message.error('获取天气信息失败！')
         }
     })
 })
}
