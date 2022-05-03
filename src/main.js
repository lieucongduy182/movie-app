import Vue from 'vue';
import App from './App.vue';
import router from './router';

import '@/assets/css/styles.css';
import api from './services/api.js';
import Carousel3d from 'vue-carousel-3d';

Vue.prototype.$http = api;
Vue.config.productionTip = false;
Vue.use(Carousel3d);

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
