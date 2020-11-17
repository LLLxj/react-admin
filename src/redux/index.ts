import { createStore, combineReducers } from 'redux'
import Sidebar from './Sidebar'
import Route from './Routes'
import GlobalSetting from './GlobalSetting'
import Users from './Users'

const reducers = {
	Sidebar: Sidebar.reducer,
	Route: Route.reducer,
	GlobalSetting: GlobalSetting.reducer,
	Users: Users.reducer
}

export interface ReduxProps {
	Route: {
		routes: string[]
	},
	Sidebar: {
		collapse: boolean
	},
	GlobalSetting: {
		sidebarLogoShow: boolean
	},
	Users: {
		token: string
	}
}

const store = createStore(combineReducers(reducers))

export default store