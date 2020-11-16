// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require('http-proxy-middleware')
// import proxy from 'http-proxy-middleware'
module.exports = function (app) {
	app.use(
		createProxyMiddleware('/apiPro', {
			// target: 'http://www.admin.liuzijian.cn',
			target: 'http://127.0.0.1:6364/',
			changeOrigin: true,
			pathRewrite: {
				'^/apiPro': ''
			}
		})
	)
}
