import React from 'react'
import { Provider } from 'react-redux'
import './styles/App.less'
import store from './redux'
import { connect } from 'react-redux'
import { ReduxProps } from './redux'
import Index from './views/index'


interface Props {
	token: string
}

class App extends React.Component<Props>{
	constructor(props: Props) {
		super(props)
	}

	render (): JSX.Element {
		return (
			<Provider store={store}>
				<Index />
			</Provider>
		)
		// if (this.props.token === '') {
		// 	return (
		// 		<Provider store={store}>
		// 			{/* <Login /> */}
		// 			<Routes />
		// 		</Provider>
		// 	)
		// }
		// return (
		// 	<Provider store={store}>
		// 		<div className="App">
		// 			<Layout>
		// 				<Layout className="app_layout">
		// 					<LayoutContainer />
		// 				</Layout>
		// 			</Layout>
	
		// 		</div>
		// 	</Provider>
		// )
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


export default connect(mapStateToProps)(App)
// export default App
