export const sidebarCollapseCreator = (): any => {
	return { type: 'SIDEBAR_COLLAPSE' }
}

const initState = {
	collapse: false, // 是否折叠
}

interface RouteState {
	collapse: boolean,
}

interface Action {
	type: string,
	path:  string,
}

const reducer = (state: RouteState = initState, action: Action): RouteState => {
	switch (action.type) {
	case 'SIDEBAR_COLLAPSE':
		return { ...state, collapse: !state.collapse }
	default:
		return state
	}
}

export default {initState, reducer}