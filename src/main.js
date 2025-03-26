import './assets/main.css'
import './styles/tailwind.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from './icons/fontawesome'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
