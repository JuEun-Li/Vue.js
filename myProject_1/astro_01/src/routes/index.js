import Vue from 'vue';
import VueRouter from 'vue-router';
// import 'firebase/firebase-firestore';

// import FullPage from './FullPage.vue';
import fullpage from 'fullpage.js/dist/fullpage.extensions.min';

// import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js';


import AstroHome from '../views/AstroHome.vue';
import AstroPlanet from '../views/AstroPlanet.vue';
import Planet2 from '../views/Planet2.vue';
import AstroSatellite from '../views/AstroSatellite.vue';
import Satellite2 from '../views/Satellite2.vue';
import Login from '../views/Login.vue';
import AstroList from '../views/board/AstroList.vue';
import Chatting from '../views/Chatting.vue';
import FullPage from '../views/FullPage.vue';

Vue.use(VueRouter);
Vue.use(VueFullPage);

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
    },
    {
        path:'/fullpage',
        component: FullPage
    }

    ]
});