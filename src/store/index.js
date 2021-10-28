import Vue from 'vue'
import Vuex from 'vuex'
import guest from './modules/guest'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        guest
    },
})
