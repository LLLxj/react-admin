import React, { useState, useEffect } from 'react'
import { useToggle } from 'react-use'
import { Form, Input, Button, Row, Col, Table, message, Popconfirm } from 'antd'
import requestWithLoading from '@/hooks/loading'
import api from '@/api'


const layout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 16 },
}

interface IsState {
	list: TableItemProp[];
	totalNum?: number;
	totalPage?: number;
	top: string;
	bottom: string;
	username: string;
	tel: string;
	visible: boolean;
	confirmLoading: boolean;
}
interface InputItemProps {
	target: {
		name: string;
		value: string;
	}
}

interface TableItemProp {
	u_id: number;
	u_password: string;
	u_username: string;
}

const UserList: React.FC<any> = () => {
  const [searchParams, setSearchParams] = useState({
    // totalNum: 0,
    // page: 1,
    // limit: 10,
    username: ''
  })
  // const [loading, setLoading] = useState<boolean>()
  // const [list, setList] = useState<TableItemProp[]>([])
  const { loading, list } = requestWithLoading(api.Users.list(searchParams))
  

  useEffect(() => {
    // getDatalist()
  }, [])

	const getDatalist = () => { // 搜索
    console.log(111)
    const { datas, loading } = requestWithLoading(api.Users.list(searchParams))
    // setLoading(loading)
    // setList(datas)
	}
  // getDatalist()


	const handleInputChange = (e: InputItemProps): void => {
		const label = e.target.name
		const value = e.target.value
		// if (label === 'username') {
		// 	this.setState({
		// 		username: value
		// 	})
		// } else if (label === 'tel') {
		// 	this.setState({
		// 		tel: value
		// 	})
		// }
	}

	const resetForm = ():void => { // 重置表单
		console.log('重置表单操作')
    setSearchParams({
      username: ''
    })
		// this.setState({
		// 	username: '',
		// 	tel: ''
		// },()=>{
		// 	this.getDatalist()
		// })
	}

	const addEdit = (): void => {
		console.log('add handle')
	}

	const editHandle = (item: any): any => { // 编辑操作
	// editHandle = (): void => { // 编辑操作
		console.log('编辑操作')
		console.log('item')
		console.log(item)
	}

	const deleteHandle = (item: any): any => { // 删除操作
	// editHandle = (): void => { // 删除操作
		console.log('删除操作')
		console.log(item)
		// this.setState({
		// 	visible: true
		// })
	}

	const handleOk = (): void => { // 确认删除操作
		console.log('确认删除')
	}

	const handleCancel = (): void => { // 取消删除操作
		console.log('取消删除')
	}

  const columns = [
    { title: '用户名', dataIndex: 'u_username' },
    { title: '手机号', dataIndex: 'u_password' },
    // { title: '操作',
    //   dataIndex: 'operate',
    //   render: (_: any, item: any) => {
    //     <Row>
    //       <Popconfirm
    //         title="Title"
    //         key={item.u_id}
    //         visible={visible}
    //         onConfirm={() => handleOk}
    //         okButtonProps={{ loading: confirmLoading }}
    //         onCancel={() => handleCancel}
    //       >
    //         <Button type="link" onClick={() => deleteHandle(item)}>删除</Button>
    //       </Popconfirm>
    //       <Button type="link" onClick={() => editHandle(item)}>编辑</Button>
    //     </Row>
    //   }
    // }
  ]

  const upDateForm = (changedFields: any, allFields: any) => {
    console.log(allFields)
    setSearchParams({
      username: allFields.username
    })
  }
		
  return (
    <>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onValuesChange={upDateForm}
      >
        <Row gutter={24}>
          <Col span={5}>
            <Form.Item label="用户名" name="username">
              <Input />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item label="手机号" name="tel">
              <Input />
            </Form.Item>
          </Col>
          <Col span={2}>
            <Form.Item >
              <Button onClick={() => getDatalist()}>查询</Button>
            </Form.Item>
          </Col>
          <Col span={2}>
            <Form.Item>
              <Button htmlType="submit" onClick={() => resetForm()}>重置</Button>
            </Form.Item>
          </Col>
          <Col span={2}>
            <Form.Item>
              <Button type="primary" onClick={() => addEdit()}>新增</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Table
        loading={loading}
        columns={columns}
        rowKey={item => item.u_id} 
        dataSource={list} 
        bordered
      >
        {/* <Table.Column<TableItemProp> key="name" title="Name" dataIndex="name" /> */}
      </Table>
    </>
  )
}

export default UserList