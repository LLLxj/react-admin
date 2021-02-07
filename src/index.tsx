import React from 'react'
import ReactDOM from 'react-dom'
import { AlitaProvider } from 'redux-alita'
import { HashRouter } from 'react-router-dom'
import './index.css'
import store from './store'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
	<AlitaProvider>
		<App />
	</AlitaProvider>,
	document.getElementById('root')
)
serviceWorker.unregister()
