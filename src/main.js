import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
createApp(App)
.use(router)
.mount('#app')