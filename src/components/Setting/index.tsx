import React, { useState } from 'react'
import { SettingOutlined } from '@ant-design/icons'
import { Drawer } from 'antd'
import classNames from 'classnames'
import SidebarLogoSetting from './SidebarLogoSetting'

const GlobleSetting = (): JSX.Element =>  {
	const [visible, setVisible] = useState<boolean>(false)

	// const showDrawer = () => {
	// 	setVisible(true)
	// }
	const onClose = () => {
		setVisible(false)
	}

	const changeDrawer = () => {
		setVisible(!visible)
	}
	
	return (
		<>
			<div className={classNames('global_setting', { 'collapse': visible })}>
				<div className={classNames('blank_wrap', { 'collapse': visible})}>
					<div className='setting_wrap'>
						{/* <CloseOutlined className="icon-size" onClick = {changeDrawer} /> */}
						<SettingOutlined className="icon-size" onClick = {changeDrawer} />
					</div>
				</div>
			</div>
			<Drawer
				title="系统布局设置"
				placement="right"
				closable={false}
				onClose={onClose}
				visible={visible}
			>
				<div className="setting_content_wrap">
					<SidebarLogoSetting />
				</div>
				
			</Drawer>
		</>
	)
}

export default GlobleSetting