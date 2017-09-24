import Vue from 'vue';
import Vuetify from 'vuetify';

import AppMain from './AppMain.vue';
import router from './route';
import store from './store';
import '../node_modules/vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

new Vue({
  el: '#app',
  template: '<AppMain />',
  components: { AppMain },
  router,
  store,
});
