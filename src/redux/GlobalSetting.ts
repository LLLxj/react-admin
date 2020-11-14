export const sidebarLogoSettingCreator = (): ReturnProps => {
	return { type: 'SIDEBAR_LOGO_SETTING' }
}

interface ReturnProps {
	type: string
}

const initState = {
	sidebarLogoShow: true // 是否展示
}

interface RouteState {
	sidebarLogoShow: boolean,
}

interface Action {
	type: string,
	sidebarLogoShow:  boolean,
}

const reducer = (state: RouteState = initState, action: Action): RouteState => {
	switch (action.type) {
	case 'SIDEBAR_LOGO_SETTING':
		// return { ...state, collapse: !state.collapse }
		return { sidebarLogoShow: !state.sidebarLogoShow }
	default:
		return state
	}
}

export default {initState, reducer}