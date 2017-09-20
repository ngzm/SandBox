import Vue from 'vue';
import App from './app';
import App2 from './app2.vue';

new Vue({
  el: '#app',
  template: '<App />',
  components: { App },
});

new Vue({
  el: '#app2',
  template: '<App2 />',
  components: { App2 },
});
