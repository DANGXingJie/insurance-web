import router from './index'

router.beforeEach((to, from, next) => {
  console.log('beforeEach', to, from)
  next()
})

router.beforeResolve(async (to) => {
  console.log('%c [ 全局解析守卫 ]-11', 'font-size:13px; background:pink; color:#bf2c9f;', to)
})

router.afterEach((to, from) => {
  console.log('%c [ 全局后置守卫 ]-27', 'font-size:13px; background:pink; color:#bf2c9f;', to, from)
})
router.onError((error) => {
  if (error.name === 'NavigationDuplicated') {
    // 处理重复导航
  } else {
    // 处理其他错误
  }
})

export default router
