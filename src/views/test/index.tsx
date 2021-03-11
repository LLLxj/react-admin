/* eslint-disable no-empty */
import { Switch, Form, Tabs } from 'antd'
import React, { useState }from 'react'
import BaseInfo from './baseInfo'
import ProductInfo from './productList'
import BenefitInfo from './benefitInfo'
const { TabPane } = Tabs

const Test: React.FC<any> = () => {
	const obj = {
		name: '测试',
		age: 29,
		proList: [
		],
		benefitList: [
		]
	}
	const [tabIndex, setTabIndex] = useState<string>('1')
	const [proList, setProList] = useState<Array<any>>(obj.proList)
	const [benefitList, setBenefitList] = useState<Array<any>>(obj.benefitList)

	return (
		<div>
			<Form.Provider
				onFormFinish={name => {
					if (name === 'discount') {
						console.log('统一提交处理')
						// Do something...
					}
				}}
				onFormChange={(name, { changedFields, forms }) => {
					if (name === 'product') {
						// changedFields.values // 数组为改变数组长度 字符串为更新单个值
						const { product, discount  } = forms
						const productList = product.getFieldValue('productList')
						setProList(productList)
						product.setFieldsValue({ productList: productList })
						console.log(changedFields)
						if (changedFields[0]?.value && changedFields[0].value.length) {
							let benefitList = []
							if (discount) {
								benefitList = discount.getFieldValue('specialOfferList')
							}
							const newProduct = productList?.map((item: any, index: number) => {
								if (!item) {
									item = { number: index + 1, brandName: '请填写品牌名称' }
								}
								return item
							})
							setProList(newProduct)
							const numberList = newProduct?.map((item: any, index: number) => {
								return index
							})
							if (benefitList) {
								const newBenefitList = benefitList.filter((item: any) => numberList.includes(item.productNumber))
								if (discount) {
									discount.setFieldsValue({ specialOfferList: newBenefitList })
								}
							} 
						}
					}
					if (name === 'discount') {
						const { discount  } = forms
						const specialOfferList = discount.getFieldValue('specialOfferList')
						console.log('watch优惠')
						console.log(specialOfferList)
						setBenefitList(specialOfferList)
						discount.setFieldsValue({ specialOfferList: specialOfferList })
					}
				}}
			>
				<Tabs
					defaultActiveKey="1"
					activeKey={tabIndex}
					onChange={key => {
						setTabIndex(key)
					}}
				>
					<TabPane tab="基础信息" key="1">
						<BaseInfo baseInfo={obj} />
					</TabPane>
					<TabPane tab="商品信息" key="2">
						<ProductInfo productInfo={proList} />
					</TabPane>
					<TabPane tab="优惠信息" key="3">
						<BenefitInfo productList={proList} benefitList={benefitList} />
					</TabPane>
				</Tabs>
			</Form.Provider>
		</div>
	)
}

export default Test