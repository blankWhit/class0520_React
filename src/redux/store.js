import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import { isEnv } from '@config'

import reduces from './reduces';

let store;

if ( isEnv ){

    //开发环境
    store = createStore(reduces,composeWithDevTools(applyMiddleware(thunk)))

}else{

    //生产环境
    store = createStore(reduces,composeWithDevTools(thunk))

}

export default store;