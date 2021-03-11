import React, { useCallback, useState, useEffect } from 'react'
import { Form, Input, Row, Col, Checkbox, Button, Collapse, DatePicker, InputNumber, Select } from 'antd'
const { Option } = Select

const dateFormat = 'YYYY/MM/DD'
const rangeConfig = {
	rules: [{ type: 'array' as const, required: true, message: 'Please select time!' }],
}
const { RangePicker } = DatePicker

const DiscountDetail: React.FC<any> = (discountData: any, discountInfo: any) => {
	console.log(discountData)
	console.log(discountInfo)
	const [form] = Form.useForm()
	// applicationFormSpecialOfferId: number; // 优惠信息表ID
	// commissionRate: number; // 佣金比例
	// commissionUrl:	string; //佣金链接
	// couponAccessMethod:	string; // 领券方式
	// couponLimit:	string; // 优惠券限额情况
	// couponMethod:	string; // 优惠方式
	// couponNumber:	string; // 优惠券数量（按最高上限设置）
	// couponTakeEffectFrom:	string; // 优惠有效起止时间从
	// couponTakeEffectRange:	any;
	// couponTakeEffectTo:	string; // 优惠有效起止时间到
	// couponUrl:	string; //优惠券链接
	// gift:	string; // 赠品
	// giftInfo:	string; // 赠品规格数量（请标注是否和产品分开发）
	// giftShippingMethod:	string; // 赠品邮寄方式
	// giftValue:	number; // 赠品价值
	// inventory:	number; // 可提供直播库存
	// isChangeCoupon:	boolean; // 是否可以随时改价或实时生效优惠方式
	// isExclusiveLowestPrice:	boolean; // 是否独家最低价（含赠）
	// isLimitId:	boolean; // 是否ID限购
	// isSynchronizeOfficialActivity:	boolean; // 当日是否同步官方活动
	// lastLivePrice:	number; // 填上次直播到手价格
	// listingPrice:	number; // 详情页直播当天报价
	// livePreferential:	string; // 直播间福利（如抽奖、免单）
	// livePrice:	number; // 直播间到手价
	// lowestPrice:	number; //历史最低价
	// methodCooperateWithTalent:	string; //过往合作超头/明星/红人的机制
	// methodNotMoli:	string; // 非茉莉报名的超头/明星/红人播出的时间和机制
	// pname:	string; 
	// productNumber:	number; // 商品序号
	// purl:	string;
	// talentCooperateWith:	string; // 产品是否合作过超头/明星/红人
	const editCommodity = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		// dispatch({
		// 	type: 'toggleTab',
		// 	payload: { tabIndex: '2', anchorId: discountInfo.productNumber },
		// })
		event.stopPropagation()
	}

	const sumbit = async () => {
		console.log('提交单挑数据')
		console.log(discountInfo)
		// try {
		//   const value = await form.validateFields();
		// } catch {
		//   dispatch({
		//     type: "validataCommodity",
		//     payload: { tabIndex: "3", form: { xixixi: 121231 } },
		//   });
		// }
	}

	const isLowestpRricelist = [
		{ title: '是', value: 'true' },
		{ title: '否', value: 'false' }
	]

	return (
		<div>
			{/* <Row>
          <div>佣金比例:{discountInfo.commissionRate}</div>
          <div className="margin_r_m">直播间到手价:{discountInfo.livePrice}</div>
          <div className="margin_r_m">历史最低价:{discountInfo.lowestPrice}</div>
          <IconFont
            onClick={e => {
              editCommodity(e)
            }}
            type="iconbianji"
            style={{ color: "rgba(24, 144, 255, 1)" }}
          />
      </Row> */}
			<Row gutter={24} style={{ padding: 20 }}>
				<Row>
					<Col span={12}>
						<Form.Item
							wrapperCol={{ span: 14 }}
							label="佣金比例（%）"
							{...discountData}
							name={[discountData.name, 'commissionRate']}
							fieldKey={[discountData.fieldKey, 'commissionRate']}
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
							{...discountData}
							name={[discountData.name, 'livePrice']}
							fieldKey={[discountData.fieldKey, 'livePrice']}
							rules={[{ required: true, message: '请填写直播间到手价' }]}
						>
							<Input placeholder="" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							wrapperCol={{ span: 14 }}
							label="是否独家最低价（含赠）"
							{...discountData}
							name={[discountData.name, 'isExclusiveLowestPrice']}
							fieldKey={[discountData.fieldKey, 'isExclusiveLowestPrice']}
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
							{...discountData}
							name={[discountData.name, 'lastLivePrice']}
							fieldKey={[discountData.fieldKey, 'lastLivePrice']}
							rules={[{ required: true, message: '请填写上次直播到手价格' }]}
						>
							<Input placeholder="" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							wrapperCol={{ span: 14 }}
							{...discountData}
							label="历史最低价"
							name={[discountData.name, 'lowestPrice']}
							fieldKey={[discountData.fieldKey, 'lowestPrice']}
							rules={[{ required: true, message: '请填写历史最低价' }]}
						>
							<Input placeholder="" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							wrapperCol={{ span: 14 }}
							label="可提供直播库存"
							{...discountData}
							name={[discountData.name, 'inventory']}
							fieldKey={[discountData.fieldKey, 'inventory']}
							rules={[{ required: true, message: '请选择可提供直播库存' }]}
						>
							<Input placeholder="" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							wrapperCol={{ span: 14 }}
							label="佣金"
							{...discountData}
							name={[discountData.name, 'commissionRate']}
							fieldKey={[discountData.fieldKey, 'commissionRate']}
						>
							<Input placeholder="" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							wrapperCol={{ span: 14 }}
							label="佣金链接"
							{...discountData}
							name={[discountData.name, 'commissionUrl']}
							fieldKey={[discountData.fieldKey, 'commissionUrl']}
						>
							<Input placeholder="" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							wrapperCol={{ span: 14 }}
							label="优惠券链接"
							{...discountData}
							name={[discountData.name, 'couponUrl']}
							fieldKey={[discountData.fieldKey, 'couponUrl']}
						>
							<Input placeholder="" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							wrapperCol={{ span: 14 }}
							label="优惠有效期"
							{...discountData}
							name={[discountData.name, 'couponTakeEffectRange']}
							fieldKey={[discountData.fieldKey, 'couponTakeEffectRange']}
							{...rangeConfig}
						>
							{/* {discountInfo.couponTakeEffectRange && discountInfo.couponTakeEffectRange[0]} */}
							<RangePicker />
							{/* <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" /> */}
							{/* {discountInfo.couponTakeEffectRange 
                  ? <RangePicker
                      defaultValue={[
                        moment(discountInfo.couponTakeEffectRange && discountInfo.couponTakeEffectRange[0], dateFormat), 
                        moment(discountInfo.couponTakeEffectRange && discountInfo.couponTakeEffectRange[1], dateFormat)]}
                      disabled
                    />
                    : <RangePicker
                    defaultValue={[
                      moment('2021-12-26', dateFormat), 
                      moment('2022-12-30', dateFormat)]}
                    disabled
                  />
                } */}
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							wrapperCol={{ span: 14 }}
							label="领券方式"
							{...discountData}
							name={[discountData.name, 'couponAccessMethod']}
							fieldKey={[discountData.fieldKey, 'couponAccessMethod']}
						>
							<Input placeholder="" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							wrapperCol={{ span: 14 }}
							label="优惠券限额情况"
							{...discountData}
							name={[discountData.name, 'couponLimit']}
							fieldKey={[discountData.fieldKey, 'couponLimit']}
						>
							<Input placeholder="" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							wrapperCol={{ span: 14 }}
							label="优惠方式"
							{...discountData}
							name={[discountData.name, 'couponMethod']}
							fieldKey={[discountData.fieldKey, 'couponMethod']}
						>
							<Input placeholder="书写格式：（例1：拍下立减）(例2：10元优惠券）" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							wrapperCol={{ span: 14 }}
							label="优惠券数量（按最高上限设置"
							{...discountData}
							name={[discountData.name, 'couponNumber']}
							fieldKey={[discountData.fieldKey, 'couponNumber']}
						>
							<Input placeholder="" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							wrapperCol={{ span: 14 }}
							label="产品是否合作过超头/明星/红人"
							{...discountData}
							name={[discountData.name, 'talentCooperateWith']}
							fieldKey={[discountData.fieldKey, 'talentCooperateWith']}
						>
							<Input placeholder="" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							wrapperCol={{ span: 14 }}
							label="过往合作的超头/明星/红人机制"
							{...discountData}
							name={[discountData.name, 'methodCooperateWithTalent']}
							fieldKey={[discountData.fieldKey, 'methodCooperateWithTalent']}
						>
							<Input placeholder="" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							wrapperCol={{ span: 14 }}
							label="非茉莉报名的超头/明星/红人播出的时间和机制"
							{...discountData}
							name={[discountData.name, 'methodCooperateWithTalent']}
							fieldKey={[discountData.fieldKey, 'methodCooperateWithTalent']}
						>
							<Input placeholder="" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							wrapperCol={{ span: 14 }}
							label="直播间福利"
							{...discountData}
							name={[discountData.name, 'livePreferential']}
							fieldKey={[discountData.fieldKey, 'livePreferential']}
						>
							<Input placeholder="" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							wrapperCol={{ span: 14 }}
							label="赠品"
							{...discountData}
							name={[discountData.name, 'gift']}
							fieldKey={[discountData.fieldKey, 'gift']}
						>
							<Input placeholder="" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							wrapperCol={{ span: 14 }}
							label="赠品邮寄方式"
							{...discountData}
							name={[discountData.name, 'giftShippingMethod']}
							fieldKey={[discountData.fieldKey, 'giftShippingMethod']}
							rules={[{ required: true, message: '请选择赠品邮寄方式' }]}
						>
							<Input placeholder="" />
						</Form.Item>
					</Col>
					<Col span={20}>
						<Form.Item
							wrapperCol={{ span: 14 }}
							label="赠品规格数量（请标注是否和产品分开发）"
							{...discountData}
							name={[discountData.name, 'giftInfo']}
							fieldKey={[discountData.fieldKey, 'giftInfo']}
						>
							<Input placeholder="" />
						</Form.Item>
					</Col>
					<Col span={20}>
						<Form.Item
							wrapperCol={{ span: 14 }}
							label="赠品价值"
							{...discountData}
							name={[discountData.name, 'giftValue']}
							fieldKey={[discountData.fieldKey, 'giftValue']}
						>
							<Input placeholder="" />
						</Form.Item>
					</Col>
					<Col span={20}>
						<Form.Item
							label="是否可以随时改价或实时生效优惠方式"
							{...discountData}
							name={[discountData.name, 'isChangeCoupon']}
							fieldKey={[discountData.fieldKey, 'isChangeCoupon']}
							valuePropName="checked"
						>
							<Checkbox></Checkbox>
						</Form.Item>
					</Col>
					<Col span={20}>
						<Form.Item
							label="是否ID限购"
							{...discountData}
							name={[discountData.name, 'isLimitId']}
							fieldKey={[discountData.fieldKey, 'isLimitId']}
							valuePropName="checked"
						>
							<Checkbox></Checkbox>
						</Form.Item>
					</Col>
					<Col span={20}>
						<Form.Item
							label="日是否同步官方活动"
							{...discountData}
							name={[discountData.name, 'isSynchronizeOfficialActivity']}
							fieldKey={[discountData.fieldKey, 'isSynchronizeOfficialActivity']}
							rules={[{ required: true, message: '请选择日是否同步官方活动' }]}
							valuePropName="checked"
						>
							<Checkbox></Checkbox>
						</Form.Item>
					</Col>
				</Row>
			</Row>
			<Button type="primary" onClick={() => sumbit()}>
        保存
			</Button>
		</div>
    
	)
}
export default DiscountDetail
