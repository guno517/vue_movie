const axios = require('axios');

export default {
  namespaced: true,
  state() {
    return {
      title: 'Hello store movie.js',
      movies: [],
      headerMovies: [],
      totalResults: 0,
    };
  },
  mutations: {
    updateResult(state, Search) {
      state.movies = Search;
    },
    headerUpdateMovie(state, Search) {
      state.headerMovies = Search;
    },
    clearSearch(state) {
      state.movies = [];
    },
  },
  actions: {
    async fetchMovies({ commit }, payload) {
      const { position } = payload;
      const res = await _searchMovies({
        ...payload,
        method: 'GET',
      });
      const { Search } = res.data;
      if (position === 'main') {
        commit('updateResult', Search);
      } else {
        commit('headerUpdateMovie', Search);
      }
    },
  },
};

async function _searchMovies(payload) {
  return await axios.post('/.netlify/functions/movies', payload);
}
