const Mock = require('mockjs')

const Random = Mock.Random

module.exports = [
  // 获取userinfo
  {
    url: '/api/user/info',
    method: 'get',
    response: () => ({
      error: 0,
      data: {
        userName: Random.title(),
        nickName: Random.cname()
      }
    })
  },
  // 注册
  {
    url: '/api/user/register',
    method: 'post',
    response: () => ({
      error: 0
    })
  },
  // 登录
  {
    url: '/api/user/login',
    method: 'post',
    response: () => ({
      error: 0,
      data: {
        token: Random.word(20)
      }
    })
  }
]
