import React from 'react'
import { Menu } from 'antd'
import MenusList, { IFSubMenu, MenuBase } from '../../../routes/config'
import { Link, HashRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeRouteCreater } from '../../../redux/Routes'
import {
	HomeOutlined,
} from '@ant-design/icons'
import { ReduxProps } from '../../../redux'


interface Props {
	collapse: boolean,
	routes: string[],
	handleChangeRoute: (value: string[]) => void
}


class SideBarItem extends React.Component<Props>{

	constructor(props: Props) {
		super(props)
	}

	handleMenuClick = (item: any) => {
		const obj: string[] = item.keyPath
		this.props.handleChangeRoute(obj)
	}

	// render (): JSX.Element {
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

const mapStateToProps = (state: ReduxProps) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(SideBarItem)
// export default SideBarItem
