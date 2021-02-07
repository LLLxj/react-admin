export const sidebarCollapseCreator = (): ReturnProps => {
	return { type: 'SIDEBAR_COLLAPSE' }
}

interface ReturnProps {
	type: string
}

const initState = {
	collapse: false, // 是否折叠
}

interface RouteState {
	collapse: boolean,
}

interface Action {
	type: string,
	collapse:  boolean,
}

const reducer = (state: RouteState = initState, action: Action): RouteState => {
	switch (action.type) {
	case 'SIDEBAR_COLLAPSE':
		// return { ...state, collapse: !state.collapse }
		return { collapse: !state.collapse }
	default:
		return state
	}
}

export default {initState, reducer}