import React, { Component } from 'react'
import '@/styles/layout/index.less'
import {connect} from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import NavBar from './Navbar'
import SideBar from './Sidebar'
// import Content from './Content'
import classNames from 'classnames'
import { ReduxProps } from '../store'
import GlobleSetting from '../components/Setting'
import { MenuBase } from '@/router/config'

interface Props {
	collapse: boolean
  routes?: MenuBase[]
}

const mapStateToProps = (state: ReduxProps) => {
	return {
		collapse: state.Sidebar.collapse
	}
}
class LayoutContainer extends React.Component<Props> {

	render (): JSX.Element {
		let content
		if (this.props.routes) {
			content = (
				this.props.routes.map((route: any, i: number) => (
					<RouteWithSubRoutes key={i} {...route} />
				))
			)
		}

		return (
			<div className="app-wrapper">
				<div className={classNames('app_sidebar', { 'unActive': this.props.collapse })}>
					<SideBar />
				</div>
				<div className="app_right">
					<NavBar />
					<div className="content-wrap">
						<Switch>
							{ content }
						</Switch>
					</div>
				</div>
				<GlobleSetting />
			</div>
		)
	}
}

function RouteWithSubRoutes(route: any) {
	return (
		<Route
			path={route.path}
			render={props => (
				<route.component {...props} />
			)}
		/>
	)
}



export default connect(mapStateToProps)(LayoutContainer)
// export default LayoutContainer