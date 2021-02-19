import React from 'react'
import ReactDOM from 'react-dom'
// import { AlitaProvider } from 'redux-alita'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import store from '@/store'
import * as serviceWorker from './serviceWorker'

// ReactDOM.render(
// 	<AlitaProvider>
// 		<App />
// 	</AlitaProvider>,
// 	document.getElementById('root')
// )
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
serviceWorker.unregister()
