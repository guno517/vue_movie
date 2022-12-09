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
        const movie = await fetch(
          `https://www.omdbapi.com?apikey=7035c60c&i=${id}&plot=full`
        ).then((res) => res.json());
        commit('updateDetailMovie', {
          detailMovie: movie,
        });
        //합치고 나서
        // commite('reset')
      } catch (error) {
        console.error('특정 영화 정보 가져오기 실패');
      }
    },
  },
};
