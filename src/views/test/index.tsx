import { Switch } from 'antd'
import React from 'react'

class Test extends React.Component {
	state = {
		collapsed: false,
	}

	toggleCollapsed = (): void => {
		this.setState({
			collapsed: !this.state.collapsed,
		})
	}

	change = (): void => {
		console.log(111)
	}

	render(): JSX.Element {
		return (
			<div style={{ width: 256 }}>
				<Switch defaultChecked onChange={this.change} />
			</div>
		)
	}
}

export default Test