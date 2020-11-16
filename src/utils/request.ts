import axios from 'axios'
import Auth from './auth'
import { message } from 'antd'

const service = axios.create({
	baseURL: process.env.BASE_API,
	timeout: 15000 // 请求超时时间
})

console.log(service)

service.interceptors.request.use(config => {
	config.headers['Token'] = Auth.getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
	return config
}, error => {
	// Do something with request error
	console.log(error) // for debug
	Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
// response => response,
// response => response,
	(response) => {
		console.log(response)
		/**
		* code为非20000是抛错 可结合自己业务进行修改
		*/
		const res = response.data
		if (res.code !== 200) {
			// 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
			if (res.code === 50008 || res.code === 50012 || res.code === 50014 || res.code === 5002 || res.code === 1132 ) {
				Auth.removeToken
				// router.push({ name: 'login' })
			}
			return response
		} 
		return response
	}, error => {
		console.log('err' + error)// for debug
		message.error(error.msg)
		return Promise.reject(error)
	}
)

export default service