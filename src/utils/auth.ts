import Cookies from 'js-cookie'

const TokenKey = 'l-token'

class Auth {
	static getToken = (): any => {
		return Cookies.get(TokenKey)
	}
	
	static  setToken = (token: string): any => {
		return Cookies.set(TokenKey, token)
	}
	
	static removeToken = (): any => {
		return Cookies.remove(TokenKey)
	}
}



export default Auth



