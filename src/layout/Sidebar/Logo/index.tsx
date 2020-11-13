import React, { Component } from 'react'
import LongLogo from '../../../assets/img/menu.png'
import ShortLogo from '../../../assets/img/menu_short.png'
import { connect } from 'react-redux'
import { ReduxProps } from '../../../redux'

const mapStateToProps = (state: ReduxProps) => {
	return {
		collapse: state.Sidebar.collapse,
	}
}

interface Props {
	collapse: boolean
}
class Logo extends Component<Props>{
	render () {
		return (
			<div className="logo">
				<img className="logo-src" src={!this.props.collapse ? LongLogo : ShortLogo} alt=""/>
			</div>
		)
	}
}

export default connect(mapStateToProps)(Logo)
