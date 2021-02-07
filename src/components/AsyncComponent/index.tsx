import React, { FC } from 'react'
import Loadable from 'react-loadable'
// import { Error } from '@/components'
import NProgress from 'nprogress'
interface defaultPropsInterface {
  loading: any;
  timeout?: number | false | null;
  delay?: number | false | null;
}
interface propsInterface {
  error?: any;
}
// const LoadingComponent: ReactElement = (
//     <div style={{ textAlign: "center", marginTop: 100 }}>
//         <Spin size="large" />
//     </div>
// );

const Loading: FC<propsInterface> = props => {
	NProgress.start()
	// if (props.error) {
	// 	return <Error/>
	// }
	return <></>
}
const DefaultProps: defaultPropsInterface = {
	loading: Loading,
	timeout: 20000, // ms
	delay: 30000, // ms
}
const AsyncComponent = (component: any, callback?: () => void) => {
	return Loadable({
		...DefaultProps,
		loader: component,
		render(loaded: any, props: any) {
			callback && callback()
			NProgress.done()
			const Component = loaded.default
			return <Component {...props} />
		},
	})
}
export default AsyncComponent
