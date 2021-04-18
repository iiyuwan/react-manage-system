import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './pages/home/home'
import Login from './pages/login/login'

class App extends Component {
    render() {
        return (
                <BrowserRouter>
                    {/* 匹配一个路由组件 */}
                    <Switch>
                        {/* 注册路由 */}
                        <Route path='/login' component={Login}></Route>
                        <Route path='/' component={Home}></Route>
                    </Switch>
                </BrowserRouter>
        );
    }
}

export default App;
