import React, { Component } from 'react'
import '../styles/layout/index.less'
import {connect} from 'react-redux'
import NavBar from './Navbar'
import SideBar from './Sidebar'
import Content from './Content'
import classNames from 'classnames'
import { ReduxProps } from './../redux'
import GlobleSetting from '../components/Setting'

interface Props {
	collapse: boolean
}

const mapStateToProps = (state: ReduxProps) => {
	return {
		collapse: state.Sidebar.collapse
	}
}

class LayoutContainer extends Component<Props> {

	render (): JSX.Element {
		
		return (
			<div className="app-wrapper">
				<div className={classNames('app_sidebar', { 'unActive': this.props.collapse })}>
					<SideBar />
				</div>

				<div className="app_right">
					<NavBar />
					<Content />
				</div>
				{/* 全局设置 */}
				<GlobleSetting />
			</div>
		)
	}
}
export default connect(mapStateToProps)(LayoutContainer)