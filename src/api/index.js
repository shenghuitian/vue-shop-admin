/**
 * api接口的统一出口
 */
import { get, post } from './http'

const API = {
  /* 登录请求 */
  login: post('/login'),
  /* 用户管理 */
  getUserList: get('/users'),
  addUser: post('/users'),

  /* 获取菜单列表 */
  getMenuList: get('/menus')
}

// 导出接口
export default API
