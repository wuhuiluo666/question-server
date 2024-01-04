const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const cors = new cors()
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

app.use(cors())
app.use(router.routes())
app.listen(3001)
