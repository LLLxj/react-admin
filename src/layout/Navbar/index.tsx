import React from 'react'
// import { Layout } from 'antd'
import Collapsed from './collapsed'
// import Breadcrumbs from './breadcrumb'
import Rightmenu from './rightmenu'


// const Navbar = (props: HeaderCustomProps): JSX.Element => {
const Navbar = (): JSX.Element => {
	return (
		<div className="nav_navbar">
			{/* <Collapsed toggle={props.toggle} collapsed={props.collapsed} /> */}
			<Collapsed />
			{/* <Breadcrumbs /> */}
			<Rightmenu />
		</div>
	)
}
export default Navbar