import React from 'react'
import Avatar from './avatar'
import DropDownList from './dropdown'
import Screen from './screen'

class Rightmenu extends React.Component{
	render(): JSX.Element {
		return (
			<div className="right_nemu">
				<DropDownList />
				<Avatar />
				<Screen />
			</div>
		)
	}
}

export default Rightmenu