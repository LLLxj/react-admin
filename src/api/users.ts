import request from '../utils/request'

const baseUrl = '/apiPro'

interface UserSearchProp {
  username: string,
  tel: string
}

class Users {
	static list(data: UserSearchProp): any {
		return request({
			url: `${baseUrl}/users/list`,
			method: 'get',
			params: data 
		})
	}

	static info(data: string): any {
		return request({
			url: `${baseUrl}/user/info/` + data,
			method: 'get'
		})
	}

	//   static logout() {
	//     return request({
	//       url: `${baseUrl}/sys/logout`,
	//       method: 'post'
	//     })
	//   }
}

export default Users
