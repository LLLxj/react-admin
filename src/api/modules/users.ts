/*
 * @author: lzj
 * @Date: 2020-12-16 17:48:15
 * @LastEditTime: 2021-03-16 15:40:54
 */
import request from '@/utils/request'
import { AxiosPromise } from 'axios'

const baseUrl = '/apiPro'

interface UserSearchProp {
  username?: string;
  tel?: string;
}

// class Users {
// 	static list(data: UserSearchProp): any {
// 		return request({
// 			url: `${baseUrl}/api/users/list`,
// 			method: 'get',
// 			params: data 
// 		})
// 	}

// 	static info(data: string): any {
// 		return request({
// 			url: `${baseUrl}/user/info/` + data,
// 			method: 'get'
// 		})
// 	}
// }
export const list = (params: UserSearchProp): AxiosPromise<any> => {
  return request({
    url: `${baseUrl}/api/users/list`,
    method: 'get',
    params: params 
  })
}