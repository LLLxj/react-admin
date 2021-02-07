import React from 'react'
import { Form, Input, Button, Row, Col, Table, message, Popconfirm } from 'antd'
import Users from '../../api/users'

const layout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 16 },
}

interface IsState {
	list: TableItemProp[]
	totalNum ?: number
	totalPage ?: number
	top: string,
	bottom: string,
	username: string,
	tel: string,
	visible: boolean,
	confirmLoading: boolean
}

interface TableColumnProp {
	title: string,
	dataIndex: string,
	// key: string,
	align: any,
	fixed ?: any,
	render ?: any
}

interface InputItemProps {
	target: {
		name: string
		value: string
	}
}

interface TableItemProp {
	createdAt: string
	id: number
	password: string
	repas: string
	tel: string
	updatedAt: string
	username: string
}

class UserList extends React.Component<any, IsState>{

	constructor (props: IsState) {
		super(props)
		this.state = {
			list: [],
			totalNum: 100,
			totalPage: 100,
			top: 'none',
			bottom: 'bottomRight',
			username: '',
			tel: '',
			visible: false,
			confirmLoading: false
		}
	}

	componentDidMount (): void {
		this.getDatalist()
	}

	getDatalist = ():void => { // 搜索
		console.log(111)
		const params = {
			username: this.state.username,
			tel: this.state.tel
		}
		Users.list(params).then((res: InterFaceResultReturnProps) => {
			const { code, msg, result, totalNum, totalPage } = res.data
			if (code === 200) {
				this.setState({
					list: result,
					totalNum: totalNum,
					totalPage: totalPage
				})
			} else {
				message.error(msg)
			}
		})
	}

	handleInputChange = (e: InputItemProps): void => {
		console.log(e.target.name)
		console.log(e.target.value)
		const label = e.target.name
		const value = e.target.value
		if (label === 'username') {
			console.log(111)
			this.setState({
				username: value
			})
		} else if (label === 'tel') {
			this.setState({
				tel: value
			})
		}
		console.log(this.state)
	}

	resetForm = ():void => { // 重置表单
		console.log('重置表单操作')
		this.setState({
			username: '',
			tel: ''
		},()=>{
			this.getDatalist()
		})
	}

	addEdit = (): void => {
		console.log('add handle')
	}

	editHandle = (item: TableItemProp): any => { // 编辑操作
	// editHandle = (): void => { // 编辑操作
		console.log('编辑操作')
		console.log('item')
		console.log(item)
	}

	deleteHandle = (item: TableItemProp): any => { // 删除操作
	// editHandle = (): void => { // 删除操作
		console.log('删除操作')
		console.log(item)
		this.setState({
			visible: true
		})
	}

	handleOk = (): void => { // 确认删除操作
		console.log('确认删除')
	}

	handleCancel = (): void => { // 取消删除操作
		console.log('取消删除')
	}

	render(): JSX.Element {
		const columns: TableColumnProp[] = [
			{ title: '用户名', dataIndex: 'username', align: 'center' },
			{ title: '手机号', dataIndex: 'tel', align: 'center' },
			{ title: '创建时间', dataIndex: 'createdAt', align: 'center'  },
			{ title: '操作', dataIndex: 'operate', align: 'center', render: (text: number, item: TableItemProp, index: number): JSX.Element => (
				<>
					<Popconfirm
						title="Title"
						key={index}
						visible={this.state.visible}
						onConfirm={this.handleOk}
						okButtonProps={{ loading: this.state.confirmLoading }}
						onCancel={this.handleCancel}
					>
						<Button type="link" onClick={() => this.deleteHandle(item)}>删除</Button>
					</Popconfirm>
					<Button type="link" onClick={() => this.editHandle(item)}>编辑</Button>
					
				</>
				
			)}
		]
		return (
			<>
				<Form
					{...layout}
					name="basic"
					initialValues={{ remember: true }}
				>
					<Row>
						<Col span={5}>
							<Form.Item label="用户名" name="username">
								<Input value={this.state.username} onChange={this.handleInputChange} name="username"/>
							</Form.Item>
						</Col>
						<Col span={5}>
							<Form.Item label="手机号" name="tel">
								<Input value={this.state.tel} onChange={this.handleInputChange} name="tel"/>
							</Form.Item>
						</Col>
						<Col span={1}>
							<Form.Item >
								<Button htmlType="submit" onClick={this.getDatalist}>查询</Button>
							</Form.Item>
						</Col>
						<Col span={1}>
							<Form.Item>
								<Button htmlType="submit" onClick={this.resetForm}>重置</Button>
							</Form.Item>
						</Col>
						<Col span={1}>
							<Form.Item>
								<Button type="primary" htmlType="submit" onClick={this.addEdit}>新增</Button>
							</Form.Item>
						</Col>
					</Row>
				</Form>
				<Table 
					columns={columns}
					rowKey={item => item.id} 
					dataSource={this.state.list} 
					bordered
				>
					{/* <Table.Column<TableItemProp> key="name" title="Name" dataIndex="name" /> */}
				</Table>
			</>
		)
	}

}

export default UserList