import React from 'react';
import {connect} from 'react-redux'
import {login} from "./Auth.redux";
import {Redirect} from 'react-router-dom';

//两个reducer 每个reducer都有一个state
@connect(
    state=>state.auth,
    {login}
)
class Auth extends React.Component{
    render() {
        return (
            <div>
                {this.props.isAuth?<Redirect to='/dashboard' />:null}
                <h2>需要登录才能查看</h2>
                <button onClick={this.props.login}>login</button>
            </div>

        )
    }
}
export default Auth