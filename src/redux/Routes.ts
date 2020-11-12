interface RouteState {
	routes: string[]
}

interface RouteReturn {
	type: string,
	routes: string[]
}


export const changeRouteCreater = (): any => {
	return { type: 'CHANGE_ROUTE', routes: ['/'] }
}

const initState = {
	routes: ['/']
}

interface Action {
	type: string,
	routes:  string[]
}

const reducer = (state: RouteState = initState, action: Action): any => {
	console.log('获取值')
	console.log(state.routes)
	// if (action) {
	// 	return state.routes
	// }
	switch (action.type) {
	case 'CHANGE_ROUTE':
		return { ...state, routes: state.routes }
	default:
		return state
	}
}

export default {initState, reducer}
