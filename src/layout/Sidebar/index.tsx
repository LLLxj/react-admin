import React from 'react'
import { Layout } from 'antd'
import Logo from './Logo'
import SideBarItem from './Sidebaritem'

function Sidebar() {
	return (
		<Layout className="app_sidebar">
			<Logo />
			<SideBarItem />
		</Layout>
	)
}

export default Sidebar