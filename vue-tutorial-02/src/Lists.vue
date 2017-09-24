<template>
<section>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 xl2 v-for="game in getGames" :key="game.id">
        <v-card class="grey darken-2 white--text" flat>
          <v-card-media :src="game.iconUri" height="200px">
          </v-card-media>
          <v-card-actions>
            <span>{{ game.title }}
            <br>
              <v-icon
                v-for="n in game.star"
                :key="n"
                class="yellow--text" style="font-size:75%"
              >star</v-icon>
            </span>
            <v-spacer></v-spacer>
            <Detail v-bind:id="game.id" />
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</section>
</template>

<script>
import { mapGetters } from 'vuex';
import Detail from './Detail.vue';

export default {
  computed: {
    ...mapGetters([
      'getGames',
    ]),
  },
  components: { Detail },
};
</script>

<style>
h2.lists {
  color: orange;
}
</style>
