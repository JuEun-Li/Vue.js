import Vue from 'vue';
import VueRouter from 'vue-router';
// import 'firebase/firebase-firestore';

import AstroHome from '../views/AstroHome.vue';
import AstroPlanet from '../views/AstroPlanet.vue';
import Planet2 from '../views/Planet2.vue';
import AstroSatellite from '../views/AstroSatellite.vue';
import Satellite2 from '../views/Satellite2.vue';
import Login from '../views/Login.vue';
import AstroList from '../views/board/AstroList.vue';
import Chatting from '../views/Chatting.vue';

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
        component: AstroHome,
    },
    {
        path:'/planet',
        component: AstroPlanet,
    },
    {
        path:'/planet2',
        component: Planet2,
    },
    {
        path:'/satellite',
        component: AstroSatellite,
    },
    {
        path:'/satellite2',
        component: Satellite2,
    },
    {
        path:'/login',
        component: Login,
    },
    {
        path:'/list',
        component: AstroList,
    },
    {
        path:'/chatting',
        component: Chatting
    }

    ]
});