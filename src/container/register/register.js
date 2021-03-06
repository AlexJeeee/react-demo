import React from 'react';
import Logo from '../../component/logo/logo'
import {List,InputItem,Radio,WingBlank,WhiteSpace,Button} from "antd-mobile";
import {connect} from 'react-redux';
import {register} from "../../redux/user.redux";
@connect(
    state=>state.user,
    {register}
)
class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:'',
            psw:'',
            repeatpsw:'',
            type:'genius'
        };
        this.handleRegister = this.handleRegister.bind(this)
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
    handleRegister(){
        this.props.register(this.state)
    }
    render() {
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                <Logo></Logo>
                <WingBlank>
                    <List>
                        <InputItem onChange={v=>this.handleChange('user',v)}>用户名</InputItem>
                        <InputItem type='password' onChange={v=>this.handleChange('psw',v)}>密码</InputItem>
                        <InputItem type='password' onChange={v=>this.handleChange('repeatpsw',v)}>确认密码</InputItem>
                        <RadioItem

                            checked={this.state.type==='genius'}
                            onChange={()=>this.handleChange('type','genius')}
                        >牛人</RadioItem>
                        <RadioItem
                            checked={this.state.type==='boss'}
                            onChange={()=>this.handleChange('type','boss')}
                        >boss</RadioItem>
                    </List>
                    <WhiteSpace />
                    <Button onClick={this.handleRegister} type='primary'>注册</Button>
                </WingBlank>
            </div>

        )
    }
}
export default Register