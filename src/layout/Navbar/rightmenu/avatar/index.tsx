import React from 'react'
import AvatarSrc from './../../../../assets/img/avatar.gif'
import { Menu, Dropdown } from 'antd'

class Avatar extends React.Component{
	render(): JSX.Element {
		const menu = (
			<Menu>
				<Menu.Item>
					第一个菜单项
				</Menu.Item>
				<Menu.Item>
					第二个菜单项
				</Menu.Item>
				<Menu.Item>
					第三个菜单项
				</Menu.Item>
			</Menu>
		)

		return (
			<div className="avatar-container">
				<Dropdown overlay={menu}>
					<img className="avatar-src" src={AvatarSrc} alt=""/>
				</Dropdown>
			</div>
		)
	}
}

export default Avatar