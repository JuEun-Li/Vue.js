import Vue from 'vue';
import VueRouter from 'vue-router'; // 뷰 라우터 사용

import AstroHome from '../views/AstroHome.vue';
import AstroPlanet from '../views/AstroPlanet.vue';
import AstroSatellite from '../views/AstroSatellite.vue';
import AstroQuiz from '../views/AstroQuiz.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
        path:'/home',
        // 특정 url 주소로 갔을 때 표시될 컴포넌트
        component:'AstroHome',
    },
    {
        path:'/planet',
        component:'AstroPlanet',
    },
    {
        path:'/satellite',
        component:'AstroSatellite',
    },
    {
        path:'/quiz',
        component:'AstroQuiz',
    }

    ]
});