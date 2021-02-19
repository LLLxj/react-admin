import React from 'react'
import './styles/App.less'
import Routes from '@/router'
// import Layout from '@/layout'
class App extends React.Component{

	render (): JSX.Element {
		return (
			<Routes />
		)
	}
}

export default App
