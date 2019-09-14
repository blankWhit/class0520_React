/*
* 封装axios代码
* */

import axios from 'axios';
import {message} from 'antd';
import store from '@redux/store';

//创建axios的实例
const instance = axios.create({
    baseURL:'http://localhost:3000/api',
    timeout:3000,

    },

)

//设置响应拦截器，处理响应之前触发函数



//设置请求拦截器，发送请求之前触发函数
instance.interceptors.request.use(

    (config)=> {
        //api/login 不需要加上请求头参数
        const {token} = store.getState().user;

        if (token) {
            //加上公共的请求头参数
            config.headers.authorization = token;
        }
        return config;
    }
)

//设置响应拦截器：处理响应之前触发函数
instance.interceptors.response.use(
    (response)=>{
        //请求成功
        const result = response.data;

        if (result.status === 0){
            //功能成功
            return result.data;

        } else{

            //错误提示
            message.error(result.msg);
            //功能失败
            return Promise.reject(result.msg);
        }
    },
    (error)=>{
        //请求失败
        //错误提示
        message.error('未知错误，请联系管理员');
        //功能失败
        return Promise.reject('未知错误，请联系管理员');
    }
)


export default instance