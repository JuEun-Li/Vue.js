import Vue from 'vue';
import VueRouter from 'vue-router';
import AstroHome from '../views/AstroHome.vue';
import AstroPlanet from '../views/AstroPlanet.vue';
import AstroQuiz from '../views/AstroQuiz.vue';
import AstroSatellite from '../views/AstroSatellite.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: AstroHome,
        },
        {
            path: '/planet',
            component: AstroPlanet,
        },
        {
            path: '/satellite',
            component: AstroSatellite,
        },
        {
            path: '/quiz',
            component: AstroQuiz
        }
    ]
});