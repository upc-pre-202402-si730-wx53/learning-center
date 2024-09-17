import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './routes/index.js';
import Dialog from "primevue/dialog";
import Button from "primevue/button";

// PrimeVue CSS
import 'primeflex/primeflex.css';

const app = createApp(App);

// Router
app.use(router);

// PrimeVue
app.use(PrimeVue, {ripple: true})
    .component('pv-button', Button)
    .component('pv-dialog', Dialog)

// Mount App
app.mount('#app');
