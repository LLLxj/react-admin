/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import { Menu } from 'antd'
import MenusList, { IFSubMenu, MenuBase } from '../../../routes/config'
import { Link, HashRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeRouteCreater } from '../../../redux/Routes'
import {
	HomeOutlined,
	// SettingFilled,
	// SmileOutlined,
	// SyncOutlined,
	// LoadingOutlined,
} from '@ant-design/icons'
// import Item from 'antd/lib/list/Item'
// import { ThemeConsumer } from '../../../utils/context'

const mapStateToProps = (state: any) => {
	console.log(state)
	console.log(state.Route.routes)
	return {
		collapse: state.Sidebar.collapse,
		routes: state.Route.routes
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		// 所有处理事件的方法都以handleXXX命名
		handleChangeRoute: bindActionCreators(changeRouteCreater, dispatch)
	}
}

interface Props {
	collapse: boolean,
	routes: string[],
	handleChangeRoute: () => any
}


class SideBarItem extends React.Component<Props>{

	constructor(props: Props) {
		super(props)
	}

	handleMenuClick = (item: any) => {
		console.log(1111)
		console.log(item)
		const obj: string[] = item.keyPath
		console.log(obj)
		this.props.handleChangeRoute()
	}

	render (): JSX.Element {
		return (
			<div className="side-wrapper">
				<HashRouter>
					{MenusList.menus.map((item: IFSubMenu, index: number) => (
						<Menu 
							defaultSelectedKeys = {['/']}
							selectedKeys = {this.props.routes}
							onClick = {this.handleMenuClick}
							inlineCollapsed={this.props.collapse}
							mode = "inline"
							theme = "dark" 
							key = {index}
						>
							<>
								{item.children! ? renderSubMenu(item) : renderMenuItem(item)}
							</>
						</Menu>
					))}
				</HashRouter>
			</div>
		)
	}

}

// const SideBarItem = (props: HeaderCustomProps): JSX.Element => {
// 	const [selectedKeys, setSelectedKeys] = useState<[]>([])

// 	const handleMenuClick = (item: any): void => {
// 		console.log(item)
// 		setSelectedKeys(item.keyPath)
// 	}

// 	return (
// 		<div className="side-wrapper">
// 			<HashRouter>
// 				{MenusList.menus.map((item: IFSubMenu, index: number) => (
// 					<Menu 
// 						defaultSelectedKeys = {['/']}
// 						selectedKeys = {selectedKeys}
// 						onClick = {handleMenuClick}
// 						inlineCollapsed={props.collapsed}
// 						mode = "inline"
// 						theme = "dark" 
// 						key = {index}
// 					>
// 						<>
// 							{item.children! ? renderSubMenu(item) : renderMenuItem(item)}
// 						</>
// 					</Menu>
// 				))}
// 			</HashRouter>
// 		</div>
// 	)
// }

const renderMenuItem = (menuItem: MenuBase) => {
	return (
		<Menu.Item key={menuItem.path} icon={<HomeOutlined />}>
			<Link to={menuItem.path} replace>
				{menuItem.title}
			</Link>
		</Menu.Item>
	)
}

const renderSubMenu = (subItem: IFSubMenu) => {
	return (
		<>
			<Menu.SubMenu
				key={subItem.path}
				icon={<HomeOutlined />}
				title={
					<span>
						<span className="nav-text">{subItem.title}</span>
					</span>
				}
			>
				{subItem.children!.map((sub: MenuBase) => {
					return (
						renderMenuItem(sub)
					)
				})}
			</Menu.SubMenu>	
		</>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarItem)
// export default SideBarItem
