import React from 'react'
import Menu from './config'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Home from '../views/home'
import Detail from '../views/detail'

// class Routes extends React.Component{
// 	render() {
// 		return (
// 			<div>{Menu}</div>
// 		)
// 	}
// }
const Routes = (): JSX.Element => {
	const list = Menu
	console.log(list)
	return (
		<div>
			<HashRouter>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/detail" component={Detail}/>
				</Switch>
			</HashRouter>
		</div>
	)
}

export default Routes

