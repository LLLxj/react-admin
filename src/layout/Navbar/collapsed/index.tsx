/*
 * @author: lzj
 * @Date: 2020-10-21 16:10:48
 * @LastEditTime: 2021-03-16 15:39:59
 */
import React from 'react'
import { Button } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {sidebarCollapseCreator} from '../../../store/Sidebar'
import { ReduxProps } from '../../../store'

interface Props {
	collapse: boolean;
	handleClickCollapse: () => void;
}

const mapStateToProps = (state: ReduxProps) => {
	return {
		collapse: state.Sidebar.collapse,
	}
}
  
const mapDispatchToProps = (dispatch: any) => {
	return {
		// 所有处理事件的方法都以handleXXX命名
		handleClickCollapse: bindActionCreators(sidebarCollapseCreator, dispatch)
	}
}

class Collapsed extends React.PureComponent<Props> {

	handleClick = () => {
		this.props.handleClickCollapse()
	}

	render(): JSX.Element {
		return (
			<Button type="primary" size="small" onClick={this.handleClick} className="collapsed-btn">
				{React.createElement(this.props.collapse ? MenuUnfoldOutlined : MenuFoldOutlined)}
			</Button> 
		)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Collapsed)