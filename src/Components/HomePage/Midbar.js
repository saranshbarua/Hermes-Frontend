import React from 'react';
import { Select,Input,Row,Col,Affix,Cascader} from 'antd';
const Option = Select.Option

const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    }
, {
    value: 'jiangsu',
    label: 'Jiangsu',

}];

class Midbar extends React.Component {
    handleChange(value) {
        console.log(`selected ${value}`);
    }
    render() {
        return (
            <Affix  offsetTop={60}>
                <Row>
                    <Col span={8}/>
                    <Col span={2}>
                        <select defaultValue="All" style={{height:"50px",backgroundColor:"#03A9F4",outline:"none",borderColor:"#03A9F4",color:"white",fontSize:"18px",textAlign:"center",width:"120px"}}>
                            <option value="All">All</option>
                            <option value="Compititions">Compitition</option>
                            <option value="Fest">Fest</option>
                            <option value="Conference">Conference</option>
                        </select>
                    </Col>
                        <Col span={6}>
                        <Input placeholder="Search Event" style={{height:"50px",width:"350px",fontSize:"15px"}} />
                        </Col>
                    <Col span={8}/>
                </Row>
            </Affix>

        );
    }
}

export default Midbar;
