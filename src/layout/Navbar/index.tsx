import React from 'react'
// import { Layout } from 'antd'
import Collapsed from './collapsed'
import Breadcrumbs from './breadcrumb'
import Rightmenu from './rightmenu'

const Navbar = (): JSX.Element => {
	return (
		<div className="nav_navbar">
			<Collapsed />
			<Breadcrumbs />
			<Rightmenu />
		</div>
	)
}

export default Navbar