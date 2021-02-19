import React, { Component } from 'react'
import MenuList from '@/router/config'
import {
	Switch, Route, HashRouter as Router
} from 'react-router-dom'
const routes = MenuList.menus

// const Content = (routes: any) => {
// 	<Switch>
// 		{routes.map((route: any, i: number) => (
// 			<RouteWithSubRoutes key={i} {...route} />
// 		))}
// 	</Switch>
// }

// function RouteWithSubRoutes(route: any) {
// 	return (
// 		<Route
// 			path={route.path}
// 			render={props => (
// 				<route.component {...props} routes={route.routes} />
// 			)}
// 		/>
// 	)
// }
class Content extends React.Component{

	render(): JSX.Element {
		return (
			<div className="content-wrap">
				{/* { this.props.children } */}
			</div>
			// <Router>
			// 	<Switch>
			// 		{routes.map((route, i) => (
			// 			<RouteWithSubRoutes key={i} {...route} />
			// 		))}
			// 	</Switch>
			// </Router>
			
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


export default Content