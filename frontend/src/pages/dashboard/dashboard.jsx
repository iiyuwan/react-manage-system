import React, {Component} from 'react';
import storageUtil from "../../utils/storage";
import './dashboard.less'
class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard'>
                <h1>欢迎，{storageUtil.getUser().username} (^_−)☆</h1>
            </div>
        );
    }
}

export default Dashboard;
