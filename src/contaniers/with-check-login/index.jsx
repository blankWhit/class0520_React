import React,{ Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

/*
* 高阶组件
* 用于登录验证
* */

function withCheckLogin(WrappedComponent) {

    return connect(
        (state)=>({token:state.user.token}),null)
    (class extends Component{

        static displayName = `CheckLogin(${WrappedComponent.display || WrappedComponent.name || 'Component' }})`;

        render (){
            //登录校验

            //当前路径
            const { token,
                ...rest //包含剩下所有属性的一个对象
            } = this.props;
            const { location:{pathname} } = rest;

            if (pathname === '/login' && token) return <Redirect to='/'/>

            if (pathname !== '/login' && !token) return <Redirect to='/login'/>


            return <WrappedComponent {...rest}/>;
        }
    })

}


export default withCheckLogin;