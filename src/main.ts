import './assets/main.scss'
import type { App as VueApp } from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//firebase auth service
import { projectAuth } from './firebase/config'


let app: VueApp | null = null;

projectAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App)
        app.use(router)
        app.mount('#app')
    }
})
