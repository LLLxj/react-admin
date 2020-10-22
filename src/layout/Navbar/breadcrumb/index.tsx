import React from 'react'
import { Breadcrumb } from 'antd'

class Breadcrumbs extends React.Component{
	render() {
		return (
			<Breadcrumb>
				<Breadcrumb.Item>home</Breadcrumb.Item>
				<Breadcrumb.Item>
				Application Center
				</Breadcrumb.Item>
				<Breadcrumb.Item>
				Application List
				</Breadcrumb.Item>
				<Breadcrumb.Item>Application Center</Breadcrumb.Item>
			</Breadcrumb>
		)
	}
}

export default Breadcrumbs