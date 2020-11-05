import React from 'react'
import LongLogo from '../../../assets/img/menu.png'
import ShortLogo from '../../../assets/img/menu_short.png'

type HeaderCustomProps = {
	collapsed: boolean
}

const Logo = (props: HeaderCustomProps): JSX.Element =>  {
	return (
		<div className="logo">
			<img className="logo-src" src={!props.collapsed ? LongLogo : ShortLogo} alt=""/>
		</div>
	)
}

export default Logo