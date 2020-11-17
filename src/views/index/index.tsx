import React from 'react'
import { Provider } from 'react-redux'
import '../../styles/App.less'
import { Layout } from 'antd'
import LayoutContainer from '../../layout/index'
import store from '../../redux'
import { connect } from 'react-redux'
import { ReduxProps } from '../../redux'
import Routes from '../../routes'

interface Props {
	token: string
}

class Index extends React.Component<Props>{

	constructor(props: Props) {
		super(props)
	}

	render (): JSX.Element {

		// if (this.props.token === '') {
		// 	return (
		// 		<Provider store={store}>
		// 			<Routes />
		// 		</Provider>
		// 	)
		// }
		return (
			<Provider store={store}>
				<div className="App">
					<Layout>
						<Layout className="app_layout">
							<LayoutContainer />
						</Layout>
					</Layout>
	
				</div>
			</Provider>
		)
	}
}

const mapStateToProps = (state: ReduxProps) => {
	if (!state.Users) {
		return {
			token: ''
		}
	}
	return {
		token: state.Users.token
	}
}


export default connect(mapStateToProps)(Index)
