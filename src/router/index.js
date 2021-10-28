import Vue from 'vue'
import VueRouter from 'vue-router'
import Invitation from '../views/Invitation.vue'
import Dashboard from '../views/dashboard.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/dashboard/:wedding?',
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/:wedding?',
        name: 'Invitation',
        component: Invitation,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
