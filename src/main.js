import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from './firebase/config'
import './assets/global.css'

let app;

auth.onAuthStateChanged(()=>{
    if(!app){
        createApp(App).use(store).use(router).mount('#app')
    }
})
