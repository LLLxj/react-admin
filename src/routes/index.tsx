import React, {Component} from 'react'
import Menu, { IFSubMenu } from './config'
import { HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
// import Home from '../views/home'
import Detail from '../views/detail'
import Dashboard from '../views/dashboard'
import Test from '../views/test'
import NormalButoon from '../views/button/normal'
import InfoButoon from '../views/button/info'
import Login from '../views/login'
import App from '../App'

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
						<Route path="/detail" component={Detail}/>

						{/* <Route path="/" render={() => <Redirect to="/dashboard" push />} /> */}
						{/* <Route path="/" component={App}> */}
						{/* <Route path="/">
							<Route exact path="/button/normal" component={NormalButoon}/>
							<Route exact path="/button/info" component={InfoButoon}/>
							<Route exact path="/detail" component={Detail}/>
							<Route exact path="/test" component={Test}/>
						</Route> */}


						{/* <Route exact path="/" component={Dashboard} /> */}
						{/* <Route path="/login" component={Login} /> */}
						{/* <Route exact path="/button/normal" component={NormalButoon}/>
						<Route exact path="/button/info" component={InfoButoon}/>
						<Route exact path="/detail" component={Detail}/>
						<Route exact path="/test" component={Test}/> */}
						{/* <>
							{list.map((item: IFSubMenu, index: number) => (
								// <Route key={index} exact path={item.path} component={item.component}/>
								<Route key={index} exact path={item.path} component={item.component}/>
							))}
						</> */}
					</Switch>
				</Router>
			</div>
		)
	}

	
}

export default Routes

