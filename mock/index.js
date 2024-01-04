const test = require('./test')
const question = require('./question')
const user = require('./user')
const static = require('./static')
const mockList = [...test, ...question, ...user, ...static]

module.exports = mockList
