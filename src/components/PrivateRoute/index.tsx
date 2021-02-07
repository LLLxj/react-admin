import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Auth from '@/utils/auth'
import LayoutContainer from '../../layout/index'
import Routes from '@/router'


interface ProviderProps {
	path: string
	component: any
}
class PrivateRoute extends Component<any, ProviderProps> {
	constructor (props: ProviderProps) {
		super(props)
		console.log(11)
		// this.redirect(props)
	}

	// 重定向
	// redirect = (np: any) => {
	// 	const { history } = np

	// 	// 判断是否登录了
	// 	if (Auth.getToken()) {
	// 		const pathname = history.location.pathname
	// 		// 如果是登录页 不跳转 否则会死循环
	// 		// if (!pathname.includes('login') && !pathname.includes('register')) {
	// 		//  	history.push('/login')
	// 		// }
	// 		if (!pathname.includes('login')) {
	// 			history.push('/login')
	// 		}
	// 	}
	// }

	render (): JSX.Element {
		// console.log('author里的store:', this.props.store)
		const { component: any, ...rest} = this.props //获取顶层provider上所有的信息
		const isLogin = Auth.getToken()
		console.log(isLogin)
		console.log('isLogin:', isLogin)
		console.log('this.props:',this.props)
		console.log('component:', Component)
		// if (isLogin) {
		// 	<Routes />
		// }
		// return (
		// 	<Redirect to="/login" />
		// )
		return (
			<Route {...rest} render={props => {
				return isLogin ? <Component {...props} /> : <Redirect to="/login" /> 
				// return isLogin ? <Component {...props}/> : <Redirect to="/login" /> //这里的<Component {...this.props} />实际上指向的是Layout组件
			}}/>
		)
	}
}


export default PrivateRoute