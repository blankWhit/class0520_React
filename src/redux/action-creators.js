/*
* 包含了n个生产action对象工厂函数模块
* */

import {SAVE_USER} from './action-types'

//保存用户数据
export const saveUser = (user)=>({type:'SAVE_USER',data:user});