import React from 'react';
import {Affix,Carousel} from 'antd';
import Midbar from "./Midbar";
import styled from 'styled-components';
import ".//Midbar.css";
const Subnav =  styled.div`
min-height:70px;
background-color:#272932;
opacity:0.4;
text-align:left;
`;
const H1 =  styled.h1`
color:#fff;
opacity:2;
font-size:40px;
`;
class Header extends React.Component {

    render()
    {
        return (
            <div>
            <Carousel autoplay>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
    </Carousel>
        <div style={{marginTop:"-560px"}}>
            <Affix offsetTop={46} >
                <Subnav><H1>Hermes</H1></Subnav>
            </Affix>
        </div>
        <div style={{marginTop:"350px"}}>
    <Midbar/>
    </div></div>);
    }

}

export default Header;
