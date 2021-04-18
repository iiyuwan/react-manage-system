import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Menu} from 'antd';
import './index.less'
import logo from '../../assets/images/logo.png'
import {
    createFromIconfontCN
} from '@ant-design/icons';
import menuList from "../../config/menus";

const IconFont = createFromIconfontCN({
    scriptUrl: [
        '/font/iconfont.js'
    ],
});
const {SubMenu} = Menu;


class Sidebar extends Component {
    render() {

        return (
            <div className="sidebar">
                <Link to='/' className='sidebar-title'>
                    <img src={logo} alt="logo"/>
                    <h2>起什么名~</h2>
                </Link>
                <Menu mode="inline" theme="dark" defaultSelectedKeys={[this.props.curPath]}>
                    {
                        this.getMenuNodes(menuList) // 获取 menu 节点
                    }


                </Menu>
            </div>
        );
    }
    getMenuNodes = (menuList) =>{ // map + 递归调用来实现层级（也可以用reduce实现：往空数组添加元素）
        return menuList.map(item => {
            if (item.children) {
                return (
                    <SubMenu key={item.key} icon={<IconFont type={item.icon}/>} title={item.title}>
                        {
                            this.getMenuNodes(item.children)
                        }
                    </SubMenu>
                )
            } else {
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <IconFont type={item.icon}/>
                            {item.title}</Link>
                    </Menu.Item>
                )
            }

        })
    }

}

export default Sidebar;
