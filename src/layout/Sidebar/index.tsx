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
		<Layout>
			{/* <Sider
				trigger={null}
				breakpoint="lg"
				style={{ overflowY: 'auto' }}
				className="sider-custom"
			>
			</Sider> */}
			<Logo collapsed={props.collapsed}/>
			<SideBarItem collapsed={props.collapsed}/>
		</Layout>
	)
}

export default Sidebar