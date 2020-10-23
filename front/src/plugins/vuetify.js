import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#03a9f4",//blue
                secondary: "#607d8b",//grey
                accent: "#2196f3",//blue
                error: "#ff5722", //Orange
                warning: "#ffc107",//Amber
                info: "#ffeb3b",//Yellow
                success: "#4caf50",//Green
                incorrect: colors.pink.accent3,
                neutral: colors.grey.lighten5
                }
        }
    }
});
