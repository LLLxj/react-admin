import {
	HomeOutlined,
	SettingFilled,
	SmileOutlined,
} from '@ant-design/icons'
import Detail from '@/views/detail'
import Test from '@/views/test'
import Layout from '@/layout'
// import loadable from '@loadable/component'
import { RouteComponentProps } from 'react-router'
import AsyncComponent from '@/components/AsyncComponent'
export interface MenuBase {
	path: string;
	title: string;
	icon: any;
	component?: any
	// component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
}

export interface IFSubMenu extends MenuBase {
	children?: IFSubMenu[]
}
const DashBoard = AsyncComponent(
	() => import(/* webpackChunkName:'Home' */ '@/views/dashboard')
)

const UserList = AsyncComponent(
	() => import(/* webpackChunkName:'Home' */ '@/views/user/list')
)

const UserEdit = AsyncComponent(
	() => import(/* webpackChunkName:'Home' */ '@/views/user/edit')
)

const Login = AsyncComponent(
	() => import(/* webpackChunkName:'Home' */ '@/views/login')
)

const constantRoutes = [
	{
		path: '',
		title: '',
		component: Layout,
		icon: 'SmileOutlined'
	},
	{
		path: '/login',
		title: '登录',
		component: Login,
		icon: 'SmileOutlined'
	}
	// {
	// '/': {
	// 	name: 'layout',
	// 	component: Layout,
	// },
	// '/login': {
	// 	name: '登录',
	// 	component: Login,
	// },
	// '/manage': {
	// 	name: '管理后台',
	// 	component: Layout,
	// },
]

const asyncRoutesMap: {
	menus: IFSubMenu[];
	[index: string]: IFSubMenu[];
} =	 {
	menus: [
		{
			path: '/user',
			title: '用户管理',
			icon: 'SettingFilled',
			children: [
				{
					path: 'list',
					title: '用户列表',
					component: UserList,
					icon: 'SmileOutlined'
				},
				{
					path: 'add',
					title: '新增用户',
					component: UserEdit,
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
	]
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
			component: DashBoard,
			icon: HomeOutlined
		},
		{
			path: '/user',
			title: '用户管理',
			icon: 'SettingFilled',
			children: [
				{
					path: '/user/list',
					title: '用户列表',
					component: UserList,
					icon: 'SmileOutlined'
				},
				{
					path: '/user/add',
					title: '新增用户',
					component: UserEdit,
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
		},
		{
			path: '/login',
			title: '登录',
			component: Login,
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

export const getRouterList = (): any => {
	return {
		...constantRoutes,
		...asyncRoutesMap
	}
}

// export { getRouterList }
export default menus