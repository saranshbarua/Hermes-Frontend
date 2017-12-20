import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
 text-align:center;
 margin-top:100px;
 min-height :100px;
`;

class MyFooter extends React.Component {

    render()
    {
        return (
            <Wrapper >
                Open Source Developer Community ©2018 Created by OSDC
            </Wrapper>);
    }

}

export default MyFooter;