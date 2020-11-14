import React from 'react'
import { Layout } from 'antd'
import Logo from './Logo'
import SideBarItem from './Sidebaritem'

// const { Sider } = Layout

const Sidebar = (): JSX.Element => {
	return (
		<Layout>
			{/* <Sider
				trigger={null}
				breakpoint="lg"
				style={{ overflowY: 'auto' }}
				className="sider-custom"
			>
			</Sider> */}
			<Logo />
			<SideBarItem />
		</Layout>
	)
}

export default Sidebar