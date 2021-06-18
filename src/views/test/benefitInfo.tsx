/* eslint-disable no-mixed-spaces-and-tabs */
import { Switch, Form, Row, Col, Button, Modal, Select, Input, Collapse, Card, InputNumber, DatePicker, Checkbox } from 'antd'
import DiscountDetail from './detail'
import React, { useState }  from 'react'
const { Option } = Select
const { Panel } = Collapse
const { RangePicker } = DatePicker
const rangeConfig = {
	rules: [{ type: 'array' as const, required: true, message: 'Please select time!' }],
}

interface BenefitListProps {
  benefitList: Array<any>;
  productList: Array<any>;
}
const benefitList: React.FC<BenefitListProps> = (dataInfo): JSX.Element => {
	const [form] = Form.useForm()
	// const [isModalVisible, setIsModalVisible] = useState(false)
	// const [selectVal, setSelectVal] = useState<number>()
	const isLowestpRricelist = [
		{ title: '是', value: 'true' },
		{ title: '否', value: 'false' }
	]

	// const handleChooseProduct = (val: number) => {
	// 	setSelectVal(val)
	// }

	// const showModal = () => {
	// 	setIsModalVisible(true)
	// }

	// const handleOk = () => {
	// 	const obj = { productNumber: Number(selectVal), toggle: true }
	// 	benefitList.benefitList.push(obj)
	// 	console.log('----')
	// 	console.log(benefitList.benefitList)
	// 	form.setFieldsValue({ specialOfferList: benefitList.benefitList })
	// 	setIsModalVisible(false)
	// }
	// const handleCancel = () => {
	// 	setIsModalVisible(false)
	// }
	const onFinish = () => {
		console.log(benefitList)
		console.log('提交表单')
	}

	const upDateForm = (changedFields: any, allFields: any) => {
		console.log('更新表单')
		console.log(allFields)
		// setDisCountList(allFields.specialOfferList)
	}

	const renProInfo = (val: number) => { // 渲染商品信息
		const obj = dataInfo.benefitList.filter((item: any, index: number) => val === index)
		console.log(obj)
		return (
			<div>aaa</div>
		)
	}

	const renderToggleTitle = (val: number) => {
		const obj = dataInfo && dataInfo.benefitList[val]
		let renderObj
		dataInfo.productList?.forEach((item, index) => {
			if (item.number === obj?.productNumber) {
				renderObj = item
			}
		})
		// console.log(renderObj)
		return (
			<div>
				<Row>
					<div className="margin_r_m">商品名称:1111</div>
					<div>商品链接:1111</div>
					{/* <div className="margin_r_m">商品名称:{renderObj && renderObj.brandName}</div>
					<div>商品链接:{renderObj && renderObj.productUrl}</div> */}
					{/* {obj && obj.toggle
						? <Button type="text" onClick={() => handleToggle(val, 1)}>展开</Button>
						: <Button type="text" onClick={() => handleToggle(val, 2)}>收起</Button>
					} */}
				</Row>
        
			</div>
		)
	}
  

	return (
		<div>
			{/* <Row>
				<Button type="primary" onClick={showModal}>
          选择商品
				</Button>
				<Modal title="选择商品" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
					<Col className="margin_r_m">
						{benefitList.productList ?  
							<Select style={{ width: 120 }} onChange={handleChooseProduct}>
								{benefitList.productList?.map((item, index) => (
									<Option disabled={!item.brandName} key={index} value={index}>{ item.brandName ? item.brandName : '请填写商品名称'}</Option>
								))}
							</Select> : undefined
						}
					</Col>
				</Modal>
			</Row> */}
			{/* <Form
				layout={'horizontal'}
				name="discount"
				initialValues={{'specialOfferList': dataInfo.benefitList}}
				form={form}
				onFinish={onFinish}
				onValuesChange={upDateForm}
			> 
				<Form.List name="specialOfferList">
					{(specialOfferListFields, { add, remove }) => (
						<>
							<Form.Item>
								<Button type="primary" onClick={() => add()} >
                  添加
								</Button>
							</Form.Item>
							{specialOfferListFields?.map((commodity: any, index: number) => (	
								<Card key={`detail${index}`}>
									<Row>
										<Col span={12}>
											<Form.Item
												wrapperCol={{ span: 14 }}
												label="佣金比例（%）"
												{...commodity}
												name={[commodity.name, 'productNumber']}
												fieldKey={[commodity.fieldKey, 'productNumber']}
												rules={[{ required: true, message: '请选择所属商品' }]}
											>
												<Select style={{ width: 120 }} >
													{dataInfo.productList?.map((item, index) => (
														<Option disabled={!item.brandName} key={index} value={index}>{ item.brandName ? item.brandName : '请填写商品名称'}</Option>
													))}
												</Select>
											</Form.Item>
										</Col>
									</Row>
									<DiscountDetail key={`detail${index}`} commodity={commodity} discountInfo={dataInfo.benefitList[index]}/>
								</Card>
							))}
						</>
					)}
				</Form.List>
			</Form> */}
			<Form
				layout={'horizontal'}
				name="discount"
				initialValues={{'specialOfferList': dataInfo.benefitList}}
				form={form}
				onFinish={onFinish}
				onValuesChange={upDateForm}
			> 
				<Form.List name="specialOfferList">
					{(fields, { add, remove }) => (
						<>
							<Form.Item>
								<Button type="primary" onClick={() => add()} >
                  添加新的商品
								</Button>
							</Form.Item>
							{fields?.map((commodity: any, index: number) => (
								<div key={index} id={`anchor${index}`}>
									<Collapse key={`Collapse${index}`} ghost >
										<Panel
											header={
												<Row>
													<Col className="margin_r_m">
														<span>商品信息：</span>
														{/* <span>{dataInfo.productInfo && productInfo.productInfo[index]?.brandName}</span> */}
														<span>商品链接：</span>
														<span onClick={() => remove(index)}>删除</span>
													</Col>
												</Row>
											}
											key={`${index}`}
										>
											<Row>
												<Col span={12}>
													<Form.Item
														wrapperCol={{ span: 14 }}
														label="所属商品"
														{...commodity}
														name={[commodity.name, 'productNumber']}
														fieldKey={[commodity.fieldKey, 'productNumber']}
														rules={[{ required: true, message: '请选择所属商品' }]}
													>
														<Select style={{ width: 120 }} >
															{dataInfo.productList?.map((item, index) => (
																<Option disabled={!item.brandName} key={index} value={index}>{ item.brandName ? item.brandName : '请填写商品名称'}</Option>
															))}
														</Select>
													</Form.Item>
												</Col>
											</Row>
											<Row gutter={24} style={{ padding: 20 }}>
												<Row>
													<Col span={12}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															label="佣金比例（%）"
															{...commodity}
															name={[commodity.name, 'commissionRate']}
															fieldKey={[commodity.fieldKey, 'commissionRate']}
															rules={[{ required: true, message: '请填写佣金比例（%）' }]}
														>
															<InputNumber min={1} max={100} />
															{/* <Input placeholder="" /> */}
														</Form.Item>
													</Col>
													<Col span={12}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															label="直播间到手价（¥）"
															{...commodity}
															name={[commodity.name, 'livePrice']}
															fieldKey={[commodity.fieldKey, 'livePrice']}
															rules={[{ required: true, message: '请填写直播间到手价' }]}
														>
															<Input placeholder="" />
														</Form.Item>
													</Col>
													<Col span={12}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															label="是否独家最低价（含赠）"
															{...commodity}
															name={[commodity.name, 'isExclusiveLowestPrice']}
															fieldKey={[commodity.fieldKey, 'isExclusiveLowestPrice']}
															rules={[{ required: true, message: '请选择是否独家最低价' }]}
														>
															<Select
																style={{ width: '100%' }}
																placeholder="Please select"
																// onChange={handleChange}
															>
																{isLowestpRricelist.map((item, index) => {
																	return <Option key={index} value={item.value}>{item.title}</Option>
																})}
															</Select>
														</Form.Item>
													</Col>
													<Col span={12}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															label="上次直播到手价格（没播过的产品不用写（¥））"
															{...commodity}
															name={[commodity.name, 'lastLivePrice']}
															fieldKey={[commodity.fieldKey, 'lastLivePrice']}
															rules={[{ required: true, message: '请填写上次直播到手价格' }]}
														>
															<Input placeholder="" />
														</Form.Item>
													</Col>
													<Col span={12}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															{...commodity}
															label="历史最低价"
															name={[commodity.name, 'lowestPrice']}
															fieldKey={[commodity.fieldKey, 'lowestPrice']}
															rules={[{ required: true, message: '请填写历史最低价' }]}
														>
															<Input placeholder="" />
														</Form.Item>
													</Col>
													<Col span={12}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															label="可提供直播库存"
															{...commodity}
															name={[commodity.name, 'inventory']}
															fieldKey={[commodity.fieldKey, 'inventory']}
															rules={[{ required: true, message: '请选择可提供直播库存' }]}
														>
															<Input placeholder="" />
														</Form.Item>
													</Col>
													<Col span={12}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															label="佣金"
															{...commodity}
															name={[commodity.name, 'commissionRate']}
															fieldKey={[commodity.fieldKey, 'commissionRate']}
														>
															<Input placeholder="" />
														</Form.Item>
													</Col>
													<Col span={12}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															label="佣金链接"
															{...commodity}
															name={[commodity.name, 'commissionUrl']}
															fieldKey={[commodity.fieldKey, 'commissionUrl']}
														>
															<Input placeholder="" />
														</Form.Item>
													</Col>
													<Col span={12}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															label="优惠券链接"
															{...commodity}
															name={[commodity.name, 'couponUrl']}
															fieldKey={[commodity.fieldKey, 'couponUrl']}
														>
															<Input placeholder="" />
														</Form.Item>
													</Col>
													<Col span={12}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															label="优惠有效期"
															{...commodity}
															name={[commodity.name, 'couponTakeEffectRange']}
															fieldKey={[commodity.fieldKey, 'couponTakeEffectRange']}
															{...rangeConfig}
														>
															<RangePicker />
														</Form.Item>
													</Col>
													<Col span={12}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															label="领券方式"
															{...commodity}
															name={[commodity.name, 'couponAccessMethod']}
															fieldKey={[commodity.fieldKey, 'couponAccessMethod']}
														>
															<Input placeholder="" />
														</Form.Item>
													</Col>
													<Col span={12}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															label="优惠券限额情况"
															{...commodity}
															name={[commodity.name, 'couponLimit']}
															fieldKey={[commodity.fieldKey, 'couponLimit']}
														>
															<Input placeholder="" />
														</Form.Item>
													</Col>
													<Col span={12}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															label="优惠方式"
															{...commodity}
															name={[commodity.name, 'couponMethod']}
															fieldKey={[commodity.fieldKey, 'couponMethod']}
														>
															<Input placeholder="书写格式：（例1：拍下立减）(例2：10元优惠券）" />
														</Form.Item>
													</Col>
													<Col span={12}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															label="优惠券数量（按最高上限设置"
															{...commodity}
															name={[commodity.name, 'couponNumber']}
															fieldKey={[commodity.fieldKey, 'couponNumber']}
														>
															<Input placeholder="" />
														</Form.Item>
													</Col>
													<Col span={12}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															label="产品是否合作过超头/明星/红人"
															{...commodity}
															name={[commodity.name, 'talentCooperateWith']}
															fieldKey={[commodity.fieldKey, 'talentCooperateWith']}
														>
															<Input placeholder="" />
														</Form.Item>
													</Col>
													<Col span={12}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															label="过往合作的超头/明星/红人机制"
															{...commodity}
															name={[commodity.name, 'methodCooperateWithTalent']}
															fieldKey={[commodity.fieldKey, 'methodCooperateWithTalent']}
														>
															<Input placeholder="" />
														</Form.Item>
													</Col>
													<Col span={12}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															label="非茉莉报名的超头/明星/红人播出的时间和机制"
															{...commodity}
															name={[commodity.name, 'methodCooperateWithTalent']}
															fieldKey={[commodity.fieldKey, 'methodCooperateWithTalent']}
														>
															<Input placeholder="" />
														</Form.Item>
													</Col>
													<Col span={12}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															label="直播间福利"
															{...commodity}
															name={[commodity.name, 'livePreferential']}
															fieldKey={[commodity.fieldKey, 'livePreferential']}
														>
															<Input placeholder="" />
														</Form.Item>
													</Col>
													<Col span={12}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															label="赠品"
															{...commodity}
															name={[commodity.name, 'gift']}
															fieldKey={[commodity.fieldKey, 'gift']}
														>
															<Input placeholder="" />
														</Form.Item>
													</Col>
													<Col span={12}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															label="赠品邮寄方式"
															{...commodity}
															name={[commodity.name, 'giftShippingMethod']}
															fieldKey={[commodity.fieldKey, 'giftShippingMethod']}
															rules={[{ required: true, message: '请选择赠品邮寄方式' }]}
														>
															<Input placeholder="" />
														</Form.Item>
													</Col>
													<Col span={20}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															label="赠品规格数量（请标注是否和产品分开发）"
															{...commodity}
															name={[commodity.name, 'giftInfo']}
															fieldKey={[commodity.fieldKey, 'giftInfo']}
														>
															<Input placeholder="" />
														</Form.Item>
													</Col>
													<Col span={20}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															label="赠品价值"
															{...commodity}
															name={[commodity.name, 'giftValue']}
															fieldKey={[commodity.fieldKey, 'giftValue']}
														>
															<Input placeholder="" />
														</Form.Item>
													</Col>
													<Col span={20}>
														<Form.Item
															label="是否可以随时改价或实时生效优惠方式"
															{...commodity}
															name={[commodity.name, 'isChangeCoupon']}
															fieldKey={[commodity.fieldKey, 'isChangeCoupon']}
															valuePropName="checked"
														>
															<Checkbox></Checkbox>
														</Form.Item>
													</Col>
													<Col span={20}>
														<Form.Item
															label="是否ID限购"
															{...commodity}
															name={[commodity.name, 'isLimitId']}
															fieldKey={[commodity.fieldKey, 'isLimitId']}
															valuePropName="checked"
														>
															<Checkbox></Checkbox>
														</Form.Item>
													</Col>
													<Col span={20}>
														<Form.Item
															label="日是否同步官方活动"
															{...commodity}
															name={[commodity.name, 'isSynchronizeOfficialActivity']}
															fieldKey={[commodity.fieldKey, 'isSynchronizeOfficialActivity']}
															rules={[{ required: true, message: '请选择日是否同步官方活动' }]}
															valuePropName="checked"
														>
															<Checkbox></Checkbox>
														</Form.Item>
													</Col>
												</Row>
												<Row>
													<Button type="primary" onClick={onFinish}>
                            保存
													</Button>
												</Row>
											</Row>
										</Panel>
									</Collapse>
								</div>
							))}
						</>
					)}
				</Form.List>
			</Form>
		</div>
	)
}

export default benefitList
