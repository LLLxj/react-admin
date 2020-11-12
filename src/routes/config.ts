// import {
// 	HomeOutlined,
// 	SettingFilled,
// 	SmileOutlined,
// 	SyncOutlined,
// 	LoadingOutlined,
// } from '@ant-design/icons'

export interface MenuBase {
	path: string;
	title: string;
	icon: string | JSX.Element,
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
			component: 'Dashboard',
			icon: 'HomeOutlined'
		},
		{
			path: '/button',
			title: 'button',
			component: 'Button',
			icon: 'SettingFilled',
			children: [
				{
					path: '/button/normal',
					title: 'normal-button',
					component: 'NormalButton',
					icon: 'SmileOutlined'
				},
				{
					path: '/button/info',
					title: 'info-button',
					component: 'InfoButton',
					icon: 'SmileOutlined'
				}
			]
		},
		{
			path: '/detail',
			title: 'detail',
			component: 'Detail',
			icon: 'SmileOutlined'
		},
		{
			path: '/test',
			title: 'test',
			component: 'Test',
			icon: 'SmileOutlined'
		}
	]
}

export default menus