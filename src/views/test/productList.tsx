import { Switch, Form, Button, Row, Col, Input, Select, Checkbox, Collapse } from 'antd'
import React from 'react'
const { Option } = Select
const { Panel } = Collapse

interface BaseInfoProps {
  productInfo: Array<any>
  // baseInfo: {
  //   name: string,
  //   age: number,
  //   proList: Array<any>,
  //   benefitList: Array<any>
  // }
  
}
const ProductInfo: React.FC<BaseInfoProps> = (productInfo) => {
	const [form] = Form.useForm()
	// console.log('render渲染')
	// console.log(productInfo.productInfo)
	const trueOrFalseList = [
		{ title: '是', value: 'true' },
		{ title: '否', value: 'false' }
	]
	const onFinish = () => {
		console.log('提交表单')
	}

	const upDateForm = () => {
		console.log('更新表单')
	}

	const renderLabel = (label: string, item: string) => {
		return (
			<div>{item}</div>
		)
	}

	return (
		<div>
			<Form
				layout={'horizontal'}
				name="product"
				initialValues={{'productList': productInfo.productInfo}}
				form={form}
				onFinish={onFinish}
				onValuesChange={upDateForm}
			> 
				<Form.List name="productList">
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
														<span>{productInfo.productInfo && productInfo.productInfo[index]?.brandName}</span>
														<span>商品链接：</span>
														<span onClick={() => remove(index)}>删除</span>
													</Col>
												</Row>
											}
											key={`${index}`}
										>
											<Row gutter={24} key={index} style={{ padding: 20 }}>
												<Row>
													<Col span={20}>
														<Form.Item
															wrapperCol={{ span: 10 }}
															label={renderLabel('brandName', '品牌')}
															{...commodity}
															name={[commodity.name, 'brandName']}
															fieldKey={[commodity.fieldKey, 'brandName']}
														>
															<Input placeholder="建议不超过30个字" />
														</Form.Item>
														{/* <MinusCircleOutlined onClick={() => remove(commodity.name)} /> */}
													</Col>
													<Col span={24}>
														<Form.Item
															wrapperCol={{ span: 12 }}
															// label="品牌背景"
															label={renderLabel('brandBackground', '品牌背景')}
															{...commodity}
															name={[commodity.name, 'brandBackground']}
															fieldKey={[commodity.fieldKey, 'brandBackground']}
														>
															<Input placeholder="建议不超过200字" />
														</Form.Item>
													</Col>
													<Col span={24}>
														<Form.Item
															wrapperCol={{ span: 12 }}
															// label="品牌所属国家"
															label={renderLabel('countryId', '品牌所属国家')}
															{...commodity}
															name={[commodity.name, 'countryId']}
															fieldKey={[commodity.fieldKey, 'countryId']}
														>
															{/* <CommonSelect
                            placeholder="品牌所属国家"
                            mode="multiple"
                            asyncHandle={api.registrationForm.countryQuery}
                            selectKey="id"
                            selectText="name"
                          /> */}
														</Form.Item>
													</Col>
													<Col span={24}>
														<Form.Item
															wrapperCol={{ span: 12 }}
															// label="引言"
															label={renderLabel('introduction', '引言')}
															{...commodity}
															name={[commodity.name, 'introduction']}
															fieldKey={[commodity.fieldKey, 'introduction']}
														>
															<Input placeholder="输入商品链接，自动获取通过商品链接可获取的信息" />
														</Form.Item>
													</Col>
												</Row>
												<Row>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="类目"
															label={renderLabel('categoryId', '类目')}
															{...commodity}
															name={[commodity.name, 'categoryId']}
															fieldKey={[commodity.fieldKey, 'categoryId']}
														>
															{/* <ParamSelect
                            placeholder="类目"
                            mode="multiple"
                            // asyncHandle={api.registrationForm.categoryQuery(searchParams)}
                            asyncHandle={setSearchCategoryParams}
                            onPopupScroll={onScroll}
                            selectKey="id"
                            selectText="name"
                          /> */}
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="商品链接"
															label={renderLabel('productUrl', '商品链接')}
															{...commodity}
															name={[commodity.name, 'productUrl']}
															fieldKey={[commodity.fieldKey, 'productUrl']}
														>
															<Input placeholder="请输入商品链接" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="商品名称"
															label={renderLabel('productName', '商品名称')}
															{...commodity}
															name={[commodity.name, 'productName']}
															fieldKey={[commodity.fieldKey, 'productName']}
														>
															<Input placeholder="请输入商品名称" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="产品图片"
															label={renderLabel('picUrl', '产品图片')}
															{...commodity}
															name={[commodity.name, 'picUrl']}
															fieldKey={[commodity.fieldKey, 'picUrl']}
														>
															<Input placeholder="请输入产品图片" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="累计销量"
															label={renderLabel('totalSales', '累计销量')}
															{...commodity}
															name={[commodity.name, 'totalSales']}
															fieldKey={[commodity.fieldKey, 'totalSales']}
														>
															<Input placeholder="请输入累计销量" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="规格"
															label={renderLabel('specification', '规格')}
															{...commodity}
															name={[commodity.name, 'specification']}
															fieldKey={[commodity.fieldKey, 'specification']}
														>
															<Input placeholder="请输入规格" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="近30天销量"
															label={renderLabel('specification', '规格')}
															{...commodity}
															name={[commodity.name, 'salesInLast30Days']}
															fieldKey={[commodity.fieldKey, 'salesInLast30Days']}
														>
															<Input placeholder="请输入近30天销量" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="厂商指导价"
															label={renderLabel('guidingPrice', '厂商指导价')}
															{...commodity}
															name={[commodity.name, 'guidingPrice']}
															fieldKey={[commodity.fieldKey, 'guidingPrice']}
														>
															<Input placeholder="请输入厂商指导价" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="日常零售价（页面价）"
															label={renderLabel('retailPrice', '日常零售价（页面价）')}
															{...commodity}
															name={[commodity.name, 'retailPrice']}
															fieldKey={[commodity.fieldKey, 'retailPrice']}
														>
															<Input placeholder="请输入日常零售价（页面价）" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															label="线下价格"
															// label={renderLabel('marketPrice', '线下价格')}
															{...commodity}
															name={[commodity.name, 'marketPrice']}
															fieldKey={[commodity.fieldKey, 'marketPrice']}
														>
															<Input placeholder="请输入线下价格" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="双十一&618 大促价格"
															label={renderLabel('promotionPrice', '双十一&618 大促价格')}
															{...commodity}
															name={[commodity.name, 'promotionPrice']}
															fieldKey={[commodity.fieldKey, 'promotionPrice']}
														>
															<Input placeholder="请输入双十一&618 大促价格" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="近7天售价"
															label={renderLabel('priceInLast7Days', '近7天售价')}
															{...commodity}
															name={[commodity.name, 'priceInLast7Days']}
															fieldKey={[commodity.fieldKey, 'priceInLast7Days']}
														>
															<Input placeholder="请输入近7天售价" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="所有线上售卖平台"
															label={renderLabel('onlinePromotionPlatform', '所有线上售卖平台')}
															{...commodity}
															name={[commodity.name, 'onlinePromotionPlatform']}
															fieldKey={[commodity.fieldKey, 'onlinePromotionPlatform']}
														>
															<Input placeholder="请输入所有线上售卖平台" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="拼多多价格"
															label={renderLabel('pinduoduoPrice', '拼多多价格')}
															{...commodity}
															name={[commodity.name, 'pinduoduoPrice']}
															fieldKey={[commodity.fieldKey, 'pinduoduoPrice']}
														>
															<Input placeholder="请输入拼多多价格" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="是否有：有赞/京东商城，如有请附链接"
															label={renderLabel('otherProductUrl', '是否有：有赞/京东商城，如有请附链接')}
															{...commodity}
															name={[commodity.name, 'otherProductUrl']}
															fieldKey={[commodity.fieldKey, 'otherProductUrl']}
															// name={["是否有：有赞/京东商城，如有请附链接", index]}
														>
															<Input placeholder="请输入链接" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="样品状态（是否寄出，物流单号）"
															label={renderLabel('sampleStatus', '样品状态（是否寄出，物流单号）')}
															{...commodity}
															name={[commodity.name, 'sampleStatus']}
															fieldKey={[commodity.fieldKey, 'sampleStatus']}
														>
															<Input placeholder="请输入商家名称" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="样品是否寄回"
															label={renderLabel('isSendSampleBack', '样品是否寄回')}
															{...commodity}
															name={[commodity.name, 'isSendSampleBack']}
															fieldKey={[commodity.fieldKey, 'isSendSampleBack']}
														>
															<Select
																style={{ width: '100%' }}
																placeholder="Please select"
																// onChange={handleChange}
															>
																{trueOrFalseList.map((item, index) => {
																	return <Option key={index} value={item.value}>{item.title}</Option>
																})}
															</Select>
															{/* <Input placeholder="样品寄回状态" /> */}
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="产品上市时间"
															label={renderLabel('timeToMarket', '产品上市时间')}
															{...commodity}
															name={[commodity.name, 'timeToMarket']}
															fieldKey={[commodity.fieldKey, 'timeToMarket']}
														>
															<Input placeholder="请输入产品上市时间" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="产品产地"
															label={renderLabel('productOrigin', '产品产地')}
															{...commodity}
															name={[commodity.name, 'productOrigin']}
															fieldKey={[commodity.fieldKey, 'productOrigin']}
														>
															<Input placeholder="请输入产品产地" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="是否包邮"
															label={renderLabel('isFreeShipping', '是否包邮')}
															{...commodity}
															name={[commodity.name, 'isFreeShipping']}
															fieldKey={[commodity.fieldKey, 'isFreeShipping']}
														>
															<Input placeholder="请选择包邮状态" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="产品发货时间"
															label={renderLabel('deliveryTime', '产品发货时间')}
															{...commodity}
															name={[commodity.name, 'deliveryTime']}
															fieldKey={[commodity.fieldKey, 'deliveryTime']}
														>
															<Input placeholder="请输入产品发货时间" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="限购地区及包邮政策（港澳台特别说明"
															label={renderLabel('shippingRemark', '限购地区及包邮政策（港澳台特别说明')}
															{...commodity}
															name={[commodity.name, 'shippingRemark']}
															fieldKey={[commodity.fieldKey, 'shippingRemark']}
															// name={["限购地区及包邮政策（港澳台特别说明", index]}
														>
															<Input placeholder="请输入限购地区及包邮政策" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="生产日期"
															label={renderLabel('productionDate', '生产日期')}
															{...commodity}
															name={[commodity.name, 'productionDate']}
															fieldKey={[commodity.fieldKey, 'productionDate']}
														>
															<Input placeholder="请输入生产日期" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="保质期"
															label={renderLabel('expirationDate', '保质期')}
															{...commodity}
															name={[commodity.name, 'expirationDate']}
															fieldKey={[commodity.fieldKey, 'expirationDate']}
														>
															<Input placeholder="请输入保质期" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="产品使用寿命"
															label={renderLabel('productLife', '产品使用寿命')}
															{...commodity}
															name={[commodity.name, 'productLife']}
															fieldKey={[commodity.fieldKey, 'productLife']}
														>
															<Input placeholder="请输入产品使用寿命" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="产品好评率"
															label={renderLabel('positiveRate', '产品好评率')}
															{...commodity}
															name={[commodity.name, 'positiveRate']}
															fieldKey={[commodity.fieldKey, 'positiveRate']}
														>
															<Input placeholder="请输入产品好评率" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="产品使用方法"
															label={renderLabel('usage', '产品使用方法')}
															{...commodity}
															name={[commodity.name, 'usage']}
															fieldKey={[commodity.fieldKey, 'usage']}
														>
															<Input placeholder="请输入产品使用方法" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="功效"
															label={renderLabel('efficacy', '功效')}
															{...commodity}
															name={[commodity.name, 'efficacy']}
															fieldKey={[commodity.fieldKey, 'efficacy']}
														>
															<Input placeholder="请输入功效" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="禁忌事项（如孕妇儿童是否可用）"
															label={renderLabel('contraindication', '禁忌事项（如孕妇儿童是否可用）')}
															{...commodity}
															name={[commodity.name, 'contraindication']}
															fieldKey={[commodity.fieldKey, 'contraindication']}
														>
															<Input placeholder="请输入禁忌事项" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="品牌排行"
															label={renderLabel('ranking', '品牌排行')}
															{...commodity}
															name={[commodity.name, 'ranking']}
															fieldKey={[commodity.fieldKey, 'ranking']}
														>
															<Input placeholder="请输入品牌排行" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="同类商品里的竞争地位"
															label={renderLabel('competitor', '同类商品里的竞争地位')}
															{...commodity}
															name={[commodity.name, 'competitor']}
															fieldKey={[commodity.fieldKey, 'competitor']}
														>
															<Input placeholder="请输入同类商品里的竞争地位" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 14 }}
															// label="行业占有率排名"
															label={renderLabel('industryOccupancyRanking', '行业占有率排名')}
															{...commodity}
															name={[commodity.name, 'industryOccupancyRanking']}
															fieldKey={[commodity.fieldKey, 'industryOccupancyRanking']}
														>
															<Input placeholder="请输入行业占有率排名" />
														</Form.Item>
													</Col>
												</Row>
												<Row>
													<Col span={24}>
														<Form.Item
															wrapperCol={{ span: 12 }}
															// label="商品/品牌视频素材"
															label={renderLabel('videoMaterial', '商品/品牌视频素材')}
															{...commodity}
															name={[commodity.name, 'videoMaterial']}
															fieldKey={[commodity.fieldKey, 'videoMaterial']}
														>
															<Input placeholder="请输入商品/品牌视频素材" />
														</Form.Item>
													</Col>
													<Col span={24}>
														<Form.Item
															wrapperCol={{ span: 12 }}
															// label="商品卖点"
															label={renderLabel('productSalesPoint', '商品卖点')}
															{...commodity}
															name={[commodity.name, 'productSalesPoint']}
															fieldKey={[commodity.fieldKey, 'productSalesPoint']}
														>
															<Input placeholder="请输入商品卖点" />
														</Form.Item>
													</Col>
													<Col span={24}>
														<Form.Item
															wrapperCol={{ span: 12 }}
															// label="生活化卖点"
															label={renderLabel('lifeSalesPoint', '生活化卖点')}
															{...commodity}
															name={[commodity.name, 'lifeSalesPoint']}
															fieldKey={[commodity.fieldKey, 'lifeSalesPoint']}
														>
															<Input placeholder="请输入生活化卖点" />
														</Form.Item>
													</Col>
													<Col span={24}>
														<Form.Item
															wrapperCol={{ span: 12 }}
															// label="备注"
															label={renderLabel('remark', '备注')}
															{...commodity}
															name={[commodity.name, 'remark']}
															fieldKey={[commodity.fieldKey, 'remark']}
															// name={["备注", index]}
														>
															<Input placeholder="请输入备注" />
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 12 }}
															// label="能否修改主图和详情页"
															label={renderLabel('isModifyData', '能否修改主图和详情页')}
															{...commodity}
															name={[commodity.name, 'isModifyData']}
															fieldKey={[commodity.fieldKey, 'isModifyData']}
															valuePropName="checked"
														>
															<Checkbox></Checkbox>
														</Form.Item>
													</Col>
													<Col span={8}>
														<Form.Item
															wrapperCol={{ span: 12 }}
															// label="能否配合修改库存上下架"
															label={renderLabel('isModifyInventory', '能否配合修改库存上下架')}
															{...commodity}
															name={[commodity.name, 'isModifyInventory']}
															fieldKey={[commodity.fieldKey, 'isModifyInventory']}
															valuePropName="checked"
														>
															<Checkbox></Checkbox>
														</Form.Item>
													</Col>
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

export default ProductInfo
