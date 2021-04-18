// 创建用户 schema
const mongoose = require('mongoose')
const {dbName} = require("../config")
console.log(dbName)
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    create_time: {
        type: Date,
        default: Date.now // 这里不能直接调用，不然就写死了，new User会自动调用
    },
    role_id:{ // 角色 id，0=>普通人员，1=>管理员
        type:Number,
        default: 0
    },
    menus:{ // 该角色对于的菜单栏
        type:Array,
        default: []
    },
    avatar: {
        type: String,
        default: '/public/img/avatar_default.png'
    },
    bio: { // 个人介绍
        type: String,
        default: ''
    },
    phone: {
        type: String
    },

    gender: {
        type: Number,
        enum: [-1, 0, 1], // 保密 女 男
        default: -1 // 默认保密
    },
})

const User = mongoose.model('User', userSchema) // 发布 schema，在数据库中生成 User 表

module.exports = User
