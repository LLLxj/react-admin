import request from '../utils/request'
import LoginProps from '../interfaceProps/system'

const baseUrl = '/apiPro'

class System {
	static login(data: LoginProps): any {
		return request({
			url: `${baseUrl}/auth/login`,
			method: 'post',
			data
		})
	}

	//   static info(data) {
	//     return request({
	//       url: `${baseUrl}/sys/info/` + data,
	//       method: 'get'
	//     })
	//   }

	//   static logout() {
	//     return request({
	//       url: `${baseUrl}/sys/logout`,
	//       method: 'post'
	//     })
	//   }
}

export default System
