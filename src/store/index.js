import Vue from 'vue'
import Vuex from 'vuex'
import invitation from './modules/invitation'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        invitation
    },
})
