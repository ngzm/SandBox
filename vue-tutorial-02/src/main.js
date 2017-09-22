import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';

import AppMain from './AppMain.vue';
import { routes } from './route';
import '../node_modules/vuetify/dist/vuetify.min.css';

Vue.use(VueRouter);
Vue.use(Vuetify);

const router = new VueRouter({ routes });

new Vue({
  el: '#app',
  template: '<AppMain />',
  components: { AppMain },
  router,
});
