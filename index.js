const cors = require('koa2-cors')
const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()


app.use(cors({
  origin:"*", // 允许所有域名请求
  maxAge: 5, // 本次预检请求的有效期，单位为秒。
  methods:['GET','POST'],  // 所允许的HTTP请求方法
  alloweHeaders:['Conten-Type'], // 服务器支持的所有头信息字段
  credentials: true // 是否允许发送Cookie
}))


const router = new Router()

const mockList = require('./mock/index')

const getRes = async (fn, ctx) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = fn(ctx)
      resolve(res)
    }, 1000)
  })
}

// 注册mock路由

mockList.forEach((mock) => {
  const { url, method, response } = mock
  router[method](url, async (ctx) => {
    const res = await getRes(response, ctx)
    ctx.body = res
  })
})

app.use(router.routes())
app.listen(3001)
