import request from '@/utils/http.ts'

//每日一言
export function getCardList() {
  return request.get('/v2/yiyan')
}
