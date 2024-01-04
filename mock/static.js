const Mock = require('mockjs')
const getCompList = require('./getCompList')
const Random = Mock.Random

const getQuestionList = (len = 10) => {
  let res = []
  const compList = getCompList()
  for (let i = 0; i < len; i++) {
    let staticItem = {
      _id: Random.id()
    }
    compList.forEach((c) => {
      const { fe_id, type, props } = c
      switch (type) {
        case 'questionInput': {
          staticItem[fe_id] = Random.ctitle()
          break
        }
        case 'questionTextarea:': {
          staticItem[fe_id] = Random.ctitle()
        }
        case 'questionRadio': {
          staticItem[fe_id] = props.options[0].value
          break
        }
        case 'QuestionCheckbox': {
          staticItem[fe_id] = `${props.list[0].value},${props.list[1].value}`
          break
        }
      }
    })
    res.push(staticItem)
  }
  return res
}

module.exports = [
  {
    url: '/api/static/:id',
    method: 'get',
    response: () => ({
      error: 0,
      data: {
        total: 100,
        list: getQuestionList()
      }
    })
  },
  {
    url: '/api/static/:questionId/:componentId',
    method: 'get',
    response: () => ({
      error: 0,
      data: {
        chartList: [
          { name: '选项1', count: 10 },
          { name: '选项2', count: 20 },
          { name: '选项3', count: 30 }
        ]
      }
    })
  }
]
