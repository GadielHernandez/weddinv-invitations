import Vue from 'vue'
import VueRouter from 'vue-router'
import Invitation from '../views/Invitation.vue'

Vue.use(VueRouter)

const routes = [
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
