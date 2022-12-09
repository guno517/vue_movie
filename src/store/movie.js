import axios from 'axios';

export default {
  namespaced: true,
  state() {
    return {
      detailMovie: {},
    };
  },
  mutations: {
    updateDetailMovie(state, movie) {
      Object.keys(movie).forEach((key) => {
        state[key] = movie[key];
      });
    },
  },
  actions: {
    async fetchMovie({ commit }, payload) {
      const { id } = payload;
      try {
        const res = await _searchMovie({
          ...payload,
        });
        commit('updateDetailMovie', {
          detailMovie: res.data,
        });
      } catch (error) {
        console.error('특정 영화 정보 가져오기 실패');
      }
    },
  },
};

async function _searchMovie(options) {
  return await axios.post('/.netlify/functions/movie', options);
}
