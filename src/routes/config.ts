import {
	HomeOutlined,
	SettingFilled,
	SmileOutlined,
} from '@ant-design/icons'
import Detail from '../views/detail'
import Dashboard from '../views/dashboard'
import Test from '../views/test'
import NormalButoon from '../views/button/normal'
import InfoButoon from '../views/button/info'
import Login from '../views/login'

export interface MenuBase {
	path: string;
	title: string;
	icon: any,
	component?: any;
}

export interface IFSubMenu extends MenuBase {
	children?: IFSubMenu[]
}

const menus: {
	menus: IFSubMenu[];
	[index: string]: IFSubMenu[];
} = {
	menus: [
		// 菜单相关路由
		{ 
			path: '/',
			title: '首页',
			component: Dashboard,
			icon: HomeOutlined
		},
		{
			path: '/button',
			title: '按钮',
			icon: 'SettingFilled',
			children: [
				{
					path: '/button/normal',
					title: '基础按钮',
					component: NormalButoon,
					icon: 'SmileOutlined'
				},
				{
					path: '/button/info',
					title: '提示按钮',
					component: InfoButoon,
					icon: 'SmileOutlined'
				}
			]
		},
		{
			path: '/detail',
			title: '详情',
			component: Detail,
			icon: 'SmileOutlined'
		},
		{
			path: '/test',
			title: '测试',
			component: Test,
			icon: 'SmileOutlined'
		}
	],
	other: [
		{
			path: '/login',
			title: '登录',
			component: Login,
			icon: ''
		}
	]
}

export default menus