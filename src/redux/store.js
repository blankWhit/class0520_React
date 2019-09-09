import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import reduces from './reduces';

let store;

if (process.env.NODE_ENV === 'development'){

    //开发环境
    store = createStore(reduces,composeWithDevTools(applyMiddleware(thunk)))

}else{

    //生产环境
    store = createStore(reduces,composeWithDevTools(thunk))

}

export default store;