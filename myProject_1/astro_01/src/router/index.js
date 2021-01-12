import Vue from 'vue'
import VueRouter from 'vue-router' // 뷰 라우터 사용

import AstroHeader from './components/AstroHeader.vue'
import AstroBackground from './components/AstroBackground.vue'
import AstroMain from './components/AstroMain.vue'
import AstroFooter from './components/AstroFooter.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
        name: main-page,
        path:'/main',
        // 특정 url 주소로 갔을 때 표시될 컴포넌트
        component:'Astro_Main'
    },
    {
        name: page_story,
        path:'/planet',
        component:'Astro_planet'
    },
    {
        name: page_satellite,
        path:'/satellite',
        component:'Astro_Satallite'
    },
    {
        name: page_quiz,
        path:'/quiz',
        component:'Astro_Quiz'
    }

    ]
})