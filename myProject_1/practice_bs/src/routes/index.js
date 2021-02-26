import Vue from 'vue';
import VueRouter from 'vue-router';

import Container from '../views/Container.vue';
import Practice from '../views/Practice.vue';
import Offset from '../views/Offset.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            redirect: '/offset'
        },
        {
            path:'/container',
            component: Container,
        },
        {
            path:'/practice',
            component: Practice
        },
        {
            path:'/offset',
            component: Offset
        },
    ]
})