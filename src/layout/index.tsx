import React, { Component } from 'react'
// import { Layout } from 'antd'
import '../styles/layout/index.less'
import {connect} from 'react-redux'
// import { withRouter, RouteComponentProps } from 'react-router-dom'
import NavBar from './Navbar'
import SideBar from './Sidebar'
import Content from './Content'
import classNames from 'classnames'

// import { ThemeProvider } from '../utils/context'

// const LayoutContainer = (): JSX.Element => {

// 	const [collapsed, setCollapsed] = useState<boolean>(false)

// 	const toggle = () => {
// 		setCollapsed(!collapsed)
// 	}

// 	return (
// 		<div className="app-wrapper">


// 			<div className={classNames('app_sidebar', { 'unActive': collapsed })}>
// 				<SideBar collapsed={collapsed}/>
// 			</div>

// 			<div className="app_right">
// 				<NavBar toggle={toggle} collapsed={collapsed} />
// 				<Content />
// 			</div>
// 		</div>
		
// 	)
// }

// const LayoutContainer = (): JSX.Element => {

// 	const [collapsed, setCollapsed] = useState<boolean>(false)

// 	const toggle = () => {
// 		setCollapsed(!collapsed)
// 	}

// 	return (
// 		<div className="app-wrapper">


// 			<div className={classNames('app_sidebar', { 'unActive': collapsed })}>
// 				<SideBar />
// 				{/* <SideBar collapsed={collapsed}/> */}
// 			</div>

// 			<div className="app_right">
// 				{/* <NavBar toggle={toggle} collapsed={collapsed} /> */}
// 				<NavBar />
// 				<Content />
// 			</div>
// 		</div>
		
// 	)
// }

interface Props {
	collapse: boolean
}

const mapStateToProps = (state: any) => {
	return {
		collapse: state.Sidebar.collapse
	}
}


class LayoutContainer extends Component<Props> {

	render (): JSX.Element {
		
		return (
			<div className="app-wrapper">
				<div className={classNames('app_sidebar', { 'unActive': this.props.collapse })}>
					<SideBar />
					{/* <SideBar collapsed={collapsed}/> */}
				</div>

				<div className="app_right">
					{/* <NavBar toggle={toggle} collapsed={collapsed} /> */}
					<NavBar />
					<Content />
				</div>
			</div>
		)
	}
}
export default connect(mapStateToProps)(LayoutContainer)