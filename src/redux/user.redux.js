import axios from 'axios'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const initState = {
  isAuth:false,
  msg:'',
  user:'',
  psw:'',
  type:''
};

// reducer
export function user(state=initState,action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {...state,msg:'',isAuth: true,...action.payload};
        case ERROR_MSG:
            return {...state,msg:action.msg,isAuth:false};
        default:
            return state
    }
}

function registerSuccess(data) {
    return {type:REGISTER_SUCCESS,payload:data}
}
function errorMsg(msg) {
    return {msg:msg,type:ERROR_MSG}
}
export function register({user,psw,repeatpsw,type}) {
    if(!user||!psw||!type){
        return errorMsg('用户名密码必须输入')
    }
    if(psw!==repeatpsw){
        return errorMsg('两次密码输入不一致')
    }
    return dispatch=> {
        axios.post('/user/register', {user, psw, type})
            .then(res => {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(registerSuccess({user, psw, type}))
                } else {
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }

}