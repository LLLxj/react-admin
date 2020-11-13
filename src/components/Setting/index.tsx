import React, { useState } from 'react'
import { SettingOutlined } from '@ant-design/icons'
import { Drawer } from 'antd'
import classNames from 'classnames'

const GlobleSetting = (): JSX.Element =>  {
	const [visible, setVisible] = useState<boolean>(false)

	const showDrawer = () => {
		setVisible(true)
	}
	const onClose = () => {
		setVisible(false)
	}

	const changeDrawer = () => {
		setVisible(!visible)
	}
	
	return (
		<>
			<div className={classNames('global_setting', { 'collapse': visible })}>
				<SettingOutlined className="icon-size" onClick = {changeDrawer} />
			</div>
			<Drawer
				title="Basic Drawer"
				placement="right"
				closable={false}
				onClose={onClose}
				visible={visible}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Drawer>
		</>
	)
}

export default GlobleSetting