import Mock from 'mockjs'

// Mock.Random 是一个工具类，用于生成各种随机数据
const Random = Mock.Random

// 配置拦截 Ajax 请求时的行为
Mock.setup({
  timeout: 1000 // 配置请求延迟，指定被拦截的 Ajax 请求的响应时间
})

// 根据数据模板生成模拟数据
Mock.mock('/api/user', {
  data: {
    'list|5': [
      // 生成|5个如下格式名字的数据
      {
        'id|+1': 1, // 数字从当前数开始后续依次加一
        name: '@cname', // 名字为随机中文名字
        'age|1-40': 20, // 年龄为1-40之间的随机数字
        'sex|1': ['男', '女'], // 性别是数组中的一个，随机的
        'job|1': ['web', 'UI', 'python', 'php', 'java'], // 工作是数组中的一个
        email: '@email', // 随机邮箱
        city: '@city()', //  city: "扬州市"
        city2: Random.city(true), // city2: "新疆维吾尔自治区 吐鲁番地区"
        county: '@county(true)', // county "澳门特别行政区 离岛 -"
        county2: Random.county(true) // county2: "湖南省 株洲市 茶陵县"
      }
    ]
  }
})
