import request from "./request";

// 登录
export const reqLogin = (params) => request('/login', params,'POST')

// 添加用户
export const reqAddUser = (params) => request('/user/add',params,'POST')
