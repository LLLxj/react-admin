
export interface MenuBase {
	path: string;
	title: string;
	// icon: string;
	component: string;
	// query: string;
	// route: string;
}

export interface IFSubMenu extends MenuBase {
	children?: IFSubMenu[]
}


const menus: {
	menus: IFSubMenu[];
	// others: IFSubMenu[] | [];
	[index: string]: IFSubMenu[];
} = {
	menus: [
		// 菜单相关路由
		{ 
			path: '/',
			title: 'dashboard',
			component: 'Dashboard'
		},
		{
			path: '/button',
			title: 'button',
			component: 'Button',
			children: [
				{
					path: '/button/normal',
					title: 'normal-button',
					component: 'NormalButton'
				},
				{
					path: '/button/info',
					title: 'info-button',
					component: 'InfoButton'
				}
			]
		},
		{
			path: '/detail',
			title: 'detail',
			component: 'Detail'
		},
		{
			path: '/test',
			title: 'test',
			component: 'Test'
		}
	]
}

export default menus