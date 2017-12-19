import React,{Component} from 'react';
import { Layout ,Affix} from 'antd';
import Home from './Components/Homepage';
import EventPage from './Components/EventPage';
import {Route} from 'react-router-dom'
import MyMenu from './Components/MyMenu';


class App extends Component{
    render()
    {
        return(<Layout>

            <Affix >
                <MyMenu/>
            </Affix>
            <Route exact path={`/`} component={Home}/>
            <Route path={'/event'} component={EventPage}/>

        </Layout>)
    }

}
export default App;