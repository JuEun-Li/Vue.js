import Vue from 'vue';
import VueRouter from 'vue-router';

import AstroHome from '../views/AstroHome.vue';

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
    ]
})