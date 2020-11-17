interface RouteState {
	routes: string[]
}

export const changeRouteCreater = (data: string[]): Action => {
// export const changeRouteCreater = (): any => {
	return { type: 'CHANGE_ROUTE', routes: data }
}

const initState = {
	routes: ['/']
}

interface Action {
	type: string,
	routes: string[]
}

const reducer = (state: RouteState = initState, action: Action): RouteState => {
	switch (action.type) {
	case 'CHANGE_ROUTE':
		// return { ...state, routes: action.routes }
		return { routes: action.routes }
	default:
		return state
	}
}

export default {initState, reducer}
