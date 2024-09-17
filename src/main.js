import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './routes/index.js';
import Dialog from "primevue/dialog";
import Button from "primevue/button";

// PrimeVue CSS
import 'primeflex/primeflex.css';
import Toast from "primevue/toast";
import Toolbar from "primevue/toolbar";
import ConfirmDialog from "primevue/confirmdialog";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

const app = createApp(App);

// Router
app.use(router);

// PrimeVue
app.use(PrimeVue, {ripple: true})
    .component('pv-button', Button)
    .component('pv-confirm-dialog', ConfirmDialog)
    .component('pv-column', Column)
    .component('pv-data-table', DataTable)
    .component('pv-dialog', Dialog)
    .component('pv-toast', Toast)
    .component('pv-toolbar', Toolbar)

// Mount App
app.mount('#app');
