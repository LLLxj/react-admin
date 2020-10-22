import React from 'react'
import { Button } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

class Collapsed extends React.Component{
	state = {
		collapsed: false
	}

	toggleCollapsed = () => {
		this.setState({
			collapsed: !this.state.collapsed
		})
	}

	render() {
		return (
			<Button type="primary" size="small" onClick={this.toggleCollapsed} className="collapsed-btn">
				{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
			</Button>
		)
	}
}

export default Collapsed