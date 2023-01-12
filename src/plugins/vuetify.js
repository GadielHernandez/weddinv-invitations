import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#7e895a',
                black1: '#c2c8b1',
                accent: '#f4b700',
                light: '#ecede8'
            },
        },
        options: {
            customProperties: true,
        },
    },
});
