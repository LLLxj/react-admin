import React, { Component } from 'react'
import Routes from './../../routes'

class Content extends Component{

	render(): JSX.Element {
		return (
			<div className="content-wrap">
				<Routes />
			</div>
		)
	}
}


export default Content