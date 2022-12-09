import axios from 'axios';

export default {
  namespaced: true,
  state() {
    return {
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
      const { title, position } = payload;
      const res = await _searchMovies({
        ...payload,
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

async function _searchMovies(options) {
  return await axios.post('/.netlify/functions/movies', options);
}
