import React from 'react'
import screenfull from 'screenfull'
import { ArrowsAltOutlined } from '@ant-design/icons'

class Screen extends React.Component{

	screenFull = (): void => {
		if (screenfull.isEnabled) {
			screenfull.toggle()
		}
	}

	render(): JSX.Element {
		return (
			<div className="screen-full">
				<ArrowsAltOutlined onClick={this.screenFull} />
			</div>
		)
	}
}

export default Screen