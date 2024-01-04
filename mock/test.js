const Mock = require('mockjs')

const Random = Mock.Random

module.exports = [
    {
        url: '/api/test',
        method: 'get',
        response: () => ({
            error: 0,
            data: {
                name: Random.cname()
            }
        })
    }
]