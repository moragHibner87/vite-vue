import { createApp } from 'vue'
import './index.scss'
import App from './App.vue'

createApp(App)
    .provide('isDarkMode', false)
    .mount('#app')
