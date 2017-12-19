import React from 'react';
import {Layout,Col,Row} from 'antd';
import Post from './Post'
const {Content} = Layout;


class MyContent extends React.Component {

    render()
    {
        return ( <Content style={{ minHeight:'1800px',backgroundColor:"#fff",marginTop:"70px" }}>
            <Row  type="flex" justify="space-between">
            <Col span={6} style={{backgroundColor:"#E9EBEF",minHeight:"1800px"}}/>
            <Col span={10}><Post/><Post/><Post/></Col>
            <Col span={6}/>
            </Row>
        </Content> );
    }

}

export default MyContent;