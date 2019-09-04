import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware,compose} from "redux";
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {counter} from './index.redux'

//create store
const store = createStore(counter,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
    )
    );

    ReactDOM.render(
        (<Provider  store={store}>
            <App />
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
