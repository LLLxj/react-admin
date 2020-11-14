import React from 'react'
import { Switch } from 'antd'
import { ReduxProps } from '../../../redux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sidebarLogoSettingCreator } from '../../../redux/GlobalSetting'

interface Props {
	sidebarLogoShow: boolean,
	handleSettingSidebarLogo: () => void
}

class SidebarLogoSetting extends React.Component<Props>{

	constructor(props: Props){
		super(props)
	}

	change = () => {
		this.props.handleSettingSidebarLogo()
	}

	render (): JSX.Element {
		return (
			<div className='setting_row'>
				<div className='setting_title'>侧边栏logo</div>
				<div className='setting_value'>
					<Switch defaultChecked = {this.props.sidebarLogoShow} onChange={this.change} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state: ReduxProps) => {
	return {
		sidebarLogoShow: state.GlobalSetting.sidebarLogoShow
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		// 所有处理事件的方法都以handleXXX命名
		handleSettingSidebarLogo: bindActionCreators(sidebarLogoSettingCreator, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarLogoSetting)
// export default SidebarLogoSetting