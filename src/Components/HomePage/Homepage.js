import React,{Component} from 'react';
import Footer from './Footer';
import Header from './Header';
import MyContent from './MyContent'

class Home extends Component {
  render() {
    return (
        <div>
        <Header/>
        <MyContent/>
        <Footer/>
        </div>
    );
  }
}

export default Home;
