import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const html = document.documentElement

html.removeAttribute('class')
html.removeAttribute('data-theme')
html.setAttribute('data-theme', 'light')
localStorage.setItem('theme', 'light')

console.log('HTML attributes after reset:')
console.log('class:', html.getAttribute('class'))
console.log('data-theme:', html.getAttribute('data-theme'))

createApp(App).mount('#app')