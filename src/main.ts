import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ui from "@nuxt/ui/vue-plugin";

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(ui)
app.use(router)

app.mount('#app')
