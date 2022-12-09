import axios from 'axios';

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
      const { title, position } = payload;
      const res = await _searchMovies({
        ...payload,
      });
      console.log(res);
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
  // return await fetch('/.netlify/functions/workspace', {
  //   method: 'POST',
  //   body: JSON.stringify(options),
  // }).then((res) => res.json());
  return await axios.post('/.netlify/functions/workspace', options);
}
