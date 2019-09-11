import React,{Component} from 'react';
import { Form,Icon,Input,Button,message } from 'antd';

import axios from 'axios';

import logo from './logo.png';
import './index.less';

@Form.create()
class Login extends Component{

    validator = (rule, value, callback) => {
        // console.log(rule, value);

        const name = rule.field === 'username' ? '用户名' : '密码';

        if (!value) {
            return callback(`请输入${name}`);
        }

        if (value.length < 3) {
            return callback(`${name}长度必须大于3位`);
        }

        if (value.length > 13) {
            return callback(`${name}长度必须小于13位`);
        }

        const reg = /^[a-zA-Z0-9_]{3,13}$/;
        if (!reg.test(value)) {
            return callback(`${name}只能包含英文、数字和下划线`);
        }

        // callback必须调用
        callback();
    };

    /**
     * 登录函数
     * */
    login = (e)=>{
        e.preventDefault();
        //校验表单
        this.props.form.validateFields((err,values)=>{

            if (!err){
                //校验通过
                const { username,password } = values;
                //发送请求。请求登录
                axios.post('http://localhost:3000/api/login',{username,password})
                .then((response)=>{

                    //请求成功
                    if (response.data.status === 0){
                        //登录成功
                        message.success('登录成功~')

                        //跳转到Home
                     this.props.history.replace('/');

                    }else{
                        //登录失败
                        message.error(response.data.msg);
                    }
                })
                .catch((error)=>{
                    //请求失败
                    message.error('未知错误，请联系管理员~');
                })

            }

        })
    };

    render() {

        const { getFieldDecorator } = this.props.form;

        return  <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt="logo"/>
                    <h1>React项目: 后台管理系统</h1>
                </header>

                <section className='login-section'>

                    <h3>用户登录</h3>
                    <Form onSubmit={this.login}>

                        <Form.Item>
                            {
                                getFieldDecorator(
                                    "username",
                                    {
                                        rules:[
                                            { validator:this.validator}
                                        ]
                                    }
                                )(
                                    <Input prefix={<Icon type="user"/>} placeholder="用户名"/>
                                )
                            }

                        </Form.Item>

                        <Form.Item>
                            {
                                getFieldDecorator(
                                    'password',
                                    {
                                        rules:[
                                            { validator:this.validator}
                                        ]
                                    }
                                )(
                                    <Input prefix={<Icon type="lock" />} type="password" placeholder="密码"/>
                                )
                            }

                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit"  className='login-btn'>提交</Button>
                        </Form.Item>

                    </Form>


                </section>
            </div>;
    }

}

export default Login;