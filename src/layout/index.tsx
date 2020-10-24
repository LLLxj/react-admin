import React from 'react'
// import { Layout } from 'antd'
import '../styles/layout/index.less'
import NavBar from './Navbar'
import SideBar from './Sidebar'
import Content from './Content'

const LayoutContainer = (): JSX.Element => {
	return (
		<div className="app-wrapper">
			<div className="app_sidebar">
				<SideBar />
			</div>
			<div className="app_right">
				<NavBar />
				<Content />
			</div>
		</div>
	)
}

export default LayoutContainer