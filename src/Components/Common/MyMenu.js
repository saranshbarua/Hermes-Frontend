import React from 'react';
import { Menu} from 'antd';
import {Link} from 'react-router-dom';
class MyMenu extends React.Component {
    state = {
        current: 'Home',
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
                <Menu.Item key="Home">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="event" >
                    <Link to="/event">Event</Link>
                </Menu.Item>
                <Menu.Item key="login">
                    <Link to="/login">Login</Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default MyMenu;