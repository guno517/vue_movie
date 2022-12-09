import { createStore } from 'vuex';
import movies from './movies';
import movie from './movie';

export default createStore({
  modules: {
    movie,
    movies,
  },
});
