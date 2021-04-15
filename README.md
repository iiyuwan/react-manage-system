# 后台管理系统

## 技术选型

前端：

- react
- react-router-dom
- antd
- redux
- ajax
    - axios
    - jsonp
    - promise/async/await
- 富文本
    - react-draft-wysiwyg
    - draft-js
    - draftjs-to-html

模块化：

- ES6
- CommonJS

项目构件/工程化

- webpack
- create-react-app
- eslint

图表：

- echarts
- echarts-for-react

后端：

- node
- mongodb
- mongoose
- multer：文件上传
- blueimp-md5

## 前端路由

```bash
/login
/
  /home     
  /category                     # 分类管理
  /product                      # 商品管理
    /product/index                # 主页
    /product/saveupdate           # 添加/修改
    /product/detail               # 详情
  /user                         # 用户管理
  /role                         # 角色管理
  /charts/bar                   # 图表界面-柱状
  /charts/pie                   # 图表界面-饼状
  /charts/line                  # 图表界面-折线
```

## API 接口说明

后台接口地址：`localhost:5000`

### 登录

请求地址：/login

请求方式：POST

参数：

|参数名称|是否必选|类型|说明|
|----|----|----|----|
|username|是|String|用户名|
|password|是|String|密码|
响应示例：

成功
```json
{ 
  "status": 200,
  "data": {
    "_id": "465f4df34324",
    "password": "dsfdsr334d4d",
    "username": "admin",
    "create_time": 1547324343434,
    "_v": 0,
    "role": {
      "menus": []
    }
  }
}
```
失败
```json
{
  "status": 401,
  "msg": "用户名或密码不正确"
}
```


## 运行项目
```bash
npm start # 运行项目
npm run build # 项目打包
```
