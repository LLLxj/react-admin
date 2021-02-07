import React, { Component } from 'react'
import Routes from '@/router'
console.log('-----')
console.log(Routes)
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