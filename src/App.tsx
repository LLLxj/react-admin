import React from 'react'
import '@/styles/App.less'
import { connect } from 'react-redux'
import { ReduxProps } from './store'
import Index from '@/views/index'
interface Props {
	token: string
}

class App extends React.Component<Props>{
	constructor(props: Props) {
		super(props)
	}

	render (): JSX.Element {
		return (
			<Index />
		)
	}
}
const mapStateToProps = (state: ReduxProps) => {
	if (!state.Users) {
		return {
			token: ''
		}
	}
	return {
		token: state.Users.token
	}
}
export default connect(mapStateToProps)(App)
