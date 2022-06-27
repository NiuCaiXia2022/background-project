import { createApp } from 'vue'
// 安装element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局样式 (2种、App也可以)
// import "./style/index.scss"
// 图标
import './iconfont/iconfont.css'
const app = createApp(App)
app.use(ElementPlus).use(store).use(router).mount('#app')
