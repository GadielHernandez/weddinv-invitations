import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#c8966b',
                black1: '#f1eeeb',
                accent: '#f4b700',

                'primary-dashboard': '#34a4ae'
            },
        },
        options: {
            customProperties: true,
        },
    },
});
