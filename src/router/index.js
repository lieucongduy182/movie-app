import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Movies from '../components/Movies/Movies.vue';
import Actors from '../views/Actors.vue';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/movie/:id',
        name: 'movie',
        component: Movies,
    },
    {
        path: '/actors',
        name: 'actors',
        component: Actors,
    },

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
