import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from './router'

Vue.config.productionTip = false

new Vue({
    vuetify,
    store,

    created() {
        AOS.init()
    },

    router,
    render: (h) => h(App)
}).$mount('#app')
