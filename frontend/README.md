# 前端设计
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
## 目录结构

```
frontend
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ README.md
└─ src
   ├─ api                   # ajax 相关
   ├─ App.js                # 根组件
   ├─ assets                # 公共资源
   ├─ components              # 非路由组件
   ├─ config                # 配置
   ├─ index.js              # 入口文件
   ├─ pages                 # 路由组件
   └─ utils                 # 工具模块

```
## 具体实现细节
1.[按需加载 antd 和自定义主题](https://3x.ant.design/docs/react/use-with-create-react-app-cn)
react-app-rewired 会 读取 config-overrides
[less-loader版本过高问题](https://blog.csdn.net/weixin_42614080/article/details/113749476)
2.代理问题【只能在开发环境中由前端配置，生产环境在后端配置】
3.async 和 await【只能拿到成功的回调，以同步编码方式获取异步结果】
4.如何动态生成 Menu+SubMenu【map、reduce】
5.刷新时如何选中对应菜单、如何打开折叠项【selectedKeys、openKeys】

jsonp主要是用来解决 get 跨域问题  【跨域问题--需要总结】   
它不是 ajax 请求，而是一般的 get 请求
基本原理：
浏览器动态生成 script 来请求后台接口（src就是接口的url）
定义好用于处理响应的函数 fn ，并将函数名通过请求参数提交到后台（如：callback = fn）
服务器端处理好数据后，返回一个函数调用的 js 代码，并将结果作为实参传入函数调用
浏览器端收到响应自动执行函数调用的 js 代码，也就执行了提前定义好的回调函数，并得到了需要的结果数据

6.头部布局、显示登录用户、时间（格式化）、请求天气、当前请求页面title的获取、退出登录
