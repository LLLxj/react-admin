import React, {Component} from 'react'
import Menu, { IFSubMenu } from './config'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Detail from '../views/detail'
// import Dashboard from '../views/dashboard'
import Test from '../views/test'
import NormalButoon from '../views/button/normal'
import InfoButoon from '../views/button/info'
import Login from '../views/login'
// import App from '../App'

const list: IFSubMenu[]  = Menu.menus
console.log(list)
// const Routes = (): JSX.Element => {
class Routes extends Component{

	render (): JSX.Element {
		return (
			<div>
				<Router>
					<Switch>
						{/* <Route exact path="/" render={() => <Redirect to="/dashboard" push />} />
						<Route path="/" component={App} /> */}
						<Route path="/login" component={Login} />

						{/* <Route path="/" render={() => <Redirect to="/dashboard" push />} /> */}
						{/* <Route path="/" component={App}> */}
						<Route path="/">
							<Route exact path="/button/normal" component={NormalButoon}/>
							<Route exact path="/button/info" component={InfoButoon}/>
							<Route exact path="/detail" component={Detail}/>
							<Route exact path="/test" component={Test}/>
						</Route>
						{/* <Route exact path="/" component={Dashboard} /> */}
						{/* <Route path="/login" component={Login} /> */}
						{/* <Route exact path="/button/normal" component={NormalButoon}/>
						<Route exact path="/button/info" component={InfoButoon}/>
						<Route exact path="/detail" component={Detail}/>
						<Route exact path="/test" component={Test}/> */}
						{/* <Route key={index} exact path={item.path} component={item.component}/> */}
						{/* <>
							<Route path="/">
								{list.map((item: IFSubMenu) => {
									{item.children ? renderSubRoute(item) : renderChildRoute(item)}
									// {item.children! ? renderChildRoute(item) : renderSubRoute(item)}
								})}
							</Route>
						</> */}
					</Switch>
				</Router>
			</div>
		)
	}
}


const renderChildRoute = (item: IFSubMenu) => {
	console.log(item.path)
	// console.log(item.component)
	return (
		// <Route key={item.path} exact path={item.path} render={() => <item.component />} />
		<Route key={item.path} exact path={item.path} component={Test} />
	)
}

const renderSubRoute = (subItem: IFSubMenu) => {
	<>
		{subItem.children!.map((sub: IFSubMenu) => {	
			return (
				renderChildRoute(sub)
			)
		})}
	</>
}

export default Routes
