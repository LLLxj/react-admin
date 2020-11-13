import React from 'react'
import { Layout } from 'antd'
import Logo from './Logo'
import SideBarItem from './Sidebaritem'
// const { Sider } = Layout

// const Sidebar = (props: HeaderCustomProps): JSX.Element => {
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
			{/* <Logo collapsed={props.collapsed}/> */}
			<Logo />
			{/* <SideBarItem collapsed={props.collapsed}/> */}
			<SideBarItem />
		</Layout>
	)
}

// class Sidebar extends Components {
// 	render(): JSX.Element {
// 		return (
// 			<Layout>
// 				<Logo />
// 				<SideBarItem />
// 			</Layout>
// 		)
// 	}
// }

export default Sidebar