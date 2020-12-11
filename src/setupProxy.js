// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require('http-proxy-middleware')
// import proxy from 'http-proxy-middleware'
module.exports = function (app) {
	app.use(
		createProxyMiddleware('/boss/apiPro', {
			// target: 'http://www.admin.liuzijian.cn/',
			// target: 'http://127.0.0.1:6364/',
			target: 'http://mp.flins.com.cn/boss',
			changeOrigin: true,
			pathRewrite: {
				'^/boss/apiPro': '/boss/apiPro'
			}
		})
	)
}
