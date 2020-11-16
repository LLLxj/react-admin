import React from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, KeyOutlined } from '@ant-design/icons'
import System from '../../api/system'

// class Login extends React.Component{
// 	render (): JSX.Element {
// 		return (
// 			<div className="login-container">
// 				<div className="login-form">
// 					111
// 				</div>
// 			</div>
// 		)
// 	}
// }

interface Login {
	username: string,
	password: string
}

interface InputItemProps {
	target: {
		value: string
	}
	// [index: string]: any
}

class Login extends React.Component{

	onFinish = (item: Login): void => {
		console.log(item)
	}

	sumbit = (): void => {
		const dataForm = {
			username: this.state.username,
			password: this.state.password
		}
		console.log(dataForm)
		console.log(System.login)
		System.login(dataForm).then((data: any) => {
			console.log(data)
		})
	}

	state = {
		loading: false,
		username: '',
		password: ''
	}

	handleUsernameInput = (e: InputItemProps): void => {
		this.setState({ username: e.target.value })
	}

	handlePasswordInput = (e: InputItemProps): void => {
		this.setState({ password: e.target.value })
	}

	render (): JSX.Element {

		return (
			<div className="login-container">
				<div className="login-form">
					<h3 className="title">react-admin</h3>
					<Form name="basic" initialValues={{ remember: true }} onFinish={this.onFinish}>
						<Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
							<Input onChange={this.handleUsernameInput} prefix={<UserOutlined />} size="large" />
						</Form.Item>
						<Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
							<Input.Password onChange={this.handlePasswordInput} prefix={<KeyOutlined />} size="large" />
						</Form.Item>
						<Button type="primary" loading={this.state.loading} onClick={this.sumbit} className="sumbit-style" size="large">
							Sign in
						</Button>
					</Form>
				</div>
			</div>
		)
	}
}

export default Login