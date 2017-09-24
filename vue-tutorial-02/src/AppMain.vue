<template>
<v-app toolbar footer>

  <!-- Drawer -->
  <v-navigation-drawer
    class="pb-0"
    persistent
    height="100%"
    light
    clipped
    enable-resize-watcher
    v-model="drawer"
  >
    <v-list>
      <template v-for="item in listItems">
        <v-list-tile exact :key="item.id" :to="item.to">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>

  <!-- Toolbar -->
  <v-toolbar class="indigo" dark fixed>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>Toolbar</v-toolbar-title>
  </v-toolbar>

  <!-- Main Contents -->
  <main>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </main>

  <!-- Footer -->
  <v-footer>
    <span>FRENCH CONNECTION</span>
  </v-footer>
</v-app>
</template>

<script>
import { routeLink } from './route';

export default {
  data() {
    return {
      drawer: true,
      listItems: [
        { id: 1, title: routeLink.home.label, icon: 'home', to: routeLink.home.to },
        { id: 2, title: routeLink.other.label, icon: 'trending_up', to: routeLink.other.to },
        { id: 3, title: routeLink.detail.label, icon: 'history', to: routeLink.detail.to },
        { id: 4, title: 'Play Lists', icon: 'featured_play_list', to: routeLink.home.to },
      ],
    };
  },
};
</script>

<style>
</style>
