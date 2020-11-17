import React from 'react'
import { Form, Input, Button, message } from 'antd'
import { UserOutlined, KeyOutlined } from '@ant-design/icons'
import System from '../../api/system'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userTokenCreator } from '../../redux/Users'
import { ReduxProps } from '../../redux'
import { Redirect } from 'react-router-dom'
import Auth from '../../utils/auth'
interface Login {
	username: string,
	password: string
}

interface InputItemProps {
	target: {
		value: string
	}
}
interface Props {
	token: string,
	handleUserToken: (value: string) => void
}
class Login extends React.Component<Props>{

	constructor(props: Props) {
		super(props)
	}
	
	sumbit = (): void => {
		const dataForm = {
			username: this.state.username,
			password: this.state.password
		}
		System.login(dataForm).then((data: InterFaceResultReturnProps) => {
			const { code, msg, result } = data.data
			if (code === 200) {
				message.success(msg)
				Auth.setToken(result)
				this.props.handleUserToken(result)
			} else {
				message.error(msg)
			}
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

		if(this.props.token !== ''){
			return <Redirect to='/' />
		}

		return (
			<div className="login-container">
				<div className="login-form">
					<h3 className="title">react-admin</h3>
					<Form name="basic" initialValues={{ remember: true }}>
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

const mapStateToProps = (state: ReduxProps) => {
	if (!state.Users) {
		return {
			token: ''
		}
	}
	return {
		token: state.Users.token
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		// 所有处理事件的方法都以handleXXX命名
		handleUserToken: bindActionCreators(userTokenCreator, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
// export default Login