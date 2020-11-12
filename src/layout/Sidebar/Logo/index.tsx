import React, { Component } from 'react'
import LongLogo from '../../../assets/img/menu.png'
import ShortLogo from '../../../assets/img/menu_short.png'
import { connect } from 'react-redux'

type HeaderCustomProps = {
	collapsed: boolean
}

const mapStateToProps = (state: any) => {
	return {
		collapse: state.Sidebar.collapse,
	}
}

interface Props {
	collapse: boolean
}
class Logo extends Component<Props>{
// const Logo = (props: HeaderCustomProps): JSX.Element =>  {
// const Logo = (): JSX.Element =>  {
	render () {
		return (
			<div className="logo">
				<img className="logo-src" src={!this.props.collapse ? LongLogo : ShortLogo} alt=""/>
				{/* <img className="logo-src" alt=""/> */}
			</div>
		)
	}
}

export default connect(mapStateToProps)(Logo)

// export default Logo