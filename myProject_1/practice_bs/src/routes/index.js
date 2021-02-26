import Vue from 'vue';
import VueRouter from 'vue-router';

import Container from '../views/Container.vue';
import Practice from '../views/Practice.vue';
import Offset from '../views/Offset.vue';
import T1 from '../views/T1.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            redirect: '/T1'
        },
        {
            path:'/container',
            component: Container,
        },
        {
            path:'/practice',
            component: Practice,
        },
        {
            path:'/offset',
            component: Offset,
        },
        {
            path:'/T1',
            component: T1
        },
    ]
})