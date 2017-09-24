import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  store: {
    games: [],
  },
  getters: {
    getGames: (state) => {
      return state.games;
    },
    getGameById: (state) => (id) => {
      return state.games.find(game => game.id === id);
    },
  },
  mutations: {
    setGames(state, games) {
      state.games = games;
    },
  },
});

