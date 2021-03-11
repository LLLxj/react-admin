import React, { useState } from 'react'
import { Select, Row, Col } from 'antd'
const { Option } = Select

// class Detail extends React.Component{
const Detail: React.FC = () => {

	const seleList1 = [
		{ title: '111', value: 1 },
		{ title: '222', value: 2 },
		{ title: '333', value: 3 },
		{ title: '444', value: 4 }
	]

	const [seleList, setSeleList] = useState(seleList1)

	const getInputAndOptions = (input: any, option: any) => {
		console.log(input)
		console.log(option)
		return true
	}

	return (
		<Row gutter={24}>
			<Col span={8}>
				<Select
					mode="tags"
					filterOption={(input, option) =>
						getInputAndOptions(input, option)
						// option?.children.indexOf(input.trim()) >= 0
					}
					style={{ width: '500px' }}
				>
					{seleList.map((item: any) => (
						<Option key={item.title} value={item.value}>
							{ item.title }
						</Option>
					))}
				</Select>
			</Col>
		</Row>
		
	)

}

export default Detail