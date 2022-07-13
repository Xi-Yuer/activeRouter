import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'

import '@/assets/css/base.css'
import '@/assets/font/iconfont.css'

// 注册路由
import router from './router'

const pinia = createPinia()
pinia.use(piniaPersist)


createApp(App).use(pinia).use(router).use(ElementPlus).mount('#app')
