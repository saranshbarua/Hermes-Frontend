import React from 'react';
import {Layout} from 'antd';
import { Form, Icon, Input, Button, Checkbox,Row,Col } from 'antd';
import "./Css/style.css"
const {Footer,Content} = Layout;
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Content style={{marginTop:"100px",minHeight:"500px"}}>
                <Row type="flex" justify="space-between" align="middle">
                    <Col span={10}/>
                    <Col span={8}><h1 style={{marginLeft:"110px"}}>Login</h1></Col>
                    <Col span={6}/>
                </Row>
                <Row type="flex" justify="space-between" align="middle" style={{marginTop:"30px"}}>
                    <Col span={10}/>
                    <Col span={8} >
            <Form onSubmit={this.handleSubmit} className="login-form" style={{width: "300px",textAlign:"center"}}>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </FormItem>
            </Form>
                    </Col>
                    <Col span={6}/>
                </Row>
            </Content>
                );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm ;
// import React,{Component} from 'react';
// class Login extends Component {
//     render() {
//         return (
//             <div>
//                 <Content style={{minHeight:"800px"}}>
//
//                 </Content>
//                 <Footer style={{minHeight:"300px"}}/>
//             </div>
//         );
//     }
// }
//
// export default Login;
