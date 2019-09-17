import React,{ Component } from 'react';
import { Card,Button,Icon,Table } from 'antd';

import { getCategories, addCategory, updateCategory } from '@redux/action-creators';

import './index.less'

class Catego extends Component{



    render() {

        //列的表头
        const columns = [
            {
                title: '分类名称', //表头名称
                //className:'xxx', //决定样式
                dataIndex: 'name',
            },
            {
                title: '操作',
                dataIndex:'operation',
                render:(category)=>{
                    return <div>

                        <Button type="link">修改分类</Button>
                        <Button type="link">删除分类</Button>

                    </div>
                }
            },

        ];

        //列的具体数据
       const data = [
            {
                key: '1',
                name: 'John Brown',
            },
            {
                key: '2',
                name: 'Jim Green',
            },
           {
               key: '3',
               name: 'Green',
           },
           {
               key: '4',
               name: 'Jim',
           },
        ];

        return <Card title="分类列表" extra={<Button type='primary'><Icon type="plus" />分类列表</Button>}>
            <Table
                columns={columns}
                dataSource={data}
                bordered
                rowKey="_id"
                pagination={{
                    showQuickJumper:true,
                    showSizeChanger:true,
                    pageSizeOptions:['3','6','9','10'],
                    defaultPageSize:3

                }}

            />
            </Card>
    }

  }

export default Catego;