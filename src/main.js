import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './i18n.mjs'

const html = document.documentElement

const savedTheme = localStorage.getItem('theme') || 'light'

html.removeAttribute('class')
html.setAttribute('data-theme', savedTheme)

createApp(App).use(i18n).mount('#app')
