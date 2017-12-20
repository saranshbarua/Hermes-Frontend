import React,{Component} from 'react';
import {Layout} from 'antd';
const {Header,Footer,Content} = Layout;
class EventPage extends Component {
    render() {
        return (
            <div>
                <Header style={{minHeight:"500px"}}/>
                <Content style={{minHeight:"800px"}}/>
                <Footer style={{minHeight:"300px"}}/>
            </div>
        );
    }
}

export default EventPage;
