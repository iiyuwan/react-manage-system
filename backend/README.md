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
