import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom'
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

// 不是路由组件，要使用路由组件的 api
class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.menuNodes = this.getMenuNodes(menuList) // 先调用这个，保证能够先执行才获取到 openKey【这里执行一次，缓存起来了，就不必要每次render都去执行】
    }
    render() {
        const curPath = this.props.location.pathname

        return (
            <div className="sidebar">
                <Link to='/' className='sidebar-title'>
                    <img src={logo} alt="logo"/>
                    <h2>起什么名~</h2>
                </Link>
                {/* defaultSelectedKeys 也是在第一次被选中，直接浏览器输入 / 就会绑定 /，而 /dashboard 无法再绑定*/}
                <Menu mode="inline" theme="dark" selectedKeys={[curPath]} defaultOpenKeys={[this.openKey]}>
                    {
                        this.menuNodes // 获取 menu 节点
                    }
                </Menu>
            </div>
        );
    }

    getMenuNodes = (menuList) => { // map + 递归调用来实现层级（也可以用reduce实现：往空数组添加元素）
        const curPath = this.props.location.pathname
        return menuList.map(item => {
            if (item.children) {
                if(item.children.find(child => child.key === curPath)){ // 当前是二级路由

                    this.openKey = item.key // 需要记录下它的一级路由
                }
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

export default withRouter(Sidebar);
