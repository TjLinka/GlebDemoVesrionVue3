/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import router from './router'

// Prime Vue Component's
import "primevue/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import Button from "primevue/button"
// Prime Vue Component's END

const app = createApp(App)

app.component('Button', Button);
app.use(PrimeVue);
app.use(createPinia())
app.use(router)

app.mount('#app')
