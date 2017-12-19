import React from 'react';
import { Menu} from 'antd';

class MyMenu extends React.Component {
    state = {
        current: 'mail',
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                theme="dark"
                style={{backgroundColor:"#272932",borderColor:"#272932"}}

            >
                <Menu.Item key="mail">
                    Events
                </Menu.Item>
                <Menu.Item key="app" >
                    Competition
                </Menu.Item>
                <Menu.Item key="/">
                    Login
                </Menu.Item>
            </Menu>


        );
    }
}

export default MyMenu;