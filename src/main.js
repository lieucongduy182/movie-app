import Vue from 'vue';
import App from './App.vue';
import router from './router';

import '@/assets/css/styles.css';
import api from './services/api.js';

Vue.prototype.$http = api;
Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
