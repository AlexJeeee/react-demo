import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware,compose} from "redux";
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch
} from "react-router-dom";

import reducer from './reducer';
import Auth from './Auth';
import Dashboard from './Dashboard';
import * as serviceWorker from './serviceWorker';

//create store
const store = createStore(reducer,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
    )
    );

// class Test extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render() {
//         console.log(this.props);
//         return <h2>test {this.props.match.params.location}</h2>
//     }
// }
//登录
//  没有登录信息统一跳login
//页面 导航+显示+注销
//  一营
//  二营
//  骑兵连
//redux+router
    ReactDOM.render(
        (<Provider  store={store}>
            <BrowserRouter>
                <Switch>
                    {/*只渲染命中的第一个route*/}
                    <Route path='/login' exact component={Auth}></Route>
                    <Route path='/dashboard' component={Dashboard}></Route>
                    <Redirect to='/dashboard'></Redirect>
                </Switch>
            </BrowserRouter>
        </Provider>),
        document.getElementById('root')
    );


// const init = store.getState();
// console.log(init);
// function listener(){
//     const current = store.getState();
//     console.log(`现有${current}把机枪`)
// }
// store.subscribe(listener);
//
// //Dispatch event派发事件 传递action
// store.dispatch({type:'add'});
// store.dispatch({type:'add'});
// store.dispatch({type:'add'});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
