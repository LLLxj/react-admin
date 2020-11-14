import React, { Component } from 'react'
import LongLogo from '../../../assets/img/menu.png'
import ShortLogo from '../../../assets/img/menu_short.png'
import { connect } from 'react-redux'
import { ReduxProps } from '../../../redux'
import classNames from 'classnames'

const mapStateToProps = (state: ReduxProps) => {
	return {
		collapse: state.Sidebar.collapse,
		sidebarLogoShow: state.GlobalSetting.sidebarLogoShow
	}
}

interface Props {
	collapse: boolean,
	sidebarLogoShow: boolean
}
class Logo extends Component<Props>{
	render () {
		return (
			<div className={classNames('logo', { 'showActive': !this.props.sidebarLogoShow})}>
				<img className="logo-src" src={!this.props.collapse ? LongLogo : ShortLogo} alt=""/>
			</div>
		)
	}
}

export default connect(mapStateToProps)(Logo)
