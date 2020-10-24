import React from 'react'
import './styles/App.less'
import { Layout } from 'antd'
import LayoutContainer from './layout/index'

const App = (): JSX.Element => {
	return (
		<div className="App">
			<Layout>
				<Layout className="app_layout">
					<LayoutContainer />
				</Layout>
			</Layout>
		</div>
	)
}

export default App
