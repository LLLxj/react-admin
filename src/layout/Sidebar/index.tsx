import React from 'react'
import { Layout } from 'antd'
import Logo from './Logo'
import SideBarItem from './Sidebaritem'
// const { Sider } = Layout

type HeaderCustomProps = {
	collapsed: boolean
}

const Sidebar = (props: HeaderCustomProps): JSX.Element => {
	return (
		<Layout className="app_sidebar">
			{/* <Sider
				trigger={null}
				breakpoint="lg"
				style={{ overflowY: 'auto' }}
				className="sider-custom"
			>
			</Sider> */}
			<Logo />
			<SideBarItem collapsed={props.collapsed}/>
		</Layout>
	)
}

export default Sidebar