import React from 'react';
import {Layout,Col,Row} from 'antd';
import Post from '../Common/Post'
const {Content} = Layout;


class MyContent extends React.Component {

    render()
    {
        return ( <Content style={{ minHeight:'2000px',backgroundColor:"#fff",marginTop:"90px" }}>
            <Row  type="flex" justify="space-between">
            <Col span={6} style={{backgroundColor:"#E9EBEF",minHeight:"2000px"}}/>
            <Col span={10}><Post name="post 1"/><Post name="post 2"/><Post name="post 3"/></Col>
            <Col span={6} style={{backgroundColor:"#E9EBEF",minHeight:"2000px"}}/>
            </Row>
        </Content> );
    }

}

export default MyContent;