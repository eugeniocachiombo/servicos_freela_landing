import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/bootstrap-5.0.2/css/bootstrap.css';
import './assets/bootstrap-5.0.2/js/bootstrap.js';
import './assets/fontawesome/css/all6.css';
/*import './assets/aos/aos.css';
import './assets/aos/aos.js';*/
import './assets/css/main.css'




createApp(App).use(router).mount('#app')
