import React from 'react'
import { Button } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

type HeaderCustomProps = {
	toggle: () => void;
	collapsed: boolean
}

const Collapsed = (props: HeaderCustomProps): JSX.Element => {
	return (
		<Button type="primary" size="small" onClick={props.toggle} className="collapsed-btn">
			{React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
			{/* {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)} */}
		</Button>
	)
}
export default Collapsed