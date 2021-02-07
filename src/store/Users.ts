interface RouteState {
	token: string,
}

export const userTokenCreator = (data: string): Action => {
	return { type: 'USER_TOKEN', token: data }
}

const initState = {
	token: ''
}
interface Action {
	type: string,
	token: string
}

const reducer = (state: RouteState = initState, action: Action): any => {
	switch (action.type) {
	case 'USER_TOKEN':
		return { ...state, token: action.token }
	default:
		return state
	}
}

export default {initState, reducer}