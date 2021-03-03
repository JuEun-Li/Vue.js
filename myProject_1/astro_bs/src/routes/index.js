import Vue from 'vue';
import VueRouter from 'vue-router';

import AstroHome from '../views/AstroHome.vue';
import List from '../views/List.vue';
import Planet from '../views/Planet.vue';
import Planet2 from '../views/Planet2.vue';
import Satellite from '../views/Satellite.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            redirect: '/home'
        },
        {
            path:'/home',
            component: AstroHome
        },
        {
            path:'/planet',
            component: Planet
        },
        {
            path:'/planet2',
            component: Planet2
        },
        {
            path:'/satellite',
            component: Satellite
        },
        {
            path:'/list',
            component: List
        },
        {
            path:'/login',
            component: Login
        },
    ]
})