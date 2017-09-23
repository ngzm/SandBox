<template>
<section>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 xl2 v-for="game in games" :key="game.id">
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
            <Detail />
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</section>
</template>

<script>
import Detail from './Detail.vue';

export default {
  data() {
    return {
      games: [
        {
          id: 1,
          title: 'Breakfast',
          description: 'easy',
          url: 'aaaa',
          iconUri: '/dist/asetts/00-52-29-429_640.jpg',
          star: 4,
          access: 50
        },{
          id: 2,
          title: 'Tasty burger',
          description: 'easy',
          url: 'aaaa',
          iconUri: '/dist/asetts/burger-827309_640.jpg',
          star: 1,
          access: 10
        },{
          id: 3,
          title: 'Camera',
          description: 'easy',
          url: 'aaaa',
          iconUri: '/dist/asetts/camera-813814_640.jpg',
          star:2,
          access:30
        },{
          id: 4,
          title: 'Morning',
          description: 'easy',
          url: 'aaaa',
          iconUri: '/dist/asetts/morning-819362_640.jpg',
          star: 5,
          access: 200
        },{
          id: 5,
          title: 'Hats',
          description: 'easy',
          url: 'aaaa',
          iconUri: '/dist/asetts/hats-829509_640.jpg',
          star: 3,
          access: 60
        },{
          id: 6,
          title: 'Honey',
          description: 'easy',
          url: 'aaaa',
          iconUri: '/dist/asetts/honey-823614_640.jpg',
          star: 2,
          access: 15
        },{
          id: 7,
          title: 'Vegetables',
          description: 'easy',
          url: 'aaaa',
          iconUri: '/dist/asetts/vegetables-790022_640.jpg',
          star: 5,
          access: 320
        },{
          id: 8,
          title: 'Water plant',
          description: 'easy',
          url: 'aaaa',
          iconUri: '/dist/asetts/water-plant-821293_640.jpg',
          star: 5,
          access: 344
        },{
          id: 9,
          title: 'Breakfast',
          description: 'easy',
          url: 'aaaa',
          iconUri: '/dist/asetts/00-52-29-429_640.jpg',
          star: 4,
          access: 50
        },{
          id: 10,
          title: 'Tasty burger',
          description: 'easy',
          url: 'aaaa',
          iconUri: '/dist/asetts/burger-827309_640.jpg',
          star: 1,
          access: 10
        },{
          id: 11,
          title: 'Camera',
          description: 'easy',
          url: 'aaaa',
          iconUri: '/dist/asetts/camera-813814_640.jpg',
          star: 2,
          access: 30
        },{
          id: 12,
          title: 'Morning',
          description: 'easy',
          url: 'aaaa',
          iconUri: '/dist/asetts/morning-819362_640.jpg',
          star: 5,
          access: 200
        }],
    };
  },
  components: { Detail },
};
</script>

<style>
h2.lists {
  color: orange;
}
</style>
