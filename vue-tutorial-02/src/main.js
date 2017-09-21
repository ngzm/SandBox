import Vue from 'vue';
import VueRouter from 'vue-router';

import AppComp from './App.vue';
import Other from './Other.vue';
import Lists from './Lists.vue';
import Detail from './Detail.vue';

Vue.use(VueRouter);

const template = `
<div>
  <p>
    <router-link to="/">App Comp</router-link>
    <router-link to="/other">Other Comp</router-link>
  </p>
  <router-view></router-view>
</div>
`;

const routes = [
  { path: '/', component: AppComp },
  { path: '/other', component: Other,
    children: [
      { path: '', component: Lists },
      { path: 'detail', component: Detail },
    ],
  },
];

const router = new VueRouter({ routes });

new Vue({
  el: '#app',
  template,
  router,
});
