import { createI18n, LocaleMessages } from 'vue-i18n'

interface Modules {
  [key: string]: unknown
}

interface Messages {
  [lang: string]: LocaleMessages<Record<string, unknown>>
}

const getMessages = async (modules: Modules, languages: string[]): Promise<Messages> => {
  const messages: Messages = {}

  // 初始化空语言结构
  languages.forEach((lang) => {
    messages[lang] = {}
  })

  // 使用 Promise.all 处理并行加载
  await Promise.all(
    Object.keys(modules).map(async (moduleName) => {
      await Promise.all(
        languages.map(async (lang) => {
          try {
            const { default: obj } = await import(`./modules/${moduleName}/${lang}.ts`)
            messages[lang][moduleName] = obj
          } catch (e) {
            console.warn(`Missing ${moduleName}/${lang} translation:`, e)
          }
        })
      )
    })
  )
  return messages
}

const modules: Modules = {
  base: {},
  user: {},
} // 模块对象
const languages = ['en', 'zh-cn'] // 语言数组
// 初始化时需要异步获取
const messages = await getMessages(modules, languages)

const i18n = createI18n({
  legacy: false,
  locale: 'zh-cn',
  fallbackLocale: 'en',
  messages, // 现在这里接收的是完整的 messages 对象
})
export default i18n
