import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {Row, Col, Modal} from 'antd'
import {ExclamationCircleOutlined} from '@ant-design/icons';
import dayjs from "dayjs";
import './index.less'
import menuList from "../../config/menus";
import storageUtil from "../../utils/storage";
import {reqWeather} from '../../api'
import LinkButton from "../LinkButton";

class Header extends Component {
    state = {
        currentTime: dayjs(Date.now()).format('YYYY-MM-DD hh:mm:ss'),
        wea: '',
        weaImg: '',
    }

    getTime = () => {
        this.timer = setInterval(() => {
            this.setState({
                currentTime: dayjs(Date.now()).format('YYYY-MM-DD hh:mm:ss')
            })
        }, 1000)
    }
    getWeather = async () => {
        const {wea, wea_img} = await reqWeather('成都')
        const weaImg = `/img/${wea_img}.png`
        this.setState({
            wea,
            weaImg
        })
    }
    getTitle = (menuList) => {
        const {pathname} = this.props.location
        let title = ''
        for (let i = 0; i < menuList.length; i++) {
            if (pathname === menuList[i].key) {
                title = menuList[i].title
                break;
            }
            if (menuList[i].children) {
                title = this.getTitle(menuList[i].children)
                if (title) break
            }
        }

        return title
    }
    handleOk = () => {
        storageUtil.removeUser()
        this.props.history.replace('/login')
    }
    logout = (e) => {
        e.preventDefault()
        Modal.confirm({
            icon: <ExclamationCircleOutlined/>,
            content: '确认退出吗',
            okText: '确认',
            cancelText: '取消',
            onOk: this.handleOk
        });
    }

    componentDidMount() {
        this.getTime() // 获取当前时间
        this.getWeather() // 获取天气

    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        const {currentTime, wea, weaImg} = this.state
        const title = this.getTitle(menuList)
        return (
            <div className='header'>
                <h3>欢迎您，{storageUtil.getUser().username}
                    &nbsp;<LinkButton  onClick={this.logout}>退出</LinkButton>
                </h3>
                <Row className='info'>
                    <Col span={8}>
                        <h3 className='pathname'>{title}</h3>
                    </Col>
                    <Col span={16}>
                        <p className="weather">{currentTime}&nbsp;&nbsp;&nbsp;{wea}
                            &nbsp;&nbsp;&nbsp;<img src={weaImg} alt='weather'/>
                        </p>

                    </Col>
                </Row>

            </div>
        );
    }
}

export default withRouter(Header);
