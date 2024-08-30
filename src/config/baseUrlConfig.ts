//baseURL配置管理
// #环境标识
// VITE_ENV="生产环境||开发环境"
// #基础服务
// VITE_BASE_URL="http://localhost:3000"
// #每日一言服务
// VITE_BASE_URL_YIYAN_SERVICE="https://tenapi.cn"
// #电影服务
// VITE_BASE_URL_MOVIE_SERVICE="https://api.52vmy.cn/api"
const config = {
  VITE_ENV: import.meta.env.VITE_ENV,
  VITE_BASE_URL: import.meta.env.VITE_BASE_URL,
  VITE_BASE_URL_YIYAN_SERVICE: import.meta.env.VITE_BASE_URL_YIYAN_SERVICE,
  VITE_BASE_URL_MOVIE_SERVICE: import.meta.env.VITE_BASE_URL_MOVIE_SERVICE,
}
const serviceUrls = {
  env: config.VITE_ENV,
  baseService: config.VITE_BASE_URL,
  yiyanService: config.VITE_BASE_URL_YIYAN_SERVICE,
  moviceService: config.VITE_BASE_URL_MOVIE_SERVICE,
}
export default serviceUrls
