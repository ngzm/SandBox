import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Other from './Other.vue';
import Lists from './Lists.vue';
import Detail from './Detail.vue';

Vue.use(VueRouter);

export const routeLink = {
  home: { to: '/', label: 'Home' },
  other: { to: '/other', label: 'Other' },
  detail: { to: '/other/detail', label: 'Detail' },
};

const routes = [
  { path: '/', component: App },
  { path: '/other', component: Other,
    children: [
      { path: '', component: Lists },
      { path: 'detail', component: Detail },
    ],
  },
];
export default new VueRouter({ routes });
