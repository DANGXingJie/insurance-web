import request from '@/utils/http.ts'

/**
 * 获取用户列表
 * @param params
 * @returns
 */
export const getUserList = (params: object) => {
  return request.get('/user/list', params)
}

/**
 * 获取用户信息
 * @param params
 * @returns
 */
export const getUserInfo = (params: object) => {
  return request.get('/user/info', params)
}
