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
import './config'
import 'antd-mobile/dist/antd-mobile.css'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authRoute/authRoute'
import * as serviceWorker from './serviceWorker';

//create store
const store = createStore(reducer,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
    )
    );

//redux+router
    ReactDOM.render(
        (<Provider  store={store}>
            <BrowserRouter>
                <div>
                    <AuthRoute></AuthRoute>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>
                </div>
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
