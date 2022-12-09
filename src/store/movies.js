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
      const movies = await fetch(
        `https://www.omdbapi.com?apikey=7035c60c&s=${title}`
      ).then((res) => res.json());
      if (position === 'main') {
        commit('updateResult', movies.Search);
      } else {
        commit('headerUpdateMovie', movies.Search);
      }
    },
  },
};
