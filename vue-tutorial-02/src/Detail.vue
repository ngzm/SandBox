<template>
<v-layout row justify-center>
  <v-dialog v-model="dialog" width="90%">

    <v-btn icon slot="activator">
      <v-icon medium class="white--text">play_circle_filled</v-icon>
    </v-btn>

    <v-card>
      <v-card-title class="headline">{{ game.title }}</v-card-title>
      <v-card-text>
        <v-container fluid grid-list-xl>
          <v-layout row wrap>
            <v-flex sm12 md6>
              <img :src="game.iconUri" style="width: 100%" />
            </v-flex>
            <v-flex sm12 md6>
              <p>{{ game.description }}</p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          class="white--text red darken-2"
          dark
          flat="flat"
          @click.native="dialog = false"
        >Play Game</v-btn>
        <v-btn
          class="white--text teal darken-2"
          dark
          flat="flat"
          @click.native="dialog = false"
        >Close</v-btn>
      </v-card-actions>
    </v-card>
    </v-container>
  </v-dialog>
</v-layout>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    id: { type: Number },
  },
  data () {
    return {
      dialog: false,
    };
  },
  computed: {
    // game: function() { return this.$store.getters.getGameById(this.id); },
    game: function() { return this.getGameById(this.id); },
    ...mapGetters([
      'getGameById',
    ]),
  },
};
</script>

<style>
h2.detail {
  color: red;
}
</style>