import axios from 'axios'
import QS from 'qs' // 引入qs模块，用来序列化post类型的数据
import { Message } from 'element-ui'

// 设置接口的默认地址：配置请求URL的统一前缀，后续无需在每个API接口重复写
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'

// 设置默认请求超时时间
axios.defaults.timeout = 10000

// 设置请求拦截器
axios.interceptors.request.use(
  config => {
    // 在请求头中使用 Authorization 字段提供 token 令牌
    config.headers.Authorization = sessionStorage.getItem('token')
    return config
  },
  error => {
    // 抛出请求错误信息
    Promise.reject(error.response)
  }
)

// 设置响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data
    } else {
      Message.error('请求数据发生错误，请联系技术人员')
    }
  },
  error => {
    // 请求失败处理
    const { response } = error
    if (response) {
      // 服务器已返回结果，但是状态码不在2xx系列
      handleError(response.status, response.data.message)
      return Promise.reject(response)
    } else {
      // 服务器未返回结果
      if (!window.navigator.onLine) {
        // 处理断网的情况：跳转到断网页面，或者断网组件提示
        Message.error('请求超时')
      }
      return Promise.reject(error)
    }
  }
)

/**
 * 请求失败后根据错误状态码统一处理
 * @param {Number} status 请求失败的状态码
 */
const handleError = (status, other) => {
  // 根据状态码做不同处理
  switch (status) {
    // 401: 未登录
    // 未登录则跳转到登录页面，并携带请求页面的路径
    // 在登录成功后重定向到请求页面，这一步需要在登录页操作
    case 401:
      /* redirect to login page */
      break
    // 403：token过期
    // 登录过期对用户进行提示
    // 清除本地token和store中的token
    // 跳转到登录页面，并携带重定向路由
    case 403:
      Message.error('登录过期，请重新登录')
      // localStorage.removeItem("token");
      // store.commit('loginSuccess', null);
      setTimeout(() => {
        /* redirect to login page */
      }, 1000)
      break
    // 404请求不存在
    case 404:
      Message.error('请求的资源不存在')
      break
    default:
      Message.error(other)
  }
}

/**
 * 封装get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url) {
  return function(params = {}) {
    return axios.get(url, { params })
  }
}

/**
 * 封装post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url) {
  return function(params = {}) {
    return axios.post(url, QS.stringify(params, { indices: false }))
  }
}
