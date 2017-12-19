import React from 'react';
import {Layout} from 'antd';
const {Footer} = Layout;

class MyPost extends React.Component {

    render()
    {
        return (
            <Footer style={{ textAlign: 'center' ,minHeight:"100px",}}>
                Open Source Developer Community ©2016 Created by OSDC
            </Footer>);
    }

}

export default MyPost;