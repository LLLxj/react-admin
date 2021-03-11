import {
	HomeOutlined
} from '@ant-design/icons'
// import {
// 	HomeOutlined,
// 	SettingFilled,
// 	SmileOutlined,
// } from '@ant-design/icons'
import Detail from '@/views/detail'
import Test from '@/views/test'
import AsyncComponent from '@/components/AsyncComponent'
// import LayoutContainer from '@/layout'
export interface MenuBase {
	path: string;
	title: string;
	icon: any;
	component?: any;
	hidden?: boolean;
}

export interface IFSubMenu extends MenuBase {
	routes?: IFSubMenu[];
	hidden?: boolean
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

const Table = AsyncComponent(
	() => import(/* webpackChunkName:'Home' */ '@/views/table/index')
)

const Login = AsyncComponent(
	() => import(/* webpackChunkName:'Home' */ '@/views/login')
)

const Layout = AsyncComponent(
	() => import(/* webpackChunkName:'Home' */ '@/layout')
)

const menus: {
	menus: IFSubMenu[];
	[index: string]: IFSubMenu[];
} = {
	menus: [
		// 菜单相关路由
		{ 
			path: '/dashboard',
			title: '',
			component: Layout,
			icon: HomeOutlined,
			routes: [
				{ 
					path: '/dashboard',
					title: '首页',
					component: DashBoard,
					icon: HomeOutlined
				}
			]
		},
		{
			path: '/user',
			title: '用户管理',
			icon: 'SettingFilled',
			component: Layout,
			routes: [
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
			component: Layout,
			icon: 'SmileOutlined',
			routes: [
				{
					path: '/detail',
					title: '详情',
					component: Detail,
					icon: 'SmileOutlined'
				}
			]
		},
		{
			path: '/test',
			title: '测试',
			component: Layout,
			icon: 'SmileOutlined',
			routes: [
				{
					path: '/test',
					title: '测试',
					component: Test,
					icon: 'SmileOutlined'
				}
			]
		},
		{
			path: '/table',
			title: '表格测试',
			component: Layout,
			icon: 'SmileOutlined',
			routes: [
				{
					path: '/table',
					title: '表格测试',
					component: Table,
					icon: 'SmileOutlined'
				}
			]
		},
		{
			path: '/login',
			title: '登录',
			component: Login,
			icon: 'SmileOutlined',
			hidden: true
		}
	]
}

export default menus