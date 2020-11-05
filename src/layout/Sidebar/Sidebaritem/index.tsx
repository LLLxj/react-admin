/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React , { useState }from 'react'
import { Menu } from 'antd'
import MenusList, { IFSubMenu, MenuBase } from '../../../routes/config'
import { Link, HashRouter } from 'react-router-dom'
// import { ThemeConsumer } from '../../../utils/context'

type HeaderCustomProps = {
	collapsed: boolean
}


// class SideBarItem extends React.Component{
const SideBarItem = (props: HeaderCustomProps): JSX.Element => {
	const [selectedKeys, setSelectedKeys] = useState<[]>([])

	const handleMenuClick = (item: any): void => {
		console.log(item)
		setSelectedKeys(item.keyPath)
	}

	return (
		<div className="side-wrapper">
			<HashRouter>
				{MenusList.menus.map((item: IFSubMenu, index: number) => (
					<Menu 
						defaultSelectedKeys = {['/']}
						selectedKeys = {selectedKeys}
						onClick = {handleMenuClick}
						inlineCollapsed={props.collapsed}
						mode = "inline"
						theme = "dark" 
						key = {index}
					>
						<>
							{item.children! ? renderSubMenu(item) : renderMenuItem(item)}
						</>
					</Menu>
				))}
			</HashRouter>
		</div>
	)
}

const renderMenuItem = (menuItem: MenuBase) => {
	return (
		<Menu.Item key={menuItem.path}>
			<Link to={menuItem.path} replace>
				{menuItem.title}
			</Link>
		</Menu.Item>
	)
}

const renderSubMenu = (subItem: IFSubMenu) => {
	return (
		<>
			<Menu.SubMenu
				key={subItem.path}
				title={
					<span>
						<span className="nav-text">{subItem.title}</span>
					</span>
				}
			>
				{subItem.children!.map((sub: MenuBase) => {
					return (
						renderMenuItem(sub)
					)
				})}
			</Menu.SubMenu>	
		</>
	)
}

export default SideBarItem

// import React from 'react'
// import {
// 	AppstoreOutlined,
// 	MenuUnfoldOutlined,
// 	MenuFoldOutlined,
// 	PieChartOutlined,
// 	DesktopOutlined,
// 	ContainerOutlined,
// 	MailOutlined
// } from '@ant-design/icons'

// const { SubMenu } = Menu

// class SideBarItem extends React.Component {
// 	state = {
// 		collapsed: false,
// 	}

// 	toggleCollapsed = (): void => {
// 		this.setState({
// 			collapsed: !this.state.collapsed,
// 		})
// 	}

// 	render(): JSX.Element {
// 		return (
// 			<div style={{ width: 256 }}>
// 				<Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
// 					{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
// 				</Button>
// 				<Menu
// 					defaultSelectedKeys={['1']}
// 					defaultOpenKeys={['sub1']}
// 					mode="inline"
// 					theme="dark"
// 					inlineCollapsed={this.state.collapsed}
// 				>
// 					<Menu.Item key="1" icon={<PieChartOutlined />}>
// 						Option 1
// 					</Menu.Item>
// 					<Menu.Item key="2" icon={<DesktopOutlined />}>
// 						Option 2
// 					</Menu.Item>
// 					<Menu.Item key="3" icon={<ContainerOutlined />}>
// 						Option 3
// 					</Menu.Item>
// 					<SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
// 						<Menu.Item key="5">Option 5</Menu.Item>
// 						<Menu.Item key="6">Option 6</Menu.Item>
// 						<Menu.Item key="7">Option 7</Menu.Item>
// 						<Menu.Item key="8">Option 8</Menu.Item>
// 					</SubMenu>
// 					<SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
// 						<Menu.Item key="9">Option 9</Menu.Item>
// 						<Menu.Item key="10">Option 10</Menu.Item>
// 						<SubMenu key="sub3" title="Submenu">
// 							<Menu.Item key="11">Option 11</Menu.Item>
// 							<Menu.Item key="12">Option 12</Menu.Item>
// 						</SubMenu>
// 					</SubMenu>
// 				</Menu>
// 			</div>
// 		)
// 	}
// }

// export default SideBarItem