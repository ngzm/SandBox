<template>
<section>
  <h2 class="other-app">other template</h2>
  <div>
    <router-view></router-view>
  </div>
</section>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: mapMutations([
    'setGames',
  ]),
  created() {
    const games = [
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
      }];
    // this.$store.commit('setGames', games);
    this.setGames(games);
  },
};
</script>

<style>
h2.other-app {
  color: pink;
}
</style>
