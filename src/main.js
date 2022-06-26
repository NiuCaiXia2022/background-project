import { createApp } from 'vue'
// 安装element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App)
app.use(ElementPlus).use(store).use(router).mount('#app')
