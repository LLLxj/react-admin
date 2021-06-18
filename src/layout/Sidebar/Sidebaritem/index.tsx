import React from 'react'
import { Menu } from 'antd'
import MenusList, { IFSubMenu, MenuBase } from '@/router/config'
import { Link, HashRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeRouteCreater } from '@/store/Routes'
import { HomeOutlined } from '@ant-design/icons'
import { ReduxProps } from '@/store'
import classNames from 'classnames'
import { hasOneShowingChildren } from '@/router/filter'

interface Props {
	collapse: boolean;
	routes: string[];
	sidebarLogoShow: boolean;
	handleChangeRoute: (value: string[]) => void;
}

interface InputItemProps {
	[index: string]: any
}

const routes = hasOneShowingChildren(MenusList.menus)

class SideBarItem extends React.Component<Props>{
	constructor(props: Props) {
		super(props)
	}

	handleMenuClick = (item: InputItemProps) => {
		const obj: string[] = item.keyPath
		this.props.handleChangeRoute(obj)
	}

	render (): JSX.Element {
		return (
			<div className={classNames('sidebar_wrap', { 'sidebarLogoShow': !this.props.sidebarLogoShow })}>
				<HashRouter>
					{/* {MenusList.menus.map((item: IFSubMenu, index: number) => ( */}
					{routes.map((item: IFSubMenu, index: number) => (
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
								{ renderMultiRoute(item) }
							</>
						</Menu>
					))}
				</HashRouter>
			</div>
		)
	}

}

const renderMultiRoute = (item: IFSubMenu) => { // 渲染多层树形
	if (item.routes) {
		return renderSubMenu(item)
	} else {
		return renderMenuItem(item)
	}
}

const renderRoute = (item: IFSubMenu) => { // 渲染子节点
	if (item.routes) {
		return item.routes.map((sub: MenuBase) => {
			return (
				renderMenuItem(sub)
			)
		})
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
				{ renderRoute(subItem) }
			</Menu.SubMenu>	
		</>
	)
}

const mapStateToProps = (state: ReduxProps) => {
	return {
		collapse: state.Sidebar.collapse,
		routes: state.Route.routes,
		sidebarLogoShow: state.GlobalSetting.sidebarLogoShow
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
