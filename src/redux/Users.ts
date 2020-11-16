export const userTokenCreator = (data: string): Action => {
	return { type: 'USER_TOKEN', token: data }
}

const initState = {
	token: ''
}

interface RouteState {
	token: string | '',
}

interface Action {
	type: string,
	token: string | '',
}

const reducer = (state: RouteState = initState, action: Action): RouteState => {
	switch (action.type) {
	case 'USER_TOKEN':
		return { token: action.token }
	default:
		return state
	}
}

export default {initState, reducer}