import React from 'react'
import LongLogo from '../../../assets/img/menu.png'
const Logo = (): JSX.Element =>  {
	return (
		<div className="logo">
			<img className="logo-src" src={LongLogo} alt=""/>
		</div>
	)
}

export default Logo