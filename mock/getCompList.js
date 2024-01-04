const Mock = require('mockjs')

const Random = Mock.Random

function getComponentList() {
  return [
    {
      fe_id: 1,
      type: 'questionTitle',
      title: '组件123',
      isHidden: false,
      isLocked: false,
      props: { text: '测试标题', level: 1, isCenter: false }
    },
    {
      fe_id: 2,
      type: 'questionInput',
      title: '组件456',
      isHidden: false,
      isLocked: false,
      props: { title: '姓名', placeholder: '请输入姓名...' }
    },
    {
      fe_id: 3,
      type: 'questionInput',
      title: '组件789',
      isHidden: false,
      isLocked: false,
      props: { title: '年龄', placeholder: '请输入年龄' }
    },
    {
      fe_id: 4,
      type: 'questionParagraph',
      title: '组件abc',
      isHidden: false,
      isLocked: false,
      props: { text: '我是一个段落', isCenter: false }
    },
    {
      fe_id: 5,
      type: 'questionInfo',
      title: '组件qaq',
      isHidden: false,
      isLocked: false,
      props: { title: '问卷标题', desc: '问卷描述' }
    },
    {
      fe_id: 6,
      type: 'questionTextArea',
      title: '组件fis',
      isHidden: false,
      isLocked: false,
      props: { title: '输入框标题', placeholder: 'placeholder' }
    },
    {
      fe_id: 7,
      type: 'questionRadio',
      title: '组件qxc',
      isHidden: false,
      isLocked: false,
      props: {
        title: '单选框标题',
        value: 'item1',
        options: [
          { text: '选项1', value: 'item1' },
          { text: '选项2', value: 'item2' },
          { text: '选项3', value: 'item3' }
        ]
      }
    },
    {
      fe_id: 8,
      type: 'QuestionCheckbox',
      title: '组件fak',
      isHidden: false,
      isLocked: false,
      props: {
        options: [
          { text: '选项1', value: 'item1', checked: false },
          { text: '选项2', value: 'item2', checked: false },
          { text: '选项3', value: 'item3', checked: false }
        ],
        isVertical: false,
        title: '复选框标题'
      }
    }
  ]
}

module.exports = getComponentList
