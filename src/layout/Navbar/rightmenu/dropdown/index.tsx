import React from 'react'
import { Menu, Dropdown } from 'antd'

class DropDownList extends React.Component{

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
			<div className="dropdown-btn">
				<Dropdown overlay={menu}>
					<div>下拉</div>
					{/* <Icon type="down" /> */}
				</Dropdown>
			</div>
		)
	}
}

export default DropDownList