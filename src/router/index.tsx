import React, {Component} from 'react'
import MenuList,  { IFSubMenu, getRouterList } from '@/router/config'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Detail from '@/views/detail'
import Test from '@/views/test'
import UserList from '@/views/user/list'
import UserEdit from '@/views/user/edit'
import { filterRouter } from './filter'
import PrivateRoute from '@/components/PrivateRoute'

const allRoyterMap: any = MenuList.menus.concat(MenuList.other)
const list: any = filterRouter(allRoyterMap)

console.log('------')
console.log(list)
console.log('------')
class Routes extends Component{

	render (): JSX.Element {
		return (
			<>
				{/* <Router>
					<Switch>
						<Route exact path="/user/list" component={UserList}/>
						<Route exact path="/user/add" component={UserEdit}/>
						<Route exact path="/detail" component={Detail}/>
						<Route exact path="/test" component={Test}/>
					</Switch>
				</Router> */}
				{/* <Router>
					<Switch>
						{MenuList.menus.map((item: any, index: number) => {
							return (
								<Route
									path={item.path}
									exact
									key={item.key + index}
									render={(props: any) => {
										return <div className="app-main">
											<item.component {...props} routerList={MenuList.menus} />
										</div>
									}}
								/>
							)
						})}
						<Redirect exact from="/" key="/" to="/manage" />
						<Redirect from="*" key="/error" to="/error" />
					</Switch>
				</Router> */}
				<Router>
					<Switch>
						{list.map((item: any, index: number) => {
							return (
								<PrivateRoute
									path={item.path}
									exact
									key={item.key + index}
									render={(props: any) => {
										return <div className="app-main">
											<item.component {...props} routerList={list} />
										</div>
									}}
								/>
								// <Route
								// 	path={item.path}
								// 	exact
								// 	key={item.key + index}
								// 	render={(props: any) => {
								// 		return <div className="app-main">
								// 			<item.component {...props} routerList={list} />
								// 		</div>
								// 	}}
								// />
							)
						})}
						<Redirect exact from="/" key="/" to="/manage" />
						{/* <Redirect from="*" key="/error" to="/error" /> */}
						{/* <Redirect exact from="/login" key="/login" to="/login" /> */}
					</Switch>
				</Router>
			</>
		)
	}
}


const renderChildRoute = (item: IFSubMenu) => {
	return (
		// <Route key={item.path} exact path={item.path} render={() => <item.component />} />
		<Route key={item.path} exact path={item.path} 
			render={(props: any) => {
				return <div className="app-main">
					<item.component {...props} routerList={MenuList.menus} />
				</div>
			}} 
		/>
	)
}

const renderSubRoute = (subItem: IFSubMenu) => {
	<>
		{subItem.children!.map((sub: IFSubMenu) => {	
			return (
				renderChildRoute(sub)
			)
		})}
	</>
}

export default Routes
