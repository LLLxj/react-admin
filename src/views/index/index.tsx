import React from 'react'
import { Provider } from 'react-redux'
import '@/styles/App.less'
import { Layout } from 'antd'
import LayoutContainer from '@/layout/index'
import store from '@/store'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { userTokenCreator } from '../../redux/Users'
import { ReduxProps } from '@/store'

interface Props {
	token: string
	// handleUserToken: (value: string) => void
}

class Index extends React.Component<Props>{

	constructor(props: Props) {
		super(props)
	}
	render (): JSX.Element {

		// if (!this.props.token || this.props.token === '') {
		// 	return (
		// 		<Provider store={store}>
		// 			<Routes />
		// 		</Provider>
		// 	)
		// }
		return (
			<Provider store={store}>
				<div className="App">
					<Layout className="app_layout">
						<LayoutContainer />
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

// const mapStateToProps = (state: ReduxProps) => {
// 	if (!state.Users) {
// 		return {
// 			token: ''
// 		}
// 	}
// 	return {
// 		token: state.Users.token
// 	}
// }

// const mapDispatchToProps = (dispatch: any) => {
// 	return {
// 		// 所有处理事件的方法都以handleXXX命名
// 		handleUserToken: bindActionCreators(userTokenCreator, dispatch)
// 	}
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Index)
export default connect(mapStateToProps)(Index)
