import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './routes/index.js';

const app = createApp(App);

// Router
app.use(router);

// PrimeVue
app.use(PrimeVue, {ripple: true})

// Mount App
app.mount('#app');
