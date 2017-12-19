import React,{Component} from 'react';
import { Layout } from 'antd';
import MyFooter from './Components/MyFooter';
import Header from './Components/Header';
import MyContent from './Components/MyContent'


class App extends Component{
    render()
    {
        return(<Layout>
                <Header/>
                <MyContent/>
                <MyFooter/>
        </Layout>)
    }

}
export default App;