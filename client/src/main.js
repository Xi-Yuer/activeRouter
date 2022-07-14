import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import App from './App.vue'

import '@/assets/css/base.css'
import '@/assets/font/iconfont.css'

// 注册路由
import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia).use(router).use(ElementPlus).mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
