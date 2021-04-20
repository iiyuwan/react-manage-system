import React, {Component} from 'react';
import { Redirect, Route, Switch} from 'react-router-dom'

import {Layout} from 'antd';

import Sidebar from "../../components/Sidebar";
import Header from '../../components/Header'

import Dashboard from '../dashboard/dashboard'
import Category from "../product/category";
import Product from "../product";
import User from "../user/user";
import Role from "../role/role";
import Line from '../chart/line'
import Bar from "../chart/bar";
import Pie from "../chart/pie";

import './home.less'
import storageUtil from "../../utils/storage";



const {Footer, Sider, Content} = Layout; // 只能写在 import 下面


// 主页的路由组件
class Home extends Component {
    render() {
        const user = storageUtil.getUser()
        if (!user || !user._id) {
            console.log('进来了')
            return <Redirect to='/login'/>
        }
        return (
            <Layout style={{height: '100%'}}>
                <Sider>
                    <Sidebar />
                </Sider>
                <Layout>
                    <Header />
                    <Content style={{backgroundColor:'#fff',margin:'16px',overflow:'auto'}}>
                            {/* 匹配一个路由组件 */}
                            <Switch>
                                {/* 注册路由 */}
                                <Route path='/dashboard' component={Dashboard}></Route>
                                <Route path='/product/index' component={Product}></Route>
                                <Route path='/product/category' component={Category}></Route>
                                <Route path='/user' component={User}></Route>
                                <Route path='/role' component={Role}></Route>
                                <Route path='/charts/line' component={Line}></Route>
                                <Route path='/charts/bar' component={Bar}></Route>
                                <Route path='/charts/pie' component={Pie}></Route>
                                <Redirect to='/dashboard' />
                            </Switch>
                    </Content>
                    <Footer style={{textAlign:'center',color:'darkgray'}}>柠檬味的蜡笔小新&reg;</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Home;
