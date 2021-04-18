const express = require('express')
const app = express()
const port = 5000

const userRouter  = require('./routes/user.js')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false })) // 添加中间件解析post表单数据
app.use(bodyParser.json())
app.use(express.static('public')) // 指定公开目录

const User = require('./models/user')
const md5 = require('blueimp-md5')
app.use(userRouter) // 引入 user 路由

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
})

// new User({username:'admin','password':md5('admin123'),role_id:1}).save()
