import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#ca9381',
                black1: '#f1eeeb',
                accent: '#f4b700'
            },
        },
        options: {
            customProperties: true,
        },
    },
});
