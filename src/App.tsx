import React from 'react'
import { Provider } from 'react-redux'
import './styles/App.less'
import { Layout } from 'antd'
import LayoutContainer from './layout/index'
import store from './redux'

const App: React.FC = () => {
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

export default App
