/*
 * @author: lzj
 * @Date: 2020-10-22 14:32:26
 * @LastEditTime: 2021-03-16 18:19:51
 */
import React, { useState } from 'react'
import { Select, Row, Col, Button, Table } from 'antd'
const { Option } = Select
import requestWithLoading from '@/hooks/loading'
import api from '@/api'

// class Detail extends React.Component{
const Detail: React.FC = () => {

	const seleList1 = [
		{ title: '111', value: 1 },
		{ title: '222', value: 2 },
		{ title: '333', value: 3 },
		{ title: '444', value: 4 }
	]

	const [seleList, setSeleList] = useState(seleList1)
  const [searchParams, setSearchParams] = useState({
    username: ''
  })
  const { loading, list } = requestWithLoading(api.Users.list(searchParams))

	const getInputAndOptions = (input: any, option: any) => {
		console.log(input)
		console.log(option)
		return true
	}

  const getResponse = () => {
    console.log('获取请求')
  }

  const columns = [
    { title: '用户名', dataIndex: 'u_username' },
    { title: '手机号', dataIndex: 'u_password' },
  ]

	return (
		<Row gutter={24}>
      <Col span={24}>
        <Table
          loading={loading}
          columns={columns}
          rowKey={item => item.u_id} 
          dataSource={list} 
          bordered
        >
        </Table>
        </Col>
		</Row>
		
	)

}

export default Detail