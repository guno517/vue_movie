import { createStore } from 'vuex';
import movies from './movies';
import movie from './movie';

export default createStore({
  state() {
    return {
      message: 'Hello store index.js',
    };
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    movie,
    movies,
  },
});
