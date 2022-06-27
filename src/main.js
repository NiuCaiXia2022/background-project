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
// svg 第一种
import installIcons from './icons/index'

// svg 第二种
// import  './icons/index'
// import SvgIcon from './components/SvgIcon'

const app = createApp(App)
//  引入 svg
installIcons(app)
// svg 第二种
// app.component('SvgIcon',SvgIcon)

app.use(ElementPlus).use(store).use(router).mount('#app')
