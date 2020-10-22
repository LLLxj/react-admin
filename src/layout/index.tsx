import React from 'react'
// import { Layout } from 'antd'
import '../styles/layout/index.less'
import NavBar from './Navbar'
import SideBar from './Sidebar'
import Content from './Content'

function LayoutContainer() {
	return (
		<div className="app-wrapper">
			<div className="app_sidebar">
				<SideBar></SideBar>
			</div>
			<div className="app_right">
				<NavBar></NavBar>
				<Content></Content>
			</div>
		</div>
	)
}

export default LayoutContainer