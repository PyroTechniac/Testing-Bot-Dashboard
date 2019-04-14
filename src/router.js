import Vue from 'vue';
import Router from 'vue-router';
import Stats from './components/Stats.vue';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/stats', name: 'stats', component: Stats }
    ]
});