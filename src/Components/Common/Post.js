import React,{Component} from 'react';
import {Card,Icon,Avatar} from 'antd';
const { Meta } = Card;
class Post extends Component {
    constructor(props)
    {
        super(props)
    }
    render()
    {
     return (  <Card
         style={{ minWidth: 600,marginTop:"20px" }}
         avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
         title={this.props.name}
         actions={[<Icon type="like" />, <Icon type="message" />]}
     >

         <Meta
             description="Do you want to see where your tech skills rank in comparison to other tech professionals?
                            Take our free skill assessments in JavaScript, Python, HTML5, MySQL, PowerShell, & graphic design to find out where you stand."
         />
         <Card
             style={{marginTop:"10px"}}
             cover={<img alt="example" src="https://dummyimage.com/500x350/E9EBEF/000" />}
         />
     </Card>);
    }

}

export default Post;