import { createWebHistory, createRouter } from 'vue-router';

import HomePage from '@/components/HomePage.vue';
import ContactPage from '@/components/ContactPage.vue';
import GamesPage from '@/components/GamesPage.vue';
import AboutPage from '@/components/AboutPage.vue';


const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/contact",
        name: "ContactPage",
        component: ContactPage,
    },
    {
        path: "/games",
        name: "GamesPage",
        component: GamesPage,
    },
    {
        path: "/about",
        name: "AboutPage",
        component: AboutPage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router