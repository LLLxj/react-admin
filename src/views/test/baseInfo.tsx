import { Switch, Form } from 'antd'
import React from 'react'

interface BaseInfoProps {
  baseInfo: {
    name: string,
    age: number,
    proList: Array<any>,
    benefitList: Array<any>
  }
  
}
const BaseInfo: React.FC<BaseInfoProps> = (baseInfo) => {

	console.log(baseInfo)

	return (
		<div>aaa</div>
	)
}

export default BaseInfo
