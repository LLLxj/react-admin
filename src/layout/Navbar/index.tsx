import React from 'react'
// import { Layout } from 'antd'
import Collapsed from './collapsed'
import Breadcrumbs from './breadcrumb'
import Rightmenu from './rightmenu'

type HeaderCustomProps = {
    toggle: () => void;
	collapsed: boolean
}

const Navbar = (props: HeaderCustomProps): JSX.Element => {
	return (
		<div className="nav_navbar">
			<Collapsed toggle={props.toggle} collapsed={props.collapsed}/>
			<Breadcrumbs />
			<Rightmenu />
		</div>
	)
}
export default Navbar