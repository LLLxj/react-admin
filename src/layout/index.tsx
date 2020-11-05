import React, { useState } from 'react'
// import { Layout } from 'antd'
import '../styles/layout/index.less'
// import { withRouter, RouteComponentProps } from 'react-router-dom'
import NavBar from './Navbar'
import SideBar from './Sidebar'
import Content from './Content'
import classNames from 'classnames'
// import { ThemeProvider } from '../utils/context'

const LayoutContainer = (): JSX.Element => {

	const [collapsed, setCollapsed] = useState<boolean>(false)

	const toggle = () => {
		setCollapsed(!collapsed)
	}

	return (
		<div className="app-wrapper">

			{/* <ThemeProvider value={{collapsedStatus: boolean}}>
				<div className="app_sidebar">
					<SideBar />
				</div>
			</ThemeProvider> */}

			<div className={classNames('app_sidebar', { 'unActive': collapsed })}>
				<SideBar collapsed={collapsed}/>
			</div>
			
			<div className="app_right">
				<NavBar toggle={toggle} collapsed={collapsed}/>
				{/* <NavBar /> */}
				<Content />
			</div>
		</div>
	)
}

export default LayoutContainer