import { createApp } from 'vue'
import './style.css'
import router from './router/routerBeforeEach'
import App from './App.vue'
import { setupStore } from './stores'
const app = createApp(App)
setupStore(app)
app.use(router).mount('#app')
