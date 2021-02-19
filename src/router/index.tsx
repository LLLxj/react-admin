import React, {Component} from 'react'
import MenuList from '@/router/config'
// import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
// import { filterRouter } from './filter'
// import PrivateRoute from '@/components/PrivateRoute'

const routes: any = MenuList.menus
class Routes extends Component{

	render (): JSX.Element {
		return (
			<>
				<Router>
					{routes.map((route: any, i: number) => (
						<RouteWithSubRoutes key={i} {...route} />
					))}
				</Router>
			</>
		)
	}
}

function RouteWithSubRoutes(route: any) {
	return (
		<Route
			path={route.path}
			render={props => (
				<route.component {...props} routes={route.routes} />
			)}
		/>
	)
}

export default Routes
