const Koa = require('koa')
const Router = require('koa-router')
const Cors = require('cors')

const app = new Koa()
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

app.use(Cors())
app.use(router.routes())
app.listen(3001)
