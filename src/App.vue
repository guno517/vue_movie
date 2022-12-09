<template>
  <HeaderNav />
  <RouterView />
</template>

<script>
import HeaderNav from '~/components/HeaderNav';
export default {
  components: {
    HeaderNav,
  },
  data() {
    return {
      title: '',
      isShow: false, // 검색 결과 하나 선택하면 리스트 안보이게 하기
    };
  },
  computed: {
    movies() {
      return this.$store.state.movies.search;
    },
    total() {
      return this.$store.state.movies.totalResults;
    },
    detailMovie() {
      return this.$store.state.movie.detailMovie;
    },
  },
  methods: {
    // 함수명 바꾸기 App.vue와 store부분
    fetchMovies() {
      this.$store.dispatch('movies/fetchMovies', {
        title: this.title,
      });
    },
    getMovieId(data) {
      this.$store.dispatch('movie/fetchMovie', {
        id: data, // 변수바꾸기
        // this.$route.params.id
      });
      this.title = '';
      this.$store.commit('movies/clearSearch');
    },
  },
};
</script>