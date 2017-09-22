import App from './App.vue';
import Other from './Other.vue';
import Lists from './Lists.vue';
import Detail from './Detail.vue';

export const routes = [
  { path: '/', component: App },
  { path: '/other', component: Other,
    children: [
      { path: '', component: Lists },
      { path: 'detail', component: Detail },
    ],
  },
];

export const routeTag = ` 
  <p>
    <router-link to="/">App Comp</router-link>
    <router-link to="/other">Other Comp</router-link>
  </p>
`;
