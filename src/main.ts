//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import '@/assets/css/color.css'
import '@/assets/css/normalize.css'
import '@/assets/css/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)





app.mount('#app')
