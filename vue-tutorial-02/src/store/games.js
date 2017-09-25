import naxios from '../libs/naxios';

export default {
  namespaced: true,

  state: {
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
    setGames: (state, games) => {
      state.games = games;
    },
  },

  actions: {
    fetchGames: (context, category) => {
      const url = `/dist/asetts/games/games${category}.json`;
      naxios.get(url)
        .then((res) => {
          console.log('---- fetchGames OK ----');
          console.dir(res.data);
          context.commit('setGames', res.data);
        })
        .catch((err) => {
          console.log('---- fetchGames err ----');
          console.dir(err);
        });
    },
  },
};
