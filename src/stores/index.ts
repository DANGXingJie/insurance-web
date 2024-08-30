import { createPinia } from 'pinia'
import type { App } from 'vue'
//pinia持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const store = createPinia()
store.use(piniaPluginPersistedstate)
export function setupStore(app: App<Element>) {
  app.use(store)
}
