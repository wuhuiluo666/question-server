const Mock = require('mockjs')
const getComponentList = require('./getCompList')

const Random = Mock.Random

const getQuestionList = ({ pageSize, isStar, isDeleted }) => {
  const list = []
  for (let i = 0; i < pageSize; i++) {
    list.push({
      _id: Random.id(),
      title: Random.ctitle(),
      isPublished: Random.boolean(),
      isStar,
      answerCount: Random.natural(50, 100),
      createdAt: Random.datetime(),
      isDeleted
    })
  }
  return list
}

module.exports = [
  // 获取单个问卷信息
  {
    url: '/api/question/:id',
    method: 'get',
    response: () => ({
      error: 0,
      data: {
        id: Random.id(),
        title: Random.name(),
        desc: '',
        js: '',
        css: '',
        isPublished: false,
        componentsList: getComponentList()
      }
    })
  },
  // 创建问卷11
  {
    url: '/api/question',
    method: 'post',
    response: () => ({
      error: 0,
      data: {
        id: Random.id()
      }
    })
  },
  // 获取问卷列表
  {
    url: '/api/question',
    method: 'get',
    response: (ctx) => {
      const { url, query = {} } = ctx
      const pageSize = parseInt(query.pageSize) || 10
      const isDeleted = url.indexOf('isDeleted=true') >= 0
      const isStar = url.indexOf('isStar=true') >= 0
      return {
        error: 0,
        data: {
          list: getQuestionList({
            pageSize,
            isStar,
            isDeleted
          }),
          total: 24
        }
      }
    }
  },
  // 标星问卷处理
  {
    url: '/api/question/:id',
    method: 'patch',
    response: () => ({
      error: 0
    })
  },
  // 复制问卷
  {
    url: '/api/question/copy/:id',
    method: 'post',
    response: () => ({
      error: 0,
      data: {
        id: Random.id()
      }
    })
  },
  // 删除问卷
  {
    url: '/api/question',
    method: 'delete',
    response: () => ({
      error: 0
    })
  }
]
