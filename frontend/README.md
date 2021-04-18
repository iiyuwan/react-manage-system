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
