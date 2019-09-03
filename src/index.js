import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";

ReactDOM.render(<App />, document.getElementById('root'));

//新建store，通过reducer建立，根据老state和action生成新的state
function counter(state = 0,action){
    switch (action.type) {
        case 'add':
            return state+1;
        case 'minus':
            return state-1;
        default:
            return 10
    }
}
//create store
const store = createStore(counter);
const init = store.getState();
console.log(init);
function listener(){
    const current = store.getState();
    console.log(`现有${current}把机枪`)
}
store.subscribe(listener);

//Dispatch event派发事件 传递action
store.dispatch({type:'add'});
store.dispatch({type:'add'});
store.dispatch({type:'add'});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
