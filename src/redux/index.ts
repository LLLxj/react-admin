import { createStore, combineReducers } from 'redux'
import Sidebar from './Sidebar'
import Route from './Routes'
import GlobalSetting from './GlobalSetting'

const reducers = {
	Sidebar: Sidebar.reducer,
	Route: Route.reducer,
	GlobalSetting: GlobalSetting.reducer
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
	}
}

// const initState = {
// 	Sidebar: Sidebar.initState,
// 	Route: Route.initState,
// }


// const rootReducers = combineReducers({seleteRoute})
// export const store = createStore(rootReducers)

// const store = createStore(seleteRoute)
// export default store

const store = createStore(combineReducers(reducers))

export default store