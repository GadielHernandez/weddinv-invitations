import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#d49985',
                black1: '#f1eeeb',
                accent: '#f4b700',
                'primary-dashboard': '#34a4ae',
                'blue-custom': '#cbd5e1',
                'pink-custom': '#f4d6d6'
            },
        },
        options: {
            customProperties: true,
        },
    },
});
