import { createApp } from 'vue'
import './style.css'
import router from './router/routerBeforeEach'
import App from './App.vue'
import i18n from './i18n/index.ts'
import { setupStore } from './stores'

const app = createApp(App)
setupStore(app)
app.use(router).use(i18n).mount('#app')
