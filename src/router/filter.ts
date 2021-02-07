import { IFSubMenu }  from '@/router/config'

export function filterRouter (arr: IFSubMenu[]): Array<any> {
	const tempArr: any = []
	arr.forEach(item => {
		if (!item.children) {
			tempArr.push(item)
		} else {
			item.children.forEach(chiItem => {
				tempArr.push(chiItem)
			})
		}
	})
	return tempArr
}