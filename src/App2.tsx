import React, { FC } from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
// import {} from '@/router/config'
import MenuList, { getRouterList } from '@/router/config'


// const routerList: any = getRouterList()

const App: FC = () => {
   
	return (
		<Router>
			<Switch>
				{MenuList.menus.map((item: any) => {
					return (
						<Route
							path={item.path}
							exact={item.exact}
							key={item.path}
							render={(props: any) => {
								return <div className="app-main">
									<item.component {...props} routerList={MenuList.menus} />
								</div>
							}}
						/>
					)
				})}
				<Redirect exact from="/" to="/manage" />
				<Redirect from="*" to="/error" />
			</Switch>
		</Router>
	)
}

export default App
