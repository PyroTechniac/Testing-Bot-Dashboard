import Vue from 'vue';
import marked from 'marked';
import VueHightlightJS from 'vue-highlightjs';

import Buefy from 'buefy';

import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueHightlightJS);

Vue.use(Buefy, { defaultIconPack: 'fa' });


new Vue({
    el: '#app',
    render(el) {
        return el(App);
    }
});