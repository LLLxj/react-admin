// eslint-disable-next-line @typescript-eslint/no-var-requires
// const proxy = require('http-proxy-middleware')
const { createProxyMiddleware } = require('http-proxy-middleware')
// import proxy from 'http-proxy-middleware'
module.exports = function (app) {
	app.use(
		createProxyMiddleware('/apiPro', {
			target: process.env.BASE_HOST,
			changeOrigin: true,
			pathRewrite: {
				'^/apiPro': ''
			}
		})
	)
}
