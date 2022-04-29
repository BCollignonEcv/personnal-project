import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.page.vue'
import Template from '../pages/Template.page.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/template',
            name: 'template',
            component: Template
        }
    ]
})

export default router;