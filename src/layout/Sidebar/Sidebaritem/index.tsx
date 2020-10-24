/* eslint-disable @typescript-eslint/no-non-null-assertion */
// import React, { useState, useEffect } from 'react'
import React from 'react'
import { Menu } from 'antd'
// import { Layout } from 'antd'

import MenusList, { IFSubMenu, MenuBase } from '../../../routes/config'
// import { AppstoreOutlined, PieChartOutlined, DesktopOutlined, ContainerOutlined, MailOutlined } from '@ant-design/icons'
// import { PieChartOutlined } from '@ant-design/icons'
// import MenusList from '../../../routes/config'
// import { Link } from 'react-router-dom'
// import Item from 'antd/lib/list/Item'

// const { SubMenu } = Menu




class SideBarItem extends React.Component{

	state = {
		collapsed: false
	}

	toggleCollapsed = (): void => {
		this.setState({
			collapsed: !this.state.collapsed
		})
	}

	handleMenuClick = (item: IFSubMenu): void => {
		console.log(item)
	}

	render(): JSX.Element {
		return (
			<div className="side-wrapper">
				{MenusList.menus.map((item: IFSubMenu, index: number) => (
					<Menu 
						defaultSelectedKeys={['1']} 
						defaultOpenKeys={['sub']} 
						mode="inline"
						theme="dark" 
						key={index}
					>
						<>
							{item.subs! ? renderSubMenu(item) : renderMenuItem(item)}
						</>
					</Menu>
				))}
			</div>
		)
	}
}

const renderMenuItem = (menuItem: MenuBase) => {
	return (
		<Menu.Item key={menuItem.key}>
			{/* <Link to={(menuItem.route || menuItem.key) + (menuItem.query || '')}> */}
			{/* <Link to={menuItem.key}> */}
			{/* {item.icon && <Icon type={item.icon} />} */}
			<span className="nav-text">{menuItem.title}</span>
			{/* </Link> */}
		</Menu.Item>
	)
	
}

const renderSubMenu = (subItem: IFSubMenu) => {

	// const subs: IFSubMenu[] = subItem.subs
	// const aaa: Array<IFSubMenu> = subItem.subs
	return (
		<>
			<Menu.SubMenu
				key={subItem.key}
				title={
					<span>
						{/* {item.icon && <Icon type={item.icon} />} */}
						<span className="nav-text">{subItem.title}</span>
					</span>
				}
			>
				{subItem.subs!.map((sub: MenuBase) => {
					return (
						renderMenuItem(sub)
					)
				})}
			</Menu.SubMenu>	
		</>
	)
}

export default SideBarItem