import React,{Component} from 'react';
import { Layout ,Affix} from 'antd';
import Home from './Components/HomePage/Homepage';
import EventPage from './Components/EventPage/EventPage';
import {Route} from 'react-router-dom'
import MyMenu from './Components/Common/MyMenu';
import Login from './Components/LoginPage/LoginPage';


class App extends Component{
    render()
    {
        return(<Layout>

            <Affix >
                <MyMenu/>
            </Affix>
            <Route exact path={`/`} component={Home}/>
            <Route path={'/event'} component={EventPage}/>
            <Route path={'/login'} component={Login}/>
        </Layout>)
    }

}
export default App;