import React, {Component} from 'react';
import { Card, Button} from "antd";
import './index.less'
class Category extends Component {
    render() {
        return (
            <div className='category'>
                <Card title="一级分类" extra={<Button  >More</Button>} style={{width:'100%',height:'100%'}}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
        );
    }
}

export default Category;
