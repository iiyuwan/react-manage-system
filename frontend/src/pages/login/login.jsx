import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

import {Form, Input, Button, message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {TrophyOutlined} from '@ant-design/icons'
import './login.less'
import {reqLogin} from "../../api";
import storageUtil from '../../utils/storage'
// 登录的路由组件
class Login extends Component {
    onFinish = async (values) => {
        // 验证成功，就调用
        const res = await reqLogin(values)
        const status = res.status
        if(status === 0) {
            message.success('登录成功')
            this.props.history.replace('/',res.data)
            storageUtil.saveUser(res.data)
        }else {
            message.error(res.message)
        }
    }
    onFinishFailed = () => {
        // 验证失败时调用
        message.error('请输入有效的账号和密码！');
    }
    validatePwd = (_, value) => {
        // 自定义验证规则
        const val = value.trim()
        if (val.length === 0) return Promise.reject(new Error('密码不得为空！'))
        if (val.length < 3) return Promise.reject(new Error('密码不得少于3位！'))
        return Promise.resolve() // 验证成功调用
    }

    render() {

         // storageUtil.removeUser()
        // console.log(storageUtil.getUser())
        if(Object.keys(storageUtil.getUser()).length>0){
            return <Redirect to='/'/>
        }
        return (
            <div className='login-wrapper'>
                <h2 className="login-title">
                    <TrophyOutlined/> 欢迎登录
                </h2>
                <div className="login-box">
                    <Form
                        name="normal_login"
                        className="login-form"
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        initialValues={{username: 'admin', password: 'admin123'}}
                    >
                        <Form.Item
                            name="username"
                            rules={[ // 声明式验证
                                {
                                    required: true,
                                    whitespace: true,
                                    message: '请输入账号！',
                                },
                                {
                                    min: 4,
                                    message: '账号不得少于4位！',
                                },
                                {
                                    pattern: /^\w+$/,
                                    message: '账号必须是数字、字母或下划线'
                                }
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>} maxLength={12}
                                   placeholder="用户名"/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    validator: this.validatePwd,

                                },
                            ]}
                        >
                            <Input
                                maxLength={12}
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;
