import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Auth from '@/utils/auth'
import LayoutContainer from '../../layout/index'
import Routes from '@/router'
import Login from '@/views/login'
interface ProviderProps {
	path: string
	component: any
}
class PrivateRoute extends Component<any, ProviderProps> {
	constructor (props: ProviderProps) {
		super(props)
	}
	render (): JSX.Element {
		// console.log('author里的store:', this.props.store)
		const { component: Component, ...rest} = this.props //获取顶层provider上所有的信息
		const isLogin = Auth.getToken()
		console.log(isLogin)
		console.log('isLogin:', isLogin)
		console.log('this.props:',this.props)
		console.log('rest:', rest)
		console.log('component:', Component)
		// if (isLogin) {
		// 	return (
		// 		<Routes />
		// 	)
		// } else {
		// 	return (
		// 		<Redirect to="/login" />
		// 	)
		// }
		
		return (
			<Route {...rest} render={props => {
				// return isLogin ? <Component {...props} 
				// 	render={(props: any) => {
				// 		return <div className="app-main">
				// 			<item.component {...props} />
				// 		</div>
				// 	}}
				// /> : <Redirect to="/login" /> 
				return isLogin ? <Component {...props}  
					render={(props: any) => {
						return <div className="app-main">
							<Component {...props} />
						</div>
					}}
				/> : <Redirect to="/login" /> //这里的<Component {...this.props} />实际上指向的是Layout组件
			}}/>
		)
	}
}


export default PrivateRoute