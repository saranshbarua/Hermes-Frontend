import React from 'react';
import {Affix,Carousel} from 'antd';
import Midbar from "./Midbar";
import MyMenu from './MyMenu';
import ".//Midbar.css";
class Header extends React.Component {

    render()
    {
        return (
            <div><Affix >
                <MyMenu/>
            </Affix>
            <Carousel autoplay>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
    </Carousel>
        <div style={{marginTop:"-560px"}}>
            <Affix offsetTop={46} >
                <div style={{minHeight:"70px",backgroundColor:"#272932",opacity:"0.4",textAlign:"left"}}><h1 style={{color:"#fff",opacity:"2",fontSize:"40px"}}>Hermes</h1></div>
            </Affix>
        </div>
        <div style={{marginTop:"350px"}}>
    <Midbar/>
    </div></div>);
    }

}

export default Header;
