import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './routes/index.js';
import i18n from "@/i18n.js";

// PrimeVue CSS
import 'primeflex/primeflex.css';
import Toast from "primevue/toast";
import Toolbar from "primevue/toolbar";
import ConfirmDialog from "primevue/confirmdialog";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import SelectButton from "primevue/selectbutton";

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
    .component('pv-select-button', SelectButton)
    .component('pv-toast', Toast)
    .component('pv-toolbar', Toolbar)

// Vue i18n
app.use(i18n);

// Mount App
app.mount('#app');
