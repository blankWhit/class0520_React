/*
* 包含了n个生产action对象工厂函数模块
* */

import {
    SAVE_USER,
    REMOVE_USER,
    SET_TITLE,
    GET_CATEGORIES_SUCCESS,
    ADD_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_SUCCESS
} from './action-types';
import { reqGetCategories,reqAddCategory,reqUpdateCategory } from '@api';

//保存用户数据
export const saveUser = (user)=>({type:SAVE_USER,data:user});
//清除用户数据
export const removeUser = ()=>({type:REMOVE_USER});

//设置title
export const setTitle = (title)=>({type:SET_TITLE,data:title});

//获取分类数据  同步action
const getCategoriesSuccess = (categories)=>({type:GET_CATEGORIES_SUCCESS,data:categories});
//获取分类数据  异步action
export const getCategories = ()=>{
    return async (dispatch)=>{
        //发送请求，请求分类列表数据
       const result = await reqGetCategories();
       //更新redux状态
        dispatch(getCategoriesSuccess(result));
    }
};


//获取分类数据  同步
const addCategorySuccess = (category)=>({type:ADD_CATEGORY_SUCCESS,data:category});
//添加分类数据
export const addCategory = (categoryName)=>{
    return async (dispatch)=>{
       const result = await reqAddCategory(categoryName);
       dispatch(addCategorySuccess(result));
    }
};

//获取分类数据  同步
const updateCategorySuccess = (category) => ({type: UPDATE_CATEGORY_SUCCESS, data: category});
// 添加分类数据
export const updateCategory = (categoryId, categoryName) => {
    return async (dispatch) => {
        const result = await reqUpdateCategory(categoryId, categoryName);
        dispatch(updateCategorySuccess(result));
    }
};