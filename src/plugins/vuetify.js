import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        light: true,
        dark: false,
        themes: {
            light: {
                primary: '#FE5B02',
                background: '#E8E8E8',
                secondary: '#241f21',
            },
            dark: {
                primary: '#FE5B02',
                secondary: '#E8E8E8',
                background: '#241f21'
            }
        }
    }
});
