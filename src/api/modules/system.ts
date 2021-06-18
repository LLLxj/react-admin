/*
 * @author: lzj
 * @Date: 2020-11-16 11:43:37
 * @LastEditTime: 2021-03-16 14:55:58
 */
import request from '../../utils/request'
import LoginProps from '../../interfaceProps/system'

const baseUrl = '/apiPro'

class System {
	static login(data: LoginProps): any {
		return request({
			url: `${baseUrl}/sys/login`,
			method: 'post',
			data
		})
	}

	static info(data: string): any {
		return request({
			url: `${baseUrl}/sys/info/` + data,
			method: 'get'
		})
	}
}

export default System
