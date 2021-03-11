import { IFSubMenu }  from '@/router/config'

export function filterRouter (arr: IFSubMenu[]): Array<any> {
	const tempArr: any = []
	arr.forEach(item => {
		if (!item.routes) {
			tempArr.push(item)
		} else {
			item.routes.forEach(chiItem => {
				tempArr.push(chiItem)
			})
		}
	})
	return tempArr
}

export function hasOneShowingChildren (arr: IFSubMenu[]): Array<any> {
	const tempArr: any = []
	arr.forEach(item => {
		if (!item.hidden) {
			if (item.routes && item.routes.length === 1) {
				item.routes.forEach(chiItem => {
					tempArr.push(chiItem)
				})
			} else {
				tempArr.push(item)
			}
		}
    
	})
	return tempArr
}