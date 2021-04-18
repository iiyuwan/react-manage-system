let express = require('express');
const User = require('../models/user')
const md5 = require('blueimp-md5')
let router = express.Router();
const {stateAndCode} = require('../config')
/**
 * @api {post} /login 用户登录
 * @apiDescription 用户登录
 * @apiName login
 * @apiGroup User
 * @apiParam {String} username 用户名
 * @apiParam {String} password 密码
 * @apiSuccess {json} result
 * @apiSuccessExample {json} 成功响应示例:
 * {
 *      "status": 0,
 *      "data": {
 *          "_id": "465f4df34324",
 *          "password": "dsfdsr334d4d",
 *          "username": "admin",
 *          "create_time": 1547324343434,
 *          "_v": 0,
 *          "role": {
 *              "menus": []
 *      }
 * }
 *
 *  @apiError {json} result
 *  @apiErrorExample {json} 失败响应示例:
 *  {
 *      "status" : "1",
 *      "message" : "用户名或密码不正确"
 *  }
 * @apiSampleRequest http://localhost:5000/login
 * @apiVersion 1.0.0
 */
router.post('/login', async (req, res) => {
    const {username, password} = req.body;
    try {
        const user = await User.findOne({username: username, password: md5(password)})
        if (user) { // 登录成功
            return res.status(200).json({
                status: 0,
                data: user
            })
        }
        return res.status(200).json({ // 账号或密码不正确
            status: 1,
            message: stateAndCode.LOGIN_FAILED
        })
    } catch (e) {
        res.status(500).json({
            status: 1,
            message: stateAndCode.SERVER_BUSY
        })
    }


});

/**
 * @api {post} /user/add 添加用户
 * @apiDescription 添加用户
 * @apiName addUser
 * @apiGroup User
 * @apiParam {String} username 用户名
 * @apiParam {String} password 密码
 * @apiParam {String} phone 手机号码
 * @apiParam {String} bio 自我介绍
 * @apiParam {String} avatar 头像地址
 * @apiParam {Number} gender 性别（-1=>保密 0=>女 1=>男）
 * @apiSuccess {json} result
 * @apiSuccessExample {json} 成功响应示例:
 * {
 *      "status": 0,
 *      "data":  "注册成功"
 * }
 *
 *  @apiError {json} result
 *  @apiErrorExample {json} 失败响应示例:
 *  {
 *      "status" : "1",
 *      "message" : "服务器正忙"
 *  }
 * @apiSampleRequest http://localhost:5000/user/add
 * @apiVersion 1.0.0
 */
router.post('/user/add', async (req, resp) => {

    try {
        if(await User.findOne({username:req.body.username})){ // 用户已存在
            return resp.status(200).json({
                status: 1,
                data: stateAndCode.USER_EXISTS
            })
        }
        req.body.password = md5(req.body.password)
        if(new User(req.body).save()){ // 注册成功
            return resp.status(200).json({
                status: 0,
                data: stateAndCode.REGIST_SUCCESS
            })
        }
    } catch (e) {
        resp.status(500).json({
            status: 1,
            message: stateAndCode.SERVER_BUSY
        })
    }
})
module.exports = router
