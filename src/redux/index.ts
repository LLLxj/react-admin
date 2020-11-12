import { createStore, combineReducers } from 'redux'
import Sidebar from './Sidebar'
import Route from './Routes'

const reducers = {
	Sidebar: Sidebar.reducer,
	Route: Route.reducer
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