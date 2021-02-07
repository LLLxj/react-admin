import React from 'react'
import { Breadcrumb } from 'antd'
import {connect} from 'react-redux'
import { ReduxProps } from '@/store'

// const Breadcrumbs = (): JSX.Element => {
// 	return (
// 		<Breadcrumb>
// 			<Breadcrumb.Item>home</Breadcrumb.Item>
// 			<Breadcrumb.Item>
// 			Application Center
// 			</Breadcrumb.Item>
// 			<Breadcrumb.Item>
// 			Application List
// 			</Breadcrumb.Item>
// 			<Breadcrumb.Item>Application Center</Breadcrumb.Item>
// 		</Breadcrumb>
// 	)
// }

interface Props {
	routes: string[]
}
class Breadcrumbs extends React.Component<Props> {

	constructor(props: Props) {
		super(props)
		this.state = { 
			list: props.routes
		}
	}


	state = {
		list: this.props.routes
	}

	render () {

		return (
			<>
				{this.state.list}
				<Breadcrumb>
					{this.state.list.map((item: string, index: number) => (
						<Breadcrumb.Item key = {index}>{item}</Breadcrumb.Item>
					))}
					{/* <Breadcrumb.Item>home</Breadcrumb.Item>
					<Breadcrumb.Item>
					Application Center
					</Breadcrumb.Item>
					<Breadcrumb.Item>
					Application List
					</Breadcrumb.Item>
					<Breadcrumb.Item>Application Center</Breadcrumb.Item> */}
				</Breadcrumb>
			</>
		)
	}
}

const mapStateToProps = (state: ReduxProps) => {
	console.log(state.Route.routes)
	return {
		routes: state.Route.routes
	}
}

export default connect(mapStateToProps)(Breadcrumbs)
